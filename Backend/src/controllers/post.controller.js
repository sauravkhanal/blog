import Post from "../models/post.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createPost = asyncHandler(async (req, res, next) => {

    if (!req.body.title) return res.status(400).json(new ApiError(400, "title of post is required"));
    if (!req.body.body) return res.status(400).json(new ApiError(400, "content of post is required"));

    const imageLocalPath = req.file?.path;
    let image

    if (imageLocalPath) {
        image = await uploadOnCloudinary(imageLocalPath)
    }

    const slug = req.body.title.split(' ').join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');
    // const category = req.body.category?.split(' ')[0]

    const nameExists = await Post.findOne({ slug })
    if (nameExists) return res.status(400).json(new ApiError(400, "A post with same title already exists."))

    const newPost = await Post.create({
        title: req.body.title,
        body: req.body.body,
        imageURL: image?.url,
        author: req.user._id,
        slug,
        category: req.body.category
    })

    return res.status(200).json(new ApiResponse(200, "The post has been created successfully!", newPost))

})


export const getPost = asyncHandler(async (req, res, next) => {

    const page = parseInt(req.query?.page) || 1;
    const limit = parseInt(req.query?.limit) || 5;

    if (isNaN(page) || page < 1) {
        return res.status(400).json(new ApiError(400, 'Invalid page number. Page must be a positive integer.'))
    }
    if (isNaN(limit) || limit < 1 || limit > 100) {
        return res.status(400).json(new ApiError(400, 'Invalid limit value. Limit must be a positive integer between 1 and 100.'))
    }

    const count = await Post.countDocuments()
    if (count === 0) {
        return res.status(404).json(new ApiResponse(404, "No posts found"));
    }

    const totalPages = Math.ceil(count / limit);
    const hasNextPage = page < totalPages;

    if (page > totalPages) {
        return res.json(new ApiResponse(200, "No items found on this page", { userContribution: [], pageInfo: { totalItems: count, totalPages, currentPage: page, hasNextPage: false } }));
    }

    const posts = await Post.find().sort({createdAt: -1}).skip((page - 1) * limit).limit(limit)

    const response = {
        posts,
        pageInfo: {
            totalItems: count,
            totalPages,
            currentPage: page,
            hasNextPage,
        }
    }

    return res.status(200).json(new ApiResponse(200, "The posts have been retrieved successfully!", response))

})


export const getPostFromSlug = asyncHandler(async (req, res, next) => {
    const slug  = req.params?.slug
    if (!slug) return res.status(400).json(new ApiError(400, "Slug is required"))
    const post = await Post.findOne({ slug })
    if (!post) return res.status(404).json(new ApiResponse(404, "No posts found"));
    return res.status(200).json(new ApiResponse(200, "Post retrieved successfully", post))
})


export const getPostFromId = asyncHandler(async (req, res, next) => {
    const _id  = req.user?._id
    if (!_id) return res.status(400).json(new ApiError(400, "Couldn't retrieve id"))
    const post = await Post.find({ author: _id })
    if (!post) return res.status(404).json(new ApiResponse(404, "No posts found"));
    return res.status(200).json(new ApiResponse(200, "Post retrieved successfully", post))
})
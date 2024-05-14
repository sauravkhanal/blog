import { useNavigate } from 'react-router-dom';
import placeholderImage from "../assets/images/placeholderImage.jpg"
function Card({ imageURL, category, title,slug, body, createdAt, minutesToRead }) {
  const navigation = useNavigate()
  function handleClick() {
    navigation(`/post/${slug}`)
  }
  return (
    <div className="group p-2 hover:scale-95 transition bg-white hover:bg-gray-200 hover:dark:bg-zinc-700 dark:bg-zinc-800 text-gray-500 max-w-sm font-semibold text-sm space-y-2 cursor-pointer font-nunito flex flex-col shadow-lg" onClick={handleClick}>
      <img src={imageURL || placeholderImage} alt={title} className="object-cover p-0 aspect-[3/2]" />
      <p className="">{category.toUpperCase()}</p>
      <h2 className="text-gray-900 dark:text-gray-200 text-xl font-bold ">{title}</h2>
      <p className="font-normal text-justify overflow-ellipsis flex-grow line-clamp-2 text-base" dangerouslySetInnerHTML={{__html:body}}></p>
      <p className="place-self-end">{new Date(createdAt).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}&nbsp;-&nbsp;{minutesToRead} min read</p>
    </div>
  )
}

export default Card
type CardProp = {
  thumbnailURL: string,
  category: string,
  title: string,
  description: string,
  date: Date,
  time: number
}

function Card({ thumbnailURL, category, title, description, date, time }: CardProp) {
  return (
    <div className="group p-2 hover:scale-95 transition bg-white hover:bg-gray-200 hover:dark:bg-zinc-700 dark:bg-zinc-800 text-gray-500 max-w-sm font-semibold text-sm space-y-2 cursor-pointer font-nunito flex flex-col shadow-lg">
      <img src={thumbnailURL} alt={title} className="object-contain p-0 " loading="lazy" />
      <p className="">{category.toUpperCase()}</p>
      <h2 className="text-gray-900 dark:text-gray-200 text-xl font-bold ">{title}</h2>
      <p className="font-normal text-justify overflow-ellipsis flex-grow line-clamp-2 text-base">{description}</p>
      <p className="place-self-end">{date.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}&nbsp;-&nbsp;{time} min read</p>
    </div>
  )
}

export default Card
import Card from "./components/Card"
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.jpg";
import image6 from "./assets/images/image6.jpg";
import image7 from "./assets/images/image7.jpg";
import image8 from "./assets/images/image8.jpg";
import Header from "./components/Header";


export default function App() {
  // const item1 = {
  //   thumbnailURL: "https://images.icc-cricket.com/image/upload/t_ratio21_9-size60/prd/b06wpz2rhig3l1ixl7dr",
  //   category: "sports",
  //   title: "U19 CWC 2024 Day 8 Round-up: Nepal, West Indies win thrillers; Bangladesh overcome USA ",
  //   description: "Nepal won an edge-of-the-seat thriller against Afghanistan by one wicket to qualify for the Super Sixes while West Indies edged home against England and Bangladesh saw off a spirited USA side.",
  //   date: new Date("2024-1-27"),
  //   time: 5
  // }
  const itemsArray = [
    {
      thumbnailURL: image8,
      category: "sports",
      title: "U19 CWC 2024 Day 8 Round-up: Nepal, ",
      description: "Nepal won an edge-of-the-seat thriller against Afghanistan by one wicket to qualify for the Super Sixes while West Indies edged home against England and Bangladesh saw off a spirited USA side.",
      date: new Date("2024-01-27"),
      time: 5
    },
    {
      thumbnailURL: image1,
      category: "technology",
      title: "Exciting Tech News",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis purus.",
      date: new Date("2024-01-28"),
      time: 8
    },
    {
      thumbnailURL: image2,
      category: "entertainment",
      title: "Movie Night Extravaganza",
      description: "Enjoy a night of blockbuster movies with your friends and family.",
      date: new Date("2024-01-29"),
      time: 7
    },
    {
      thumbnailURL: image3,
      category: "food",
      title: "Delicious Food Festival",
      description: "Indulge in a variety of mouth-watering dishes at the annual food festival.",
      date: new Date("2024-01-30"),
      time: 6
    },
    {
      thumbnailURL: image4,
      category: "travel",
      title: "Explore the World",
      description: "Embark on a journey to discover new places and create lasting memories.",
      date: new Date("2024-01-31"),
      time: 10
    },
    {
      thumbnailURL: image5,
      category: "fashion",
      title: "Fashion Show Extravaganza",
      description: "Witness the latest trends in fashion at the grand fashion show event.",
      date: new Date("2024-02-01"),
      time: 4
    },
    {
      thumbnailURL: image6,
      category: "music",
      title: "Concert Under the Stars",
      description: "Experience a magical night of music under the starry sky with top artists from around the world.",
      date: new Date("2024-02-02"),
      time: 9
    },
    {
      thumbnailURL: image7,
      category: "arts",
      title: "Art Exhibition",
      description: "Immerse yourself in the world of creativity and artistic expression at the annual art exhibition.",
      date: new Date("2024-02-03"),
      time: 6
    },
    {
      thumbnailURL: image8,
      category: "general",
      title: "title of the blog can be long also",
      description: "this is the description that is present in the thumbnail section of the blog, it can only be two line regardless the size of card",
      date: new Date("2024-02-03"),
      time: 6
    },
    {
      thumbnailURL: image8,
      category: "general",
      title: "title of the blog can be long also",
      description: "this is the description that is present in the thumbnail section of the blog, it can only be two line regardless the size of card",
      date: new Date("2024-02-03"),
      time: 6
    },
  ];




  return (
    <div className="font-nunito bg-gray-200 dark:bg-black min-w-full min-h-svh flex-col py-5">
      <Header />
      <div className="mx-10 flex justify-center pt-7">

        {/* <div className="flex flex-wrap justify-center content-start gap-5 border border-white border-solid "> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {itemsArray.map((data, index) => <Card key={index} {...data} />)}

        </div>

        {/* <Card {...item1}/> */}
      </div>
    </div>
  )
}
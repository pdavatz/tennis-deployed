import '../styles/content.scss'
import Images from "./Images";
import Video from "./Video";
import Home from "./Home";

export default function Content({ currentPage }) {

  const renderContent = () => {
    if (currentPage === 'home') {
      return <Home />
    } else if (currentPage === 'images') {
      return <Images />
    } else if (currentPage === 'video') {
      return <Video />
    }
  }

  return (
      <>
        {renderContent()}
      </>
  )
}

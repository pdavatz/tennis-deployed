import '../styles/video.scss'

export default function Video() {
  return (
      <>
        <div className="video">
          <div className="video-container">
            <h1 className="video-container-title">
              Video
            </h1>
          </div>
          <div className="video-container">
            <iframe
                className="video-container-iframe"
                width="560" height="315"
                src="https://www.youtube.com/embed/jqYYy3jfJ-o?si=TBhG265278mUyJ14"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            >
            </iframe>
          </div>
        </div>
      </>
  )
}

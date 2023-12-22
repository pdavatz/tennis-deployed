import '../styles/images.scss'
import tennisRacket from '../assets/tennis-racket.png'
import tennisBalls from '../assets/tennis-balls.png'
import rogerFederer from '../assets/roger-federer.png'

export default function Images() {
  return (
      <>
        <div className="images">
          <div className="images-container">
            <h1 className="images-container-title">Bilder</h1>
          </div>
          <div className="images-container">
            <div className="images-container-content">
              <p className="images-container-content-text">
                Tennis ist ein faszinierender Sport, der sowohl Geschicklichkeit als auch Ausdauer erfordert. Zwei Spieler stehen sich auf einem rechteckigen Spielfeld gegenüber, das in der Mitte durch ein Netz geteilt ist. Mit einem Schläger versuchen sie, den Ball über das Netz zu spielen und dabei Punkte zu erzielen. Jedes Match besteht aus Sätzen, die wiederum aus Spielen bestehen. Der Sport erfordert schnelle Reflexe, präzise Schläge und eine strategische Herangehensweise, um den Gegner zu überlisten.
              </p>
            </div>
            <div className="images-container-content">
              <img
                  src={tennisRacket}
                  className="images-container-content-image"
              />
            </div>
            <div className="images-container-content">
              <p className="images-container-content-text">
                Tennis hat eine reiche Geschichte und hat sich im Laufe der Jahre zu einem weltweit beliebten Sport entwickelt. Ursprünglich im 19. Jahrhundert in England entstanden, hat es seinen Weg in Länder auf der ganzen Welt gefunden und zieht Millionen von Fans und Spielern an. Neben den professionellen Turnieren gibt es auch zahlreiche Amateurligen und Clubs, die das Spiel fördern und eine Gemeinschaft von Tennisbegeisterten zusammenbringen.
              </p>
            </div>
            <div className="images-container-content">
              <img
                src={tennisBalls}
                className="images-container-content-image"
              />
            </div>
            <div className="images-container-content">
              <p className="images-container-content-text">
                Neben den physischen Vorteilen bietet Tennis auch zahlreiche mentale und soziale Vorteile. Es fördert die Konzentration, verbessert die Hand-Auge-Koordination und stärkt die Muskulatur. Darüber hinaus lehrt es Spieler Teamarbeit, Fairplay und Durchhaltevermögen. Die Mischung aus Technik, Taktik und körperlicher Fitness macht Tennis zu einem anspruchsvollen, aber auch lohnenden Sport für Menschen jeden Alters.
              </p>
            </div>
            <div className="images-container-content">
              <img
                src={rogerFederer}
                className="images-container-content-image"
              />
            </div>
          </div>
        </div>
      </>
  )
}

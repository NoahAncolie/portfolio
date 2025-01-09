import "../../assets/css/histoire_art.scss"
import { Link } from "react-router-dom"
const HistoireDeLart = () => {
    const events = [
        {date: '15ᵉ - 16ᵉ', name: 'Renaissance Italienne', link: 'renaissance-italienne', subtitle: "Rupture avec le Moyen Âge", short: "Influencée par les traditions Antiques, l'ouverture et l'élégance remplacent le besoin de protection guerrier du Moyen Age. La protection des grandes familles et l'invention de l'imprimerie, en 1436, permettent le développement des arts."},
        {date: '15ᵉ - 16ᵉ', name: 'Renaissance Francaise', link: 'renaissance-française', subtitle: "Mouvement culturel", short: "La Renaissance française est un mouvement artistique et culturel situé en France entre le milieu du XVᵉ siècle et le début du XVIIᵉ siècle. Étape de l'époque moderne, la Renaissance apparaît en France après le début du mouvement en Italie et sa propagation dans d'autres pays européens."},
        {date: '1589 - 1650', name: 'Style Louis XIII', link: 'louis-XIII', subtitle: "Style de transition", short: "Caractéristique d'une période de transition entre le style Renaissance et le style baroque dont il assimile progressivement les influences italienne, espagnole et flamande, il a inspiré à la fin du XIXe siècle et au début du XXe siècle, le style néo-Louis XIII1."}
    ]

    return (
        <div>
            <h1 className="histoire_title">Histoire de l'art</h1>
            <ul class="timeline">
                {events.map((event, index) => 
                    <li class="timeline-event" key={index}>
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail"><Link to={event.link} className="event-link">{event.date}</Link></p>
                            <h3>{event.name}</h3>
                            <h4>{event.subtitle}</h4>
                            <p className="short">{event.short}</p>
                        </div>
                    </li>
                )}
            </ul>  
        </div>
    )
}

export default HistoireDeLart

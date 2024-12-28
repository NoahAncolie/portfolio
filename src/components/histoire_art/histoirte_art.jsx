import "../../assets/css/histoire_art.scss"
import { Link } from "react-router-dom"
const HistoireDeLart = () => {
    const events = [
        {date: '15ᵉ - 16ᵉ', name: 'Renaissance Italienne', link: 'renaissance-italienne', short: "Influencée par les traditions Antiques, l'ouverture et l'élégance remplacent le besoin de protection guerrier du Moyen Age. La protection des grandes familles et l'invention de l'imprimerie, en 1436, permettent le développement des arts."},
        {date: '15ᵉ - 16ᵉ', name: 'Renaissance Francaise', link: 'renaissance-française'}
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
                            <p className="short">{event.short}</p>
                        </div>
                    </li>
                )}
            </ul>  
        </div>
    )
}

export default HistoireDeLart

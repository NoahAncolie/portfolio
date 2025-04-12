import "../../assets/css/histoire_art.scss"
import { Link } from "react-router-dom"
const HistoireDeLart = () => {
    const events = [
        {date: '15ᵉ - 16ᵉ', name: 'Renaissance Italienne', link: 'renaissance-italienne', subtitle: "Rupture avec le Moyen Âge", short: "Influencée par les traditions Antiques, l'ouverture et l'élégance remplacent le besoin de protection guerrier du Moyen Age. La protection des grandes familles et l'invention de l'imprimerie, en 1436, permettent le développement des arts."},
        {date: '15ᵉ - 16ᵉ', name: 'Renaissance Francaise', link: 'renaissance-française', subtitle: "Rupture avec le Moyen Âge", short: "La Renaissance française est un mouvement artistique et culturel situé en France entre le milieu du XVᵉ siècle et le début du XVIIᵉ siècle. Étape de l'époque moderne, la Renaissance apparaît en France après le début du mouvement en Italie et sa propagation dans d'autres pays européens."},
        {date: '1589 - 1650', name: 'Style Louis XIII', link: 'louis-XIII', subtitle: "Style de transition", short: "Caractéristique d'une période de transition entre le style Renaissance et le style baroque dont il assimile progressivement les influences italienne, espagnole et flamande, il a inspiré à la fin du XIXe siècle et au début du XXe siècle, le style néo-Louis XIII1."},
        {date: '1650 - 1700', name: 'Style Louis XIV', link: 'louis-XIV', subtitle: "Richesse et Majestée", short: "Le style Louis XIV est un style d'ameublement couvrant plus ou moins la période du règne de Louis XIV (1661 à 1715). Ce style est caractérisé par la majesté et la richesse de son mobilier. C'est pendant cette période que la technique de marqueterie dite « marqueterie Boulle » est développée."},
        {date: '1789 - 1804', name: 'Style Directoire', link: 'directoire', subtitle: "Transition entre Louis XVI et l'Empire", short: "Le style Directoire est un style d'ameublement et de décoration en vogue de 1789 à 1803. Marquant la transition entre les styles Louis XVI et Empire, il se caractérise par une facture sobre, des formes simples et l'apparition de certains thèmes décoratifs."},
        {date: '1815 - 1830', name: 'Style Restauration', link: 'restauration', subtitle: "Règnes de Louis XVIII et Charles X", short: "Le style Restauration, contemporain du Biedermeier qui fleurit ailleurs en Europe continentale, caractérise l'art sous les règnes de Louis XVIII et de son frère Charles X. L'état des finances ne permet pas de grandes dépenses."},
        {date: '1830 - 1850', name: 'Style Louis Philippe', link: 'louis-philippe', subtitle: "Règne de Louis Philippe (1830 - 1848)", short: "Le style Louis-Philippe est un style de mobilier français en vogue sous le règne de Louis-Philippe (1830-1848) qui influence aussi l'architecture. C'est un style de bourgeois affairés et cossus, partagés entre le souci de leur confort et le désir de se donner des lettres de noblesse."},
        {date: '1850 - 1890', name: 'Style Napoléon III', link: 'napoleon-III', subtitle: "Règne de Napoléon III (1848 - 1890)", short: "Le style Second Empire, dit aussi style Napoléon III, est un style architectural, d'ameublement, d'arts décoratifs et vestimentaire, né en France durant le Second Empire, sous l'impulsion de l' empereur Napoléon III et de l' impératrice Eugénie."},
        {date: '1890 - 1914', name: 'Style Art Nouveau', link: 'art-nouveau', subtitle: "Mouvement artistique de la fin du XIXe et du début du XXe siècle qui s'appuie sur l'esthétique des lignes courbes.", short: "L'Art nouveau est un mouvement artistique de la fin du XIXᵉ et du début du XXᵉ siècle qui s'appuie sur l'esthétique des lignes courbes. Il met en avant les motifs floraux. Né en réaction contre les dérives de l'industrialisation et la reproduction des anciens styles, c'est un mouvement soudain et rapide qui connaît un développement international."},
        {date: '1920 - 1939', name: 'Style Art Déco', link: 'art-deco', subtitle: "Abréviation de « Arts décoratifs », mouvement artistique d'architecture-décoration de portée mondiale, de 1920 à 1939.", short: "L'Art déco est un mouvement artistique de portée mondiale né progressivement dans les années 1910 et qui prend son plein épanouissement au cours des années 1920, avant de décliner lentement à partir des années 1930. Il embrasse l'ensemble des activités artistiques et les métiers d'art. Le « style Art déco » tire son nom de l'Exposition internationale des arts décoratifs et industriels modernes qui se tint à Paris en 1925."},
        {date: '1930 - 1960', name: 'Fonctionnalisme', link: 'fonctionnalisme', subtitle: "Marqué soit par la pérennité du classique, soit pas le fonctionnalisme lié à la production en série.", short: "En architecture, le fonctionnalisme est un principe selon lequel la forme des bâtiments doit être exclusivement l'expression de leur usage. Cette formulation n'est pas si évidente à définir, car elle est matière à confusion et à controverse à l'intérieur de la profession, particulièrement en ce qui concerne le Mouvement moderne."},
        {date: '1929', name: 'Design', link: 'design', subtitle: "Historiquement le « design » serait dû à la crise de 1929.", short: "Face à la baisse dramatique de la consommation, les industriels font appel, sur avis des publicitaires, aux artistes commerciaux pour tenter de stimuler les ventes. Déjà l’automobile avait ressenti le besoin de se distinguer de la concurrence par l’image, jusqu’alors ignorée par les fabricants. Exemple avec la « Ford T » qui, constamment améliorée sur le plan technique, gardait sensiblement le même aspect extérieur. « N’importe quelle couleur, pourvu qu’elle soit noire ! » disait Henri Ford."},
    ]

    return (
        <div className="page_layer">
            <h1 className="page_title">Histoire de l'art</h1>
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

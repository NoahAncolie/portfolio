import voute from '../../../assets/images/histoire_art/voute-renaissance-italienne.jpg'
import arcade from '../../../assets/images/histoire_art/arcades-pise.jpg'
import rotonda from '../../../assets/images/histoire_art/rotonda-palladio.jpg'
import michelAnge from '../../../assets//images/histoire_art/michel-ange.jpg'
import tempietto from '../../../assets/images/histoire_art/tempietto-bramante.jpg'
import thermes from '../../../assets/images/histoire_art/titus-leclerc.jpg'
import rinceau from '../../../assets/images/histoire_art/rinceau.jpg'
import arabesque from '../../../assets/images/histoire_art/arabesque.jpg'
import grotesque from '../../../assets/images/histoire_art/grotesque.jpg'
import medaillon from '../../../assets/images/histoire_art/cuir-medaillon.jpg'
import cuir from '../../../assets/images/histoire_art/cuir-decoupe.png'
import guirlande from '../../../assets/images/histoire_art/guirlande.jpg'
import raphaelRooms from '../../../assets/images/histoire_art/raphael-rooms.jpg'
import voluteFleurie from '../../../assets/images/histoire_art/volute-fleurie.jpg'
import rondeBosse from '../../../assets/images/histoire_art/ronde-bosse.jpg'
import stuc from '../../../assets/images/histoire_art/stuc.jpg'
import { Rinceau } from "../../../assets/svg/rinceau."
import { Focus } from "../../focus"
import { useState } from "react"

const Limiter = () => {
    return (
        <div className="limiter">
            <Rinceau/>
        </div>
    )
}

export const RenaissanceItalienne = () => {
    
    const [focusState, setFocus] = useState(<></>)
    const [zoomState, setZoom] = useState(false)
    const [zoomSrc, setSrc] = useState("")

    const FocusImg = ({src, alt}) => {
        return (
            <img className="tooltip-img" src={src} alt={alt} onMouseDown={() => {setSrc(src); setZoom(true);}} />
        )
    }


    return (
        <div className="histoire-art-cours">
            {zoomState ? <div className="big-img">
                <div className="close" onMouseDown={() => {setZoom(false)}}>X</div>
                <img src={zoomSrc} />
            </div> : <></>}
            
            <h1 className="histoire-art-cours-title">La <i>Renaissance Italienne</i> du XVᵉ au XVIᵉ siècle</h1>
            <Focus Content={""} />
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="historique">
                    <p className="historique">
                        <i>Influencée par les traditions Antiques, <b>l'ouverture et l'élégance</b> remplacent le besoin de protection guerrier du Moyen Age.</i>
                        <br/>
                        <i>La <b>protection des grandes familles</b> et <b>l'invention de l'imprimerie</b>, en 1436, permettent le développement des arts.</i>
                    </p>
                </div>

                <div id="architecture" className="partie-cours">
                    <h2>Architecture</h2>
                    <Limiter/>
                    <ol>
                        <li>Retour aux <span className="tooltip" onMouseOver={() => {setFocus(<><i>L'ordre</i>, en architecture, détermine les <b>proportions</b>, les <b>formes</b> et l'<b>ornementation</b> de toute partie construite en élévation.</>)}}>ordres</span> antiques Grecquo-Romains</li>
                        <li>L'ornementation de l'édifice est un point plus important que l'ossature. 
                            Sont utilisés : 
                            <ul>
                                <li><span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={voute} alt="Voûte Renaissance Italienne" /><i>Les Pouilles, Italie</i> <br/>: Une voûte est un ouvrage architectural,dont le dessous est fait en arc ou en plate-bande</>)}}>Voûtes</span></li>
                                <li><span className="tooltip"  onMouseOver={() => {setFocus(<><FocusImg src={arcade} alt="Ardades de la cathédrale de Pise" /><i>Pise, Italie</i> <br/>: Une arcade est une série ordonnée d'arcs.</>)}}>Arcades</span></li>
                                <li>Ornementation colorée</li>
                                <li>Marbres Blancs</li>
                                <li>Marbres Colorés</li>
                            </ul>
                        </li>
                        <li>Les principaux architectes : 
                            <ul>
                                <li><span className="tooltip"  onMouseOver={() => {setFocus(<><FocusImg src={tempietto} alt="Tempietto Bramante" /> <i>Tempietto par Bramante, Rome</i> <h3>Bramante</h3><h4>Architecte et peintre italien</h4>Donato « Donnino » di Angelo di Pascuccio dit Bramante, est né en 1444 à Fermignano près de la cité d'Urbino dans l'actuelle région des Marches en Italie et mort le 11 avril 1514 à Rome. Polymathe, Bramante compte parmi les architectes et les peintres les plus importants de la Renaissance.</>)}}>Bramante</span></li>
                                <li><span className="tooltip"  onMouseOver={() => {setFocus(<><FocusImg src={michelAnge} alt="Michel-Ange portrait" /> <h3>Michel-Ange</h3> <h4>Peintre, sculpteur, poète et architecte italien du XVIe siècle</h4>Michelangelo di Lodovico Buonarroti Simoni, né le 6 mars 1475 à Caprese et mort le 18 février 1564 à Rome, est un sculpteur, peintre, architecte, poète et urbaniste florentin de la Haute Renaissance.</>)}}>Michel Ange</span></li>
                                <li><span className="tooltip"  onMouseOver={() => {setFocus(<><FocusImg src={rotonda} alt="La rotonda par palladio" /> <i>La villa 'Rotonda' par Palladio</i> <h3>Andrea Palladio</h3> <h4>Architecte vénitien</h4>Andrea di Pietro della Gondola, dit Andrea Palladio, né à Padoue le 30 novembre 1508 et mort à Vicence le 19 août 1580, est un architecte de la Renaissance italienne. Il est l'auteur d'un traité intitulé Les Quatre Livres de l'architecture.</>)}}>Palladio</span></li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <div id="decorations" className="partie-cours">
                    <h2>Éléments de décoration</h2>
                    <Limiter/>
                    <p>
                        Les <b>motifs décoratifs</b> de la <u>Renaissance Italienne</u> sont principalement inspirés des décors découverts dans les Thermes de Titus à <b>Rome</b>. <br/>
                        Les motifs les plus fréquents sont :
                        <ul>
                            <li>Les <span className="tooltip"  onMouseOver={() => {setFocus(<><FocusImg src={rinceau} alt="Rinceau sur un meuble en bois" /> <h3>Rinceau</h3> Le rinceau est un motif ornemental constitué d'une tige se développant en volutes et en contre-volutes, ornée le plus souvent de feuillages, de fleurs ou de fruits. Cette arabesque sert d'ornement en architecture ou dans les arts décoratifs. <i>Un enroulement végétal</i></>)}}>Rinceaux</span></li>
                            <li>Les <span className="tooltip"  onMouseOver={() => {setFocus(<><FocusImg src={arabesque} alt="Arabesque avec un Ange" /><h3>Arabesque</h3> Malgré la présence musulmane en Espagne, c'est par les rapports commerciaux entre le Moyen-Orient et Venise que s'introduit le terme d'<b>arabesque</b> dans l'art occidental à partir de la Renaissance italienne (bien que le terme d'<b>entrelacs</b> soit déjà utilisé). <i>Les Arabesques sont des ornements entrelacés.</i></>)}}>Arabesques</span></li>
                            <li>Les <span className="tooltip"  onMouseOver={() => {setFocus(<><FocusImg src={grotesque} alt="Grotesque sur une colonne" /><h3>Grotesque</h3> Nom donné aux ornements fantastiques découverts aux XVᵉ et XVIᵉ siècle dans les ruines des monuments antiques Italiens.</>)}}>Grotesques</span></li>
                            <li>Les Enfants</li>
                            <li>Les <span className="tooltip"  onMouseOver={() => {setFocus(<FocusImg src={medaillon} alt="Médaillon et cuir découpé en Marqueterie Renaissance" />)}}>Médaillons</span></li>
                            <li>Les <span className="tooltip"  onMouseOver={() => {setFocus(<><FocusImg src={guirlande} alt="Guirlande de fleurs sculptée" /><h3>Guirlande</h3>Une guirlande est un motif ornemental et décoratif sculpté, représentant un entrecroisement de feuillages, de fleurs et de fruits, généralement suspendu en feston et qui orne généralement les frontons, les murs ou des mobiliers</>)}}>Guirlandes de feuillages</span></li>
                            <li>Les <span className="tooltip"  onMouseOver={() => {setFocus(<><FocusImg src={cuir} alt="Dessin d'un cuir découpé" /><p>En arts décoratifs, le motif ornemental de <b>cuir découpé</b>, aussi appelé <b>ornement auriculaire</b> ou <b>lobé</b>, rappelle par sa forme un morceau de cuir ou de métal découpé et enroulé en volutes stylisées. Il trouve son origine dans les motifs de rubans apparus au Moyen Âge. </p></>)}}>Cuirs Découpés</span></li>
                        </ul> 
                    </p>
                    <div className="titus-thermes">
                        <img className="image-centre" src={thermes} alt="Thermal Baths of Titus at Rome, A. Leclere, Hector d'Espouy" /> 
                        <p className="img-subtitle center-text"><u>THERMES DE TITUS À ROME</u> <i>Relevés et restauration de A. Leclerc (1572)</i></p>
                    </div>
                    <p><b>Les loges du Vatican</b>, sont peintes avec des fresques par <span className="tooltip" placement="top" onMouseOver={() => {setFocus(<><FocusImg src={raphaelRooms} alt="Interiors of Raphael rooms, Vatican"/><h3>Raphaël</h3><h4>Peintre et architecte italien de la Renaissance (1483–1520)</h4>Raphaël, nom francisé de Raffaello Sanzio, est un peintre et architecte italien de la Haute Renaissance, né le 28 mars ou 6 avril 1483 à Urbino dans les Marches italiennes et mort le 6 avril 1520 à Rome. Son travail est admiré pour sa clarté de forme, sa facilité de composition et sa réalisation visuelle de l'idéal néoplatonicien de la grandeur humaine.</>)}}>Raphaël</span> en 1519. Les fenêtres sont surmontées d'un fronton arqué ou triangulaire. On utilise pour les plafonds : la voûte en berceau, la coupole, les caissons.</p>    
                </div>

                <div id="mobilier" className="partie-cours">
                    <h2>Mobilier</h2>
                    <Limiter/>
                    <p> Il peut-être décoré d'<b>incrustations de matériaux précieux</b>, <b>peint</b> par de grands maîtres ou incrusté de <b>marqueterie</b>, qui commence à apparaître.
                        <br/>
                        <br/>
                        Au XVIᵉ siècle vont se développer, sur les panneaux, les <span className='tooltip' onMouseOver={() => {setFocus(<> <FocusImg src={voluteFleurie} alt="Meuble renaissance Italienne richement sculpté de volutes fleureis et chimères" className="tooltip-img" /> </>)}}>volutes fleuries</span> terminées en chimères, en balustre humain, en mascarons et en moulures ornées encadrant les figures mythologiques. La décoration en relief est obtenue par la sculpture ou la mouluration.
                        <br/> 
                        <br/> 
                        Il y a une abondance de sculpture en <span className='tooltip' onMouseOver={() => {setFocus(<> <FocusImg src={rondeBosse} alt="Sculpture en ronde bosse dans une niche"/> <i>Naples, Campania, Italy</i> <h3>Ronde-bosse</h3>La ronde-bosse est une technique de sculpture en trois dimensions de l'Antiquité qui, contrairement aux hauts-reliefs et aux bas-reliefs, n'est pas physiquement attachée à un fond mais repose sur un socle.</>)}}>ronde de bosse</span> (médaillons ou niches avec figures saillantes), pieds en forme de pattes de lion.
                        <br/>
                        <br/>
                        La décoration polychrome est obtenue par :
                        <ul>
                            <li>Le <span className="tooltip" onMouseOver={() => {setFocus(<> <FocusImg src={stuc} alt="Stuc de Giovanni Spedulo et Luigi Marinelli, Le Char d'Apollon" /> <i>Stuc de Giovanni Spedulo et Luigi Marinelli, Le Char d'Apollon, Florence, Villa di Poggio Imperiale.</i> <h3>Stuc</h3>Le stuc, dont la technique remonte à l'Antiquité, est un enduit teinté dans la masse, à base de chaux. Il est utilisé en recouvrement des plafonds et des murs, aussi bien à l'intérieur qu'à l'extérieur. C'est un mélange de chaux aérienne éteinte et de « charges », celles-ci pouvant être du sable, de la poudre de marbre ou encore de la poudre de brique.</>)}}>stuc</span>. (enduit imitant le marbre)</li>
                            <li>La peinture</li>
                            <li>Des incrustations de pâtes colorées</li>
                            <li>De la marqueterie de bois précieux</li>
                            <li>De l'incrustation d'écailles, d’ivoire, de marbres, et de pierres de couleur</li>
                        </ul>
                    </p>    
                </div>
                
            </div> 
        </div>
    )
}

{/* <span className="tooltip" onMouseOver={() => {setFocus()}}></span> */}
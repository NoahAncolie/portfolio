import { Rinceau } from "../../../assets/svg/rinceau."
import { Focus } from "../../focus"
import { useState } from "react"
import chambord from "../../../assets/images/histoire_art/chambord.jpg"
import charles8 from "../../../assets/images/histoire_art/charles_8.png"
import louis12 from "../../../assets/images/histoire_art/louis_12.jpg"
import francois1 from "../../../assets/images/histoire_art/françois_1.JPG"
import armoirette from "../../../assets/images/histoire_art/facade_armoirette.jpg"
import fleuron from "../../../assets/images/histoire_art/fleuron.jpg"
import intarsia from "../../../assets/images/histoire_art/intarsia.jpg"
import coffre from "../../../assets/images/histoire_art/coffre_fr.jpg"
import armoire from "../../../assets/images/histoire_art/armoire_fr.jpg"
import dressoir from "../../../assets/images/histoire_art/dressoir_fr.jpg"
import lit from "../../../assets/images/histoire_art/lit_fr.jpg"
import cabinet from "../../../assets/images/histoire_art/cabinet_fr.jpg"

const Limiter = () => {
    return (
        <div className="limiter">
            <Rinceau/>
        </div>
    )
}

export const RenaissanceFrançaise = () => {
    
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
            
            <h1 className="histoire-art-cours-title">La <i>Renaissance Française</i> du XVᵉ au XVIᵉ siècle</h1>
            <Focus Content={""} />
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="historique">
                    <p className="historique">
                    Elle s'étend tous au long du XVIᵉ siècle, de 1489 à 1610 environ et comprend deux périodes :
                    <ol>
                        <li>Période d'influence italienne jusqu'en <b>1530</b> , règne de <b>François Ier</b>.</li>
                        <li>Période française à partir de <b>1510</b> jusqu'en <b>1590</b> environ, période dit <b>Henri II</b></li>
                    </ol>
                    <br />
                    C'est par le soutien du Roi Charles VIII que les arts français fleurissent, c'est en allant en Italie que celui ci ramène des artistes : menuisiers, sculpteurs, marqueteurs.
                    </p>
                </div>

                <div className="generaux">
                    <h2> Quatre écoles </h2>
                    <Limiter/>
                    <p>
                        <u>Au début du <b>XVIe</b> siècle, les huchiers prennent le nom de « menuisiers »</u>, terme commun à tous les artisans exécutant de menus ouvrages.
                        Différentes écoles en France se forment et donnent des œuvres diverses.
                    </p>
                    <br />
                    <ul>
                        <li>
                            <b>L'école d'Île-de-France et de Touraine</b>
                            <br />
                            Elle subit l'influence des artistes de Fontainebleau, elle présente des meubles aux
                            décors sobres et maintenus dans des encadrements nets et précis. Sculpture en faible
                            relief.
                            </li>
                        <li>
                            <b>L'école de Bourgogne</b>
                            <br />
                            Surchargée dans l'ornementation, accentuation du relief. Le meuble est entièrement
                            sculpté de monstres, de chimères, de consoles.
                        </li>
                        <li>
                            <b>L'école Lyonnaise</b>
                            <br />
                            Les lignes sont sobres, le décor est souvent constitué d'arabesques. Comme dans les
                            meubles d'Île-de-France, les ornements sont plus aérés que ceux de l'école de
                            bourgogne.
                        </li>
                        <li>
                            <b>L'école Provençale</b>
                            <br />
                            Elle a une richesse ornementale qui l'apparente à celle de bourgogne. Spécialisée dans
                            l'exécution des armoires, elle a pratiqué des incrustations à l'italienne de bois de
                            couleurs, de nacre...
                        </li>
                    </ul>
                </div>

                <div id="architecture" className="partie-cours">
                    <h2>Architecture</h2>
                    <Limiter/>
                    <div className="titus-thermes">
                        <img src={chambord} alt="Photo du chateau de chambord" className="image-centre" />
                        <div className="img-subtitle center-text">CHÂTEAU DE CHAMBORD</div>
                    </div>
                        <p>
                            Les sombres châteaux du Moyen Âge, vont s'agrémenter de longues baies par
                            lesquelles la <b>lumière</b> inonde à flot les grandes salles.
                        </p>
                        <br />
                        <p>
                            Lors des campagnes d'Italie de <span className="tooltip"  onMouseOver={() => {
                                setFocus(<><FocusImg src={charles8} alt="Buste en bronze du Roi de France Charles VIII" /> <h3>Charles VIII</h3> <h4>Roi de France de 1483 à 1498</h4>Charles VIII, dit « l'Affable », né le 30 juin 1470 au château d'Amboise, où il est mort le 7 avril 1498, est roi de France de 1483 à 1498. Fils de Louis XI, il est le septième et dernier roi de la succession directe de la maison capétienne de Valois, qui règne sur la France depuis 1328.  </>)
                            }}>Charles VIII</span>, <span className="tooltip" onMouseOver={() => {
                                setFocus(<><FocusImg src={louis12} alt="Portrait peint du Roi de France Louis XII"/><h3>Louis XII</h3><h4>Roi de France de 1498 à 1515</h4>Louis XII, né le 27 juin 1462 au château de Blois et mort le 1ᵉʳ janvier 1515 à Paris, surnommé le « Père du peuple » par les états généraux de 1506, est roi de France de 1498 à 1515. Durant son règne, il se lance dans les guerres d'Italie, notamment la troisième et la quatrième et, sur le plan intérieur, conduit la réforme de la justice et des impôts.</>)
                            }}>Louis XII</span> et <span className="tooltip" onMouseOver={() => {
                                setFocus(<><FocusImg src={francois1} alt="Portrait peint du Roi de France François 1er" /><h3>François Ier</h3><h4>Roi de France de 1515 à 1547</h4>François Iᵉʳ, né sous le nom de François d'Angoulême le 12 septembre 1494 à Cognac et mort le 31 mars 1547 à Rambouillet, est un roi de France ayant régné du 25 janvier 1515, jour de son sacre, à sa mort en 1547. Fils de Charles d'Orléans et de Louise de Savoie, il appartient à la branche de Valois-Angoulême de la dynastie capétienne. </>)
                            }}>François Ier</span>, les souverains
                            découvrent le raffinement et le luxe des demeures italiennes. Au début du <b>XVIe
                            siècle</b>,
                            les conditions sociales seront particulièrement favorables aux  <u>développements des
                            industries d'art</u>.
                        </p>
                        <br />
                        <p>
                            Pour le moment les guerres sont terminées, la prospérité du pays augmente tous les
                            jours. Le goût et le luxe se développent rapidement grâce à ces expéditions en Italie
                            qui donnent envie aux Français.
                        </p>
                </div>

                <div id="decorations" className="partie-cours">
                    <h2>Éléments de décoration</h2>
                    <Limiter/>
                    <p>
                        L'ornementation du style <b>François Ier</b> recours a une série d'éléments tels que la
                        <b>coquille</b> qui se place dans la partie supérieure des niches ou des arcatures, la <b>corne
                        d'abondance</b>, la <b>banderole</b>, le <b>cartouche</b> (dont les contours se découpent et
                        s'enroulent), la <b>cordelière</b>, les <b>couronnes de laurier</b> entourant un écusson ou une
                        médaille et les draperies ; les <b>médaillons bombés ou « Miroir »</b>.
                    </p>
                    <br />
                    <p>
                        Sous l'époque <b>Henri II</b>, un élément typique est la <b>« Plume »</b>. Ornement qui est aussi
                        bien une feuille d'acanthe prolongée et simplifiée que la reproduction d'une plume
                        d'oiseau. Il faut signaler le <b>mufle de lions</b>, la <b>tête de bélier</b>, le <b>masque de femme
                        disposé sur une draperie</b>, la <b>tête de chérubin ailé</b>, les <b>entrelacs</b> jouissent d'une grande
                        vogue ; ils forment des encadrements de panneaux et se combinent avec les <span className="tooltip" onMouseOver={() => {
                                setFocus(<><FocusImg src={fleuron} alt="Fleuron sur vitrail" /><h3>Fleuron</h3><h4>Typographie</h4>Les fleurons sont des formes stylisées de fleurs ou de feuilles ; le terme dérive de l'ancien français : floron.</>)
                            }}>fleurons</span>
                        et les arabesques.
                    </p>
                    <br />
                    <p>
                        Les rosaces et les palmettes sont également très employées.
                        On peut ajouter un détail sur les ferrures et serrureries, aucun élément en fer
                        n'apparais sur la façade d'un meuble Renaissance.
                    </p>
                    <img src={armoirette} alt="Façade Armoirette renaissance" className="small-img"/>
                    <div className="img-subtitle center-text">Façade d'armoirette à suspendre d'époque Renaissance</div>
                </div>

                <div id="mobilier" className="partie-cours">
                    <h2>Mobilier</h2>
                    <Limiter/>
                    <h3>Principe de construction</h3>
                    <br />
                    <p>
                        Dans la fabrication du mobilier, on crée (ou plutôt on redécouvre car déjà utilisé den Egypte Antique) un nouvel assemblage : « <b>la coupe d'onglet</b> »
                        à 45°. Les progrès techniques vont dans le sens du raffinement.
                        Pour la mouluration, elle est dite « <b>à petit cadre</b> » si <i>elle ne dépasse pas le nu du bâti</i>.
                        Elle est dite « <b>à grand cadre</b> » si <i>elle est saillante du bâti</i>. Les moulures sont alors
                        assemblées par <b>embrèvements</b>.
                    </p>
                    <p>
                        On voit apparaître « <span className="tooltip" onMouseOver={() => {
                        setFocus(<><FocusImg src={intarsia} alt="Intarsia image" /> <h3>Intarsia</h3>L'intarsia est un art consistant à incruster des pièces de bois sur un support de même matériau afin de créer des images par la juxtaposition des teintes de bois. Le mot intarsia vient du mot latin interserere qui signifie insérer. Cette technique apparaît en Europe au XVᵉ siècle pour la décoration des édifices religieux où le marbre était également utilisé</>)
                        }}>l'intarsia</span> », technique d'incrustation. La <b>marqueterie</b> et la <b>dorure</b> apparaissent.
                    </p>
                    <br />
                    <p>
                        Parmi les matériaux employés, le chêne est toujours très utilisé jusqu'à la fin du règne
                        de François Ier, ensuite, c’est le noyer qui domine, permettant un poli et une
                        sculpture de tout premier ordre.
                    </p>
                    <br />
                    <p>
                        Nous pouvons dire aussi que la fabrication, au début de la Renaissance, reste la même
                        qu'au siècle précédent, seul le décor change, exactement comme en architecture.
                    </p>
                    <br />
                    <p>
                        L'assemblage à <b>queues d'aronde</b> (ou d'hironde) est également perfectionné pendant la
                        Renaissance. Pour les travaux soignés, on exécute des <b>queues d'aronde borgnes</b> que
                        l'on nomme « cachées ou perdues ».
                    </p>
                    <br />
                    <p>
                        Pendant l'évolution de la Renaissance, on importe de Flandres des meubles plaqués
                        d'ébène. Cette technique atteindra la perfection avec le style suivant. Le meuble
                        français préfère la belle franchise du bois massif, aussi le meuble Renaissance de notre
                        pays est avant tout un meuble sculpté.
                    </p>
                    <br />
                    <h3>Les Meubles</h3>
                    <br />
                    <p>
                        Pour répondre à tous les usages, ils vont se
                        multiplier et des silhouettes nouvelles vont surgir. La
                        variété est une qualité du mobilier de Renaissance.
                        Contrairement aux meubles du Moyen Âge, rigides
                        et droits, <i>le meuble Renaissance sera formé de
                        ressauts successifs occasionnés par le retrait des
                        coffres et par les différents plans et saillies</i>.
                    </p>
                    <ol>
                        <li>
                            <span className="tooltip" onMouseOver={() => {
                                setFocus(<><FocusImg src={coffre} alt="coffre renaissance Française" /> <h3>Coffre</h3> Meuble qui reste essentiel, il est souvent constitué en façade d'un seul panneau, ce qui laisse au sculpteur une grande liberté de composition. Généralement ils sont surélevés par un socle important dont les pieds représentent des pattes de lion. </>)
                            }}>Le Coffre</span>
                        </li>
                        <li>
                            <span className="tooltip" onMouseOver={() => {
                                setFocus(<><FocusImg src={armoire} alt="Armoire renaissance Française" /> <h3>Armoire</h3> L'armoire Renaissance est composée essentiellement de deux corps. Quatre portes ou guichet et un fronton brisé. Le corps supérieur étant moins large et en retrait par rapport au corps du bas.</>)
                            }}>L'armoire</span>
                        </li>
                        <li>
                            <span className="tooltip" onMouseOver={() => {
                                setFocus(<><FocusImg src={dressoir} alt="Dressoir renaissance Française" /> <h3>Dressoir</h3> Il se compose d'un corps supérieur à deux ou trois portes et d'un étage inférieur sans
                                porte et façade latérale. Il est destiné à présenter la vaisselle de prix.</>)
                            }}>Le buffet ou dressoir</span>
                        </li>
                        <li>
                            <span className="tooltip" onMouseOver={() => {
                                setFocus(<><FocusImg src={lit} alt="Lit renaissance Française" /> <h3>Lit</h3> Toujours de dimension très vaste, surmonté d'un baldaquin, maintenu par des colonnes appelées « Quenouilles », il est richement décoré.</>)
                            }}>Le lit</span>
                        </li>
                        <li>
                            <span className="tooltip" onMouseOver={() => {
                                setFocus(<><FocusImg src={cabinet} alt="Cabinet renaissance Française" /> <h3>Cabinet</h3> Un nouveau meuble, mais qui n'est pas français. Importé d'Italie, d'Espagne et des Flandres. En réalité, c'est une petite armoire (coffre rehaussé sur des pieds et dans l'intérieur duquel on refermait les bijoux et objets précieux).</>)
                            }}>Le Cabinet</span>
                        </li>
                    </ol>
                </div>
                
            </div> 
        </div>
    )
}

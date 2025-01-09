import { Rinceau } from "../../../assets/svg/rinceau.";
import { Focus } from "../../focus";
import { useState } from "react";
import henri4 from "../../../assets/images/histoire_art/henri-4.jpg"
import louis13 from "../../../assets/images/histoire_art/louis_13.jpg"
import chateau13 from "../../../assets/images/histoire_art/chateau-13.jpg"
import toitMansard from "../../../assets/images/histoire_art/toit-mansard.jpg"
import françoisMansart from "../../../assets/images/histoire_art/francois-mansart.jpg"
import pointeGateau from "../../../assets/images/histoire_art/pointe-gateau.jpg"
import cartoucheAveugle from "../../../assets/images/histoire_art/cartouche-aveugle.jpg"
import tournage from "../../../assets/images/histoire_art/tournage.png"
import litLouis13 from "../../../assets/images/histoire_art/lit-louis13.JPG"



const Limiter = () => {
    return (
        <div className="limiter">
            <Rinceau/>
        </div>
    );
};

export const StyleLouisXIII = () => {
    const [focusState, setFocus] = useState(<></>);
    const [zoomState, setZoom] = useState(false);
    const [zoomSrc, setSrc] = useState("");

    const FocusImg = ({src, alt}) => {
        return (
            <img className="tooltip-img" src={src} alt={alt} onMouseDown={() => {setSrc(src); setZoom(true);}} />
        );
    };

    return (
        <div className="histoire-art-cours">
            {zoomState ? <div className="big-img">
                <div className="close" onMouseDown={() => {setZoom(false)}}>X</div>
                <img src={zoomSrc} alt="zoomState"/>
            </div> : <></>}

            <h1 className="histoire-art-cours-title">Le <i>Style Louis XIII</i> de 1589 à 1650</h1>
            <Focus Content={""} />
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="historique">
                    <h2>Historique</h2>
                    <Limiter/>
                    <p>
                        Le style Louis XIII s'étend environ de 1610 à 1643, recouvrant les règnes d’ <span className="tooltip" onMouseOver={() => {
                            setFocus(
                                <><FocusImg src={henri4} alt="Portrait peint du roi de France Henri 4"/><h3>Henri IV</h3><h4>Roi de France et de Navarre</h4>Henri IV, dit « le Grand » ou « Le Vert Galant », ou encore « Le Bon Roi Henri », né sous le nom d'Henri de Bourbon le 13 décembre 1553 à Pau et mort assassiné le 14 mai 1610 à Paris, est roi de Navarre à partir du 9 juin 1572 sous le nom d'Henri III, et roi de France sous le nom d'Henri IV du 2 août 1589 jusqu'à sa mort en 1610.</>
                            )
                        }} >Henri IV</span> et <span className="tooltip" onMouseOver={() => {setFocus(
                            <><FocusImg src={louis13} alt="Portrait peint de Louis XIII" /><h3>Louis XIII</h3><h4>Roi de France et de Navarre de 1610 à 1643</h4>Louis XIII, dit « le Juste », fils d'Henri IV et de Marie de Médicis, né le 27 septembre 1601 au château de Fontainebleau et mort le 14 mai 1643 au château Neuf de Saint-Germain-en-Laye, est roi de France et de Navarre de 1610 à 1643</>
                        )}} >Louis XIII</span>. Après les guerres de religion, la France, sous Henri IV, connaît une prospérité propice à l’épanouissement artistique. Ce style incorpore des influences variées : baroque italien et flamand, et école de Fontainebleau.
                    </p>
                </div>

                <div id="architecture" className="partie-cours">
                    <h2>Architecture</h2>
                    <Limiter/>
                    <div className="titus-thermes">
                        <img className="image-centre" src={chateau13} alt="France Eure Chateau de Beaumesnil" /> 
                        <p className="img-subtitle center-text"><u>CHÂTEAU BEAUMESNIL DANS L'EURE</u> <i>Style Louis XIII</i></p>
                    </div>
                    <p>
                        Le style se caractérise par des constructions en briques avec chaînages en pierre et de hautes toitures souvent ornées de pots à feu. L’influence gréco-romaine est notable, avec un usage libre des ordres classiques. Vers la fin de l’époque, les combles brisés apparaissent, dits <span className="tooltip" onMouseOver={() => {
                            setFocus(<><FocusImg src={toitMansard} alt="Toit à la mansart parisien"/><h3>Toit à la Mansart</h3><h4>De l'architecte François Mansart</h4><p>François Mansart, né le 23 janvier 1598 à Paris et mort le 23 septembre 1666 dans la même ville, paroisse Saint-Paul, est un architecte français. Il est considéré comme le principal précurseur de l'architecture classique en France</p></>)
                        }}>"toits à la Mansart"</span>.
                    </p>
                    <img src={françoisMansart} alt="François Mansart Portrait" className="small-img"/>
                    <p className="img-subtitle center-text">François Mansart</p>

                </div>

                <div id="interieur" className="partie-cours">
                    <h2>Architecture d'intérieur</h2>
                    <Limiter/>
                    <p>
                        Les habitations incluent souvent des pièces en enfilade. Les murs sont décorés de tapisseries flamandes, cuir doré ou gaufré, ou de lambris, selon des styles français (panneaux peints de 2m de hauteur) ou italiens (larges panneaux toute hauteur).
                    </p>
                </div>

                <div id="decorations" className="partie-cours">
                    <h2>Éléments de décoration</h2>
                    <Limiter/>
                    <ul>
                        <li><span className="tooltip" onMouseOver={() => {
                            setFocus(<><FocusImg src={cartoucheAveugle} alt="Photo d'un cartouche Aveugle style Louis XIII" /><h3>Cartouche Aveugle</h3>Ils font partie des ornements à caractère nerveux. La plupart sont en principe plus gros et plus lourd qu'au style précédent. Ils sont en général aveugles, c’est-à-dire , qu'ils ne renferment aucunes armoiries, ni aucune inscription.</>)
                        }}>Cartouches aveugles</span>, souvent plus imposants que ceux des styles précédents.</li>
                        <li>Panneaux en pointe de diamant, parfois "en tas de sable" ou "en pointe de gâteau" selon leur forme.</li>
                        <li>Motifs tels que chimères, chérubins ailés, rinceaux de feuilles d’acanthe, guirlandes, et pattes d’aiglon.</li>
                    </ul>
                    <img src={pointeGateau} alt="Armoire en Pointe de Gateau et tas de Sable" className="small-img" />
                    <p className="img-subtitle center-text">Panneaux en tas de sable et pointe de gateau</p>
                    <div className="titus-thermes">
                        <img className="image-centre" src={tournage} alt="exemples de pieds tournés Louis XIII" /> 
                    </div>
                </div>

                <div id="mobilier" className="partie-cours">
                    <h2>Mobilier</h2>
                    <Limiter/>
                    <p>
                        Les meubles de style Louis XIII utilisent divers matériaux, notamment l’ébène et le poirier noirci. Les formes géométriques dominent, influencées par l’architecture. Parmi les pièces emblématiques :
                    </p>
                    <ul>
                        <li><b>Armoires :</b> Passent de quatre portes carrées à deux corps, séparés par des tiroirs.</li>
                        <li><b>Buffets :</b> Sculptés ou peints, parfois transformés en vaisseliers.</li>
                        <li><b>Tables :</b> Pieds tournés, entrejambes en H, recouvertes de nappes.</li>
                        <li><b>Sièges :</b> Tabourets, chaires à bras, et fauteuils au dossier haut, souvent sculptés.</li>
                    </ul>
                    <br />
                    <p>
                        La forme générale des meubles est souvent compacte. Plus sévères que rigoureuses, ces
                        lignes sont géométriques et inspirées de l'architecture.
                        Des traditions issues de la Renaissance, on a conservé le goût des meubles massifs,
                        abondamment sculpté. Des éléments de la faune et de la flore servent encore de
                        motifs de décoration.
                        Si les architectes ont souvent lutté contre les influences étrangères, il n'en est pas de
                        même pour le mobilier. Le meuble Louis XIII n'a presque rien de Français.
                    </p>
                    <img src={litLouis13} alt="Lit dans le style Louis XIII" className="small-img" />
                    <p className="img-subtitle center-text">Lit Louis XIII</p>
                </div>

            </div>
        </div>
    );
};
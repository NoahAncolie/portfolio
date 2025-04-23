import { Rinceau } from "../../../assets/svg/rinceau.";
import { Focus } from "../../focus";
import { useState } from "react";
import napoleon from "../../../assets/images/histoire_art/napoleon.jpg"
import colonneVendome from "../../../assets/images/histoire_art/colonne_vendome.jpg"

const Limiter = () => (
    <div className="limiter">
        <Rinceau/>
    </div>
);

export const StyleEmpire = () => {
    const [focusState, setFocus] = useState(<></>);
    const [zoomState, setZoom] = useState(false);
    const [zoomSrc, setSrc] = useState("");

    const FocusImg = ({src, alt}) => (
        <img className="tooltip-img" src={src} alt={alt} onMouseDown={() => { setSrc(src); setZoom(true); }} />
    );

    return (
        <div className="histoire-art-cours">
            {zoomState && <div className="big-img">
                <div className="close" onMouseDown={() => setZoom(false)}>X</div>
                <img src={zoomSrc} />
            </div>}

            <h1 className="histoire-art-cours-title">Le <i>Style Empire</i> de 1804 à 1815</h1>
            <Focus Content={""} />
            <div className="cours-content">
                <Focus content={focusState}/>

                <div id="historique" className="partie-cours">
                    <h2>Historique</h2>
                    <Limiter/>
                    <p>
                        Le style Empire est de courte durée. <u>Il recouvre exactement la période du règne de Napoléon 1er</u> ; soit de 1804, année au cours de laquelle il est sacré empereur des Français, jusqu’en 1815, le 2 décembre, jour où <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={napoleon} alt="Napoleon en Empreur Romain" /><h3>Napoléon Ier</h3><h4>Général, Premier consul puis empereur des Français</h4><p>Napoléon Bonaparte, né le 15 août 1769 à Ajaccio en Corse et mort le 5 mai 1821 à Longwood sur l'île de Sainte-Hélène, est un militaire et homme d'État français. Il est le premier empereur des Français du 18 mai 1804 au 6 avril 1814 et du 20 mars au 22 juin 1815, sous le nom de Napoléon Iᵉʳ. Second enfant de Charles Bonaparte et Letizia Ramolino, Napoléon Bonaparte devient en 1793 général dans les armées de la Première République française, née de la Révolution, où il est notamment commandant en chef de l'armée d'Italie puis de l'armée d'Orient.</p></>)}}>Napoléon</span> abdiquera.
                    </p>
                    <br />
                    <p>
                        <b>Les principaux caractères</b> de ce style sont :
                    </p>
                    <br />
                    <ul>
                        <li>Une copie stricte de l’art antique</li>
                        <li>L’<b>uniformité</b> voulue par Napoléon crée une homogénéité qui limite la création</li>
                        <li>Une tendance à des <b>structures monumentales</b></li>
                        <li>Une <b>symétrie</b> parfaite</li>
                    </ul>
                </div>

                <div id="architecture" className="partie-cours">
                    <h2>Architecture</h2>
                    <Limiter/>
                    <p>
                        Durant les premières années de l’Empire, <u>des travaux d’urbanisme sont exécutés dans la capitale française</u>.
                    </p>
                    <br />
                    <p>
                        Pour acheminer l’eau dans Paris, Napoléon ordonne la construction des canaux de l’Ourcq, de Saint-Martin et de Saint-Denis. <u>Il fait aussi bâtir des dizaines de fontaines</u> disséminées un peu partout dans la capitale <b>pour améliorer la vie des Parisiens</b>.
                        <b>Trois grands cimetières de Paris</b> (Montmartre, Père-Lachaise et Montparnasse) sont construits et les vieilles prisons de la Bastille et de Châtelet sont détruites.
                    </p>
                    <br />
                    <p>
                        Napoléon souhaite édifier à sa gloire de colossales et majestueuses constructions, dont l’arc de triomphe du Carrousel, l’arc de triomphe de l’Étoile, et la <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={colonneVendome} alt="Colonne Vendôme en dessin" /><h3>Colonne Vendôme</h3><h4>Monument parisien situé au centre de la place du même nom érigé sur ordre de Napoléon Ier</h4><p>La colonne Vendôme est un monument parisien situé au centre de la place du même nom dans le 1ᵉʳ arrondissement de Paris. Elle est érigée sur ordre de Napoléon Iᵉʳ de 1806 à 1810 pour commémorer la bataille d'Austerlitz, puis détruite lors de la Commune de Paris en 1871, avant d'être reconstruite sous sa forme actuelle. Au fil des années, elle reçoit les noms de colonne d'Austerlitz, puis colonne de la Victoire avant de devenir colonne de la Grande Armée.</p></>)}}>colonne Vendôme</span>.
                    </p>
                </div>

                <div id="interieur" className="partie-cours">
                    <h2>Décoration intérieure</h2>
                    <Limiter/>
                </div>

                <div id="mobilier" className="partie-cours">
                    <h2>Mobilier</h2>
                    <Limiter/>
                </div>

                <div id="sieges" className="partie-cours">
                    <h2>Sièges</h2>
                    <Limiter/>
                </div>

                <div id="tissus" className="partie-cours">
                    <h2>Tissus</h2>
                    <Limiter/>
                </div>

                <div id="decorations" className="partie-cours">
                    <h2>Éléments décoratifs</h2>
                    <Limiter/>
                </div>

                <div id="artistes" className="partie-cours">
                    <h2>Artistes</h2>
                    <Limiter/>
                </div>
            </div>
        </div>
    );
};

import { Rinceau } from "../../../assets/svg/rinceau.";
import { Focus } from "../../focus";
import { useState } from "react";
import napoleon from "../../../assets/images/histoire_art/napoleon.jpg"
import colonneVendome from "../../../assets/images/histoire_art/colonne_vendome.jpg"
import arcCaroussel from "../../../assets/images/histoire_art/arc-caroussel.jpg"
import arcTriomphe from "../../../assets/images/histoire_art/arc-triomphe.jpeg"
import chalgrin from "../../../assets/images/histoire_art/chalgrin.jpg"
import percier from "../../../assets/images/histoire_art/percier.jpg"
import fontaine from "../../../assets/images/histoire_art/fontaine.jpg"
import passageCouvert from "../../../assets/images/histoire_art/passage-couvert.jpg"

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
                        Le style Empire est de courte durée. <u>Il recouvre exactement la période du règne de Napoléon 1er</u> ; soit de 1804, année au cours de laquelle il est sacré empereur des Français, jusqu’en 1815, le 2 décembre, jour où <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={napoleon} alt="Napoleon en Empreur Romain" /><h2>Napoléon Ier</h2><h3>Général, Premier consul puis empereur des Français</h3><p>Napoléon Bonaparte, né le 15 août 1769 à Ajaccio en Corse et mort le 5 mai 1821 à Longwood sur l'île de Sainte-Hélène, est un militaire et homme d'État français. Il est le premier empereur des Français du 18 mai 1804 au 6 avril 1814 et du 20 mars au 22 juin 1815, sous le nom de Napoléon Iᵉʳ. Second enfant de Charles Bonaparte et Letizia Ramolino, Napoléon Bonaparte devient en 1793 général dans les armées de la Première République française, née de la Révolution, où il est notamment commandant en chef de l'armée d'Italie puis de l'armée d'Orient.</p></>)}}>Napoléon</span> abdiquera.
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
                    </p>
                    <br />
                    <p> 
                        <b>Trois grands cimetières de Paris</b> (Montmartre, Père-Lachaise et Montparnasse) sont construits et les vieilles prisons de la Bastille et de Châtelet sont détruites.
                    </p>
                    <br />
                    <p>
                        Napoléon souhaite édifier à sa gloire de colossales et majestueuses constructions, dont l’<span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={arcCaroussel} alt="Arc de triomphe du Caroussel" /><h2>Arc de triomphe du Carrousel</h2><h3>Monument de Paris, France</h3><p>L'arc de triomphe du Carrousel est un monument parisien inauguré le 15 août 1808 et situé place du Carrousel, dans le 1ᵉʳ arrondissement de Paris, à l'ouest du musée du Louvre. Cet arc de triomphe est classé au titre des monuments historiques depuis le 10 septembre 1888. Le site est desservi par la station de métro Palais Royal - Musée du Louvre.</p></>)}}>arc de triomphe du Carrousel</span>, 
                        &nbsp; <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={arcTriomphe} alt="Arc de triombhe de l'étoile" /><h2>Arc de triomphe de l'Étoile</h2><h3>Arc de triomphe à la jonction des 8e, 16e et 17e arrondissements de Paris</h3><p>L'arc de triomphe de l'Étoile, souvent appelé simplement l'Arc de Triomphe, est un monument de type tétrapyle situé à Paris, en un point haut à la jonction des territoires des 8ᵉ, 16ᵉ et 17ᵉ arrondissements, notamment au sommet de l'avenue des Champs-Élysées et de l'avenue de la Grande-Armée, lesquelles constituent un grand axe est-ouest parisien partant de la pyramide du Louvre, passant par l'obélisque de La Concorde, l'Arc de Triomphe lui-même et se terminant au loin par l'arche de la Défense. Sa construction, décidée par l'empereur Napoléon Iᵉʳ, débute en 1806 et s'achève en 1836 sous le règne de Louis-Philippe.</p></>)}}>l’arc de triomphe de l’Étoile</span>, et la 
                        &nbsp;<span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={colonneVendome} alt="Colonne Vendôme en dessin" /><h2>Colonne Vendôme</h2><h3>Monument parisien situé au centre de la place du même nom érigé sur ordre de Napoléon Ier</h3><p>La colonne Vendôme est un monument parisien situé au centre de la place du même nom dans le 1ᵉʳ arrondissement de Paris. Elle est érigée sur ordre de Napoléon Iᵉʳ de 1806 à 1810 pour commémorer la bataille d'Austerlitz, puis détruite lors de la Commune de Paris en 1871, avant d'être reconstruite sous sa forme actuelle. Au fil des années, elle reçoit les noms de colonne d'Austerlitz, puis colonne de la Victoire avant de devenir colonne de la Grande Armée.</p></>)}}>colonne Vendôme</span>.
                    </p>
                    <br />
                    <p>
                        L’arc de triomphe de l’Étoile a été conçu par l’architecte <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={chalgrin} alt="Jean-Francois Chalgrin" /><h2>Jean-François Chalgrin</h2><h3>Architecte français</h3><p>Jean-François Chalgrin est un architecte français né à Paris en 1739 et mort dans la même ville le 21 janvier 1811. Architecte emblématique du style Louis XVI caractérisé par sa monumentalité austère, il représente la phase dite « grecque » ou « dorique » du néoclassicisme. Chalgrin se distingue par l'ampleur de ses conceptions plus que par la précision des détails.</p></>)}}>Chalgrin</span>. Si ce projet débuta sous le style Empire, c’est sous le règne de Louis-Philippe qu’il sera achevé. Deux maîtres incontestés règnent sur les arts : 
                        <ul>
                            <li><span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={percier} alt="Peinture de Charles Percier" /><h2>Charles Percier</h2><h3>Architecte, décorateur et dessinateur français</h3><p>Charles Percier, né le 22 août 1764 à Paris où il est mort le 5 septembre 1838, est un architecte néoclassique et décorateur français. Connu pour avoir travaillé en association avec son camarade d'études Pierre Fontaine à partir de 1792, d'abord comme architectes chargés des décors de l'Opéra, au point que l'on a longtemps considéré comme inutile, voire impossible, d'essayer de distinguer le travail de l'un et de l'autre.</p></>)}}>Charles Percier</span></li>
                            <li><span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={fontaine} alt="Portrait de Pierre Fontaine" /><h2>Pierre Fontaine</h2><h3>Architecte, ingénieur, peintre, dessinateur et décorateur français</h3><p>Pierre Fontaine, né le 20 septembre 1762 à Pontoise et mort le 10 octobre 1853 à Paris, est un architecte néoclassique et décorateur français. Avec son camarade d'études Charles Percier, Fontaine est l'un des inventeurs et principaux représentants du style Empire.</p></>)}}>Pierre Fontaine</span></li>
                        </ul>
                    </p>
                    <br />
                    <p>
                        Les architectes <u>utiliseront tout le vocabulaire décoratif de l’Antiquité gréco-romaine et de la Renaissance italienne</u> pour les constructions.
                    </p>
                    <br />
                    <p>
                        Les façades des monuments Empire sont dépourvues de balcons, mais <b>ornées de niches contenant des statues ou des bustes</b> (façade du Louvre).
                        <br />
                        Les fenêtres en plein cintre sont très à la mode. Les <span className="tooltip" onMouseOver={() => {setFocus(<><FocusImg src={passageCouvert} alt="Passage couvert à Paris" /><h2>Passages couverts de Paris</h2><p>Les passages couverts de Paris, en France, sont un ensemble de voies piétonnières percées entre la fin du XVIIIᵉ siècle et les premières années du Second Empire à travers des îlots urbains et des immeubles, recouvertes d'une structure protectrice vitrée et généralement destinées à abriter des alignements de boutiques. Ces voies préfigurent les Grands magasins et les galeries commerciales contemporaines. </p></>)}}>passages couverts vitrés</span> sont très utilisés (apparition des structures métalliques).
                    </p>
                    <br />
                    <br />
                    <p>
                        Pour célébrer la gloire des armées françaises, Napoléon veut un temple dédié à l’Empire. Le projet initial prévoit notamment de réaliser des tables de marbre avec les noms de héros militaires ayant participé aux batailles d’Ulm, d’Austerlitz et de Iéna.
                    </p>
                    <br />
                    <p>
                        Comme l’empereur s’applique à retrouver la grandeur antique, il souhaite un monument entouré de colonnes corinthiennes.
                        Les colonnes surélèvent un large fronton.
                    </p>
                    <br />
                    <p>
                        Ce temple achevé après le règne de Napoléon deviendra l’église de la Madeleine.
                    </p>
                </div>

                <div id="interieur" className="partie-cours">
                    <h2>Décoration intérieure</h2>
                    <Limiter/>
                    <p>
                        L’ensemble de la décoration est <u>dans la lignée de l’esprit militarisme de Napoléon 1er</u>. 
                        <br />
                        <br />
                        On retrouve assez souvent une décoration inspirée des tentes militaires, où la toile coutil rayé peut être utilisée. Les murs sont divisés en panneaux et garnis de tissu ou de
peinture. L’ensemble des frises et des Détail de l’entrée du château de Malmaison, corniches est composé d’un même motif, utilisation de la toile coutil avec une espacé régulièrement.
                    </p>
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

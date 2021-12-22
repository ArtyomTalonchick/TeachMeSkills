import { NavLink } from "react-router-dom";
import { withTtranslator } from "../../hoc/withTranslator";
import "./Menu.scss";

const links = [
    {
        textId: "menu.links.clicker",
        url: "/clicker",
    },
    {
        textId: "menu.links.home",
        url: "/",
    },
    {
        textId: "menu.links.users",
        url: "/users",
    },
];

function Menu({ translate }) {

    return (
        <div className="menu">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.url} className="menu-link" activeclassname="active">{translate(link.textId)}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )    
}

export default withTtranslator(Menu);
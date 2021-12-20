import { Link } from "react-router-dom";
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
                        <Link to={link.url}>{translate(link.textId)}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )    
}

export default withTtranslator(Menu);
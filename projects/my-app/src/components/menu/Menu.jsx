
import "./Menu.scss";

const links = [
    {
        text: "Сообщения",
        url: "/",
    },
    {
        text: "Друзья",
        url: "/",
    },
    {
        text: "Новости",
        url: "/",
    },
    {
        text: "Сообщества",
        url: "/",
    },
    {
        text: "Видео",
        url: "/",
    },
    {
        text: "Фото",
        url: "/",
    },
    {
        text: "Игры",
        url: "/",
    },
];

function Menu() {
    return (
        <div className="menu">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    )    
}

export default Menu;
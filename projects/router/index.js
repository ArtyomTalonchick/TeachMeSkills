const rootElem = document.getElementById("root");

const loadPage = (pageName) => () => {
    const xhr = new XMLHttpRequest();
    
    xhr.onload = () => {
        if (xhr.status === 200) {
            rootElem.innerHTML = xhr.response;
        } else {
            alert(`Ошибка соединения`);
        }
    };
    
    xhr.open("GET", `./pages/${pageName}.html`, true);
    xhr.send();
}


document.getElementById("home-btn").addEventListener("click", loadPage("home"));
document.getElementById("about-btn").addEventListener("click", loadPage("about"));



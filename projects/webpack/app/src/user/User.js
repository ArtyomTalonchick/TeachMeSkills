import "./User.scss";

class User {
    constructor (name) {
        this.name = name;
    }

    // sayHello function
    sayHello = () => {
        console.log(this.name);
    }
}

export { User };
import React from "react";

import "./UserCard.scss";

function UserCard({ user, color }) {   
    const { name, age, email } = user;

    return (
        <div className="user-card" style={{ "background": color }}>
            <p className="name">
                Name: {name}
            </p>
            <p className="age">
                Age: {age}
            </p>
            <p className="email">
                Email: {email}
            </p>
        </div>
    );
}

// class UserCard2 extends React.Component {
//     constructor(props) {
//         super(props);

//         console.log();
//     }

//     render() {
//         console.log(this.props);
//         const {name, age, email} = this.props.user;
//         return (
//             <div className="user-card">
//                 <p>
//                     Name: {name}
//                 </p>
//                 <p>
//                     Age: {age}
//                 </p>
//                 <p>
//                     Email: {email}
//                 </p>
//             </div>
//         );
//     }
// }
  
export default UserCard;
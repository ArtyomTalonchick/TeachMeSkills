import React from "react";
import UserCard from "../userCard/UserCard";

import "./Users.scss"

const users = [
    {
      name: "Alex",
      age: 25,
      email: "alex__1997@gmail.com",
    },
    {
      name: "Tom",
      age: 26,
      email: "alex__1996@gmail.com",
    },
    {
      name: "Bob",
      age: 26,
      email: "alex__1996@gmail.com",
    },
    {
      name: "Nick",
      age: 26,
      email: "Nick@gmail.com",
    },
    {
      name: "Alex",
      age: 25,
      email: "alex__1997@gmail.com",
    },
    {
      name: "Tom",
      age: 26,
      email: "alex__1996@gmail.com",
    },
    {
      name: "Bob",
      age: 26,
      email: "alex__1996@gmail.com",
    },
    {
      name: "Nick",
      age: 26,
      email: "Nick@gmail.com",
    },
    {
      name: "Alex",
      age: 25,
      email: "alex__1997@gmail.com",
    },
    {
      name: "Tom",
      age: 26,
      email: "alex__1996@gmail.com",
    },
    {
      name: "Bob",
      age: 26,
      email: "alex__1996@gmail.com",
    },
    {
      name: "Nick",
      age: 26,
      email: "Nick@gmail.com",
    },
];

function Users() {
    return (
        <div className="users">
            {users.map((user, index) => 
                <React.Fragment key={index}>
                  <UserCard user={user}/>
                  <hr/>
                </React.Fragment>
            )}
        </div>
    )
}

export default Users;
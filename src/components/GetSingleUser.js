import axios from "axios";
import { useState, useEffect } from "react";
import RenderUser from "./RenderUser";

function GetSingleUser({ userID }) {
    let url = 'https://reqres.in/api/users/';
    const [response, setResponse] = useState(null);
    const userURL = url + userID;
    useEffect(() => {
        if (userID) {
            axios.get(userURL)
                .then(setResponse)
                .catch(error => console.error(error));
        }
    }, [userURL]);
    if (response) {
        let user = response.data.data;
        user.name = `${user.first_name} ${user.last_name}`;
        return (
            <RenderUser user={user} />
        );
    }
}

export default GetSingleUser;

import axios from "axios";
import { useEffect, useState } from "react";
import RenderUser from "./RenderUser";
import RenderButtons from "./RenderButtons";

const CreateUser = ({ user, setContent }) => {
    let url = 'https://reqres.in/api/users/';
    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios.post(url, user)
            .then(setResponse)
            .catch((error) => { console.log(error) });
    }, []);
    if (response) {
        console.log(response.data);
        return (
            <>
                <RenderUser user={response.data} />
                <RenderButtons setContent={setContent} />
                User successfully created.
            </>
        );
    }

}

export default CreateUser;

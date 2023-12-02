import axios from "axios";
import { useEffect, useState } from "react";
import RenderUser from "./RenderUser";
import RenderButtons from "./RenderButtons";
import RenderError from "./RenderError";

const CreateUser = ({ user, setContent }) => {
    let url = 'https://reqres.in/api/users/';
    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios.post(url, user)
            .then(setResponse)
            .catch((error) => {
                setContent(<RenderError
                    error={error}
                    status={error.response.status} />)
            });
    }, []);
    if (response) {
        console.log(response.data);
        return (
            <>
                <RenderUser user={response.data} />
                <RenderButtons setContent={setContent} />
                <p>User successfully created.</p>
            </>
        );
    }

}

export default CreateUser;

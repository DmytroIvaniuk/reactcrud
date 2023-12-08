import axios from "axios";
import { useEffect, useState, useContext } from "react";
import RenderUser from "./RenderUser";
import RenderError from "./RenderError";
import { ContextStore } from "../contexts/ContextStore";
import CreateUserButton from "./Buttons/CreateUserButton";

const CreateUser = ({ user }) => {
    const store = useContext(ContextStore);
    let url = store.url;
    const setContent = store.setContent;
    const setUser = store.setUser;
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
        setUser(response.data);
        console.log(response.data);
        return (
            <>
                <RenderUser user={response.data} />
                <CreateUserButton />
                <p>User successfully created.</p>
            </>
        );
    }

}

export default CreateUser;

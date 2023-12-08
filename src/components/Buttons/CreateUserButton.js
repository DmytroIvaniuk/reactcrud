import CreateForm from "../CreateForm";
import { ContextStore } from "../../contexts/ContextStore";
import { useContext } from "react";

const CreateUserButton = () => {
    const store = useContext(ContextStore);
    const setContent = store.setContent;

    const handleClick = () => {
        setContent(<CreateForm />);
    }

    return (
        <button
            onClick={handleClick}>Create new user</button>
    );
}

export default CreateUserButton;

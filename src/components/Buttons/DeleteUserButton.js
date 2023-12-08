import { useContext } from "react";
import DeleteUser from "../DeleteUser";
import { ContextStore } from "../../contexts/ContextStore";


const DeleteUserButton = () => {
    const store = useContext(ContextStore);
    const setContent = store.setContent;

    const handleClick = () => {
        setContent(<DeleteUser />);
    }

    return (
        <button
            onClick={handleClick}>Delete user</button>
    );
}

export default DeleteUserButton;

import UpdateCurrentUser from "../UpdateCurrentUser";
import { ContextStore } from "../../contexts/ContextStore";
import { useContext } from "react";

const UpdateCurrentUserButton = ({ user }) => {
    const store = useContext(ContextStore);
    const setContent = store.setContent;

    const handleClick = () => {
        setContent(<UpdateCurrentUser user={user} />);
    }

    return (
        <button
            onClick={handleClick}>Update user</button>
    );
}

export default UpdateCurrentUserButton

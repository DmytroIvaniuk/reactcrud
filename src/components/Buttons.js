import CreateForm from "./CreateForm";
import DeleteUser from "./DeleteUser";
import UpdateCurrentUser from "./UpdateCurrentUser";
import { ContextStore } from "../contexts/ContextStore";
import { useContext } from "react";

const RenderButtons = () => {
    const store = useContext(ContextStore);
    const setContent = store.setContent;
    const user = store.user;

    const handleClickCreate = () => {
        setContent(<CreateForm />);
    }

    const handleClickUpdate = () => {
        setContent(<UpdateCurrentUser user={user} userID={user.id} />);
    }

    const handleClickDelete = () => {
        setContent(<DeleteUser userID={user.id} />);
    }

    return (
        <div className="buttons">
            <button
                onClick={handleClickCreate}>Create user</button>
            <button
                onClick={handleClickUpdate}>Update user</button>
            <button
                onClick={handleClickDelete}>Delete user</button>
        </div>
    );
}

export default RenderButtons;

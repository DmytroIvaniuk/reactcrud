import CreateForm from "./CreateForm";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

const RenderButtons = ({ setContent }) => {
    let user = {//temp data
        name: "UPDUSERNAME",
        job: "UPDUSERJOB"
    }
    let userID = 3;//temp data

    const handleClickCreate = () => {
        setContent(<CreateForm setContent={setContent} />);
    }

    const handleClickUpdate = () => {
        setContent(<UpdateUser user={user} userID={userID} setContent={setContent} />);
    }

    const handleClickDelete = () => {
        setContent(<DeleteUser userID={userID} setContent={setContent} />);
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

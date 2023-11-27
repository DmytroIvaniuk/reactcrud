import CreateForm from "./CreateForm";

const RenderButtons = ({ setContent }) => {
    const handleClick = () => {
        setContent(<CreateForm setContent={setContent} />);
    }
    return (
        <div className="buttons">
            <button
                onClick={handleClick}>Create user</button>
            <button>Update user</button>
            <button>Delete user</button>
        </div>
    );
}

export default RenderButtons;

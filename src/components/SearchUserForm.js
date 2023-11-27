import { useRef } from "react";
import GetSingleUser from "./GetSingleUser";
import RenderButtons from "./RenderButtons";

const SearchUserForm = ({ setUserID, setContent }) => {
    const refUserID = useRef();

    const submit = (e) => {
        e.preventDefault();
        setUserID(refUserID.current.value);
        console.log(`current user ID is ${refUserID.current.value}`);
        setContent(<>
            <GetSingleUser userID={refUserID.current.value} />
            <RenderButtons setContent={setContent} />
        </>);
    };

    return (
        <form className="search-user" onSubmit={submit}>
            <label htmlFor="user-id">User ID: </label>
            <input
                ref={refUserID}
                type="text"
                id="user-id"
                name="user-id"
                placeholder="User ID"
                required />
            <button>Get user</button>
        </form>
    );
}

export default SearchUserForm;

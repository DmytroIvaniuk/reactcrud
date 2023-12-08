import { useRef, useContext } from "react";
import GetSingleUser from "./GetSingleUser";
import { ContextStore } from "../contexts/ContextStore";
import CreateUserButton from "./Buttons/CreateUserButton";

const SearchUserForm = ({ setUserID }) => {
    const refUserID = useRef();
    const store = useContext(ContextStore);
    const setContent = store.setContent;
    const submit = (e) => {
        e.preventDefault();
        setUserID(refUserID.current.value);
        console.log(`current user ID is ${refUserID.current.value}`);
        setContent(<>
            <GetSingleUser userID={refUserID.current.value} />
            <CreateUserButton />
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

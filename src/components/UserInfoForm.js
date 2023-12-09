import { useContext } from "react";
import { ContextStore } from "../contexts/ContextStore";

const UserInfoForm = ({ name, job, setName, setJob }) => {
    const store = useContext(ContextStore);
    const user = store.user;

    return (
        <div className="user-info">
            <form className="edit-user">
                <div className="form-section">
                    <label htmlFor="edit-user-name">Name: </label>
                    <input
                        type="text"
                        id="edit-user-name"
                        name="edit-user-name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            user.name = (e.target.value);
                        }} />
                </div>
                <div className="form-section">
                    <label htmlFor="edit-user-job">Job: </label>
                    <input
                        type="text"
                        id="edit-user-job"
                        name="edit-user-job"
                        value={job}
                        onChange={(e) => {
                            setJob(e.target.value);
                            user.job = (e.target.value);
                        }} />
                </div>
            </form>
        </div>
    );
}

export default UserInfoForm;

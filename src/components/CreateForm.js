import { useState, useContext } from "react"
import CreateUser from "./CreateUser"
import UserInfoForm from "./UserInfoForm"
import { ContextStore } from "../contexts/ContextStore";


const CreateForm = () => {
    const [name, setName] = useState();
    const [job, setJob] = useState();
    const store = useContext(ContextStore);
    const setContent = store.setContent;

    let user = {
        name: name,
        job: job
    }

    const handleClick = () => {
        setContent(<CreateUser user={user} />)
    }
    return (
        <>
            <h4>Create new user</h4>
            <UserInfoForm
                name={name}
                job={job}
                setName={setName}
                setJob={setJob} />
            <button
                onClick={handleClick}>Create</button>
        </>
    );
}

export default CreateForm;

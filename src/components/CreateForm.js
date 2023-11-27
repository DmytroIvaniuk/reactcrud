import { useState } from "react"
import CreateUser from "./CreateUser"
import UserInfoForm from "./UserInfoForm"

const CreateForm = ({ setContent }) => {
    const [name, setName] = useState();
    const [job, setJob] = useState();
    let user = {
        name: name,
        job: job
    }

    const handleClick = () => {
        setContent(<CreateUser user={user} setContent={setContent} />)
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

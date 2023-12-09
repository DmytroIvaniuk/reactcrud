import UserInfoForm from "./UserInfoForm";
import defaultimg from "../defaultImg.jpg"
import { useEffect, useState } from "react";
import UpdateCurrentUserButton from "./Buttons/UpdateCurrentUserButton";
import DeleteUserButton from "./Buttons/DeleteUserButton";
import Buttons from "./Buttons";

const Avatar = ({ user }) => {
    if (user.hasOwnProperty("avatar")) {
        return (
            <img src={user.avatar} alt="User avatar" />
        );
    }
    return (
        <img src={defaultimg} alt="User avatar" />
    );
}

const RenderEmail = ({ user }) => {
    if (user.hasOwnProperty("email")) {
        return (
            <p className="email">
                <span>User email: </span>
                <span>{user.email}</span>
            </p>
        );
    }
}

const RenderUser = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [job, setJob] = useState(user.job ??= "");
    useEffect(() => {
        setName(user.name);
        setJob(user.job);
    }, [user]);
    return (
        <>
            <div className="user-container" id={user.id}>
                <Avatar user={user} />
                <UserInfoForm
                    name={name}
                    job={job}
                    setName={setName}
                    setJob={setJob} />
                <RenderEmail user={user} />
            </div>
            <Buttons>
                <UpdateCurrentUserButton user={user} />
                <DeleteUserButton />
            </Buttons>
        </>
    );
}

export default RenderUser;

import { useContext, useEffect } from "react";
import { ContextStore } from "../contexts/ContextStore";
import Loader from "./Loader";

const Content = ({ content }) => {
    const store = useContext(ContextStore);
    const loading = store.loading;
    useEffect(() => {
        if (loading) {
            content = <Loader />;
        }
    }, []);

    return (
        <>
            {content}
        </>
    )
}

export default Content;

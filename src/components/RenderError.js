const RenderError = ({ error, status }) => {
    if (status === 404) {
        console.log(error);
        return (
            <div className="error-message">
                <p>Error: Something went wrong</p>
                <span>{status}</span>
                <p>User not found</p>
            </div>
        );
    }
}

export default RenderError;

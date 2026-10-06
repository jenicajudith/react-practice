import { useParams, useNavigate } from "react-router-dom";

function User() {

    const { id } = useParams();

    const navigate = useNavigate();

    return (
        <>
            <h2>User Page</h2>

            <p>User ID: {id}</p>

            <button onClick={() => navigate("/users")}>
                Back to Users
            </button>
        </>
    );
}

export default User;
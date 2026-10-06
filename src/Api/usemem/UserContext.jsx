import Child from "./Child";
import { UserContext } from "./UserContext";

function UseContext() {


    return (
        <>
            <UserContext.Provider
                value={{
                    name: "Jenica",
                    email: "jenica@gmail.com"
                }}
            >
                <Child />
            </UserContext.Provider>
        </>
    );
}

export default UseContext;
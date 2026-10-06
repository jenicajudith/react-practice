import { useReducer } from "react";

function Useform() {

    const states = {
        name: "",
        age: "",
        password: "",
        college: ""
    };

    function form(state, action) {

        switch (action.type) {

            case "name":
                return {
                    ...state,
                    name: action.payload
                };

            case "age":
                return {
                    ...state,
                    age: action.payload
                };

            case "password":
                return {
                    ...state,
                    password: action.payload
                };

            case "college":
                return {
                    ...state,
                    college: action.payload
                };

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(form, states);

    return (
        <>
            <form>

                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) =>
                        dispatch({
                            type: "name",
                            payload: e.target.value
                        })
                    }
                />
                <br></br>

                <label>Age</label>
                <input
                    type="number"
                    placeholder="Enter age"
                    onChange={(e) =>
                        dispatch({
                            type: "age",
                            payload: e.target.value
                        })
                    }
                />
                <br></br>

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) =>
                        dispatch({
                            type: "password",
                            payload: e.target.value
                        })
                    }
                />
                <br></br>

                <label>College</label>
                <input
                    type="text"
                    placeholder="Enter college"
                    onChange={(e) =>
                        dispatch({
                            type: "college",
                            payload: e.target.value
                        })
                    }
                />
                <br></br>
                <br></br>

            </form>

            <div>
                <h3 className="text-center text-3xl">Information</h3>

                <p>Name: {state.name}</p>
                <p>Age: {state.age}</p>
                <p>Password: {state.password}</p>
                <p>College: {state.college}</p>
            </div>
        </>
    );
}

export default Useform;
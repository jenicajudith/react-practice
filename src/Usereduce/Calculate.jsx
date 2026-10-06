import { useReducer } from "react";

function Calculate() {

    const initialState = {
        input1: "",
        input2: "",
        operator: "",
        result: ""
    };

    function calculator(state, action) {

        switch (action.type) {

            case "number":

                if (state.operator === "") {

                    return {
                        input1: state.input1 + action.value,
                        input2: state.input2,
                        operator: state.operator,
                        result: state.result
                    };

                } else {

                    return {
                        input1: state.input1,
                        input2: state.input2 + action.value,
                        operator: state.operator,
                        result: state.result
                    };
                }


            case "operator":

                return {
                    input1: state.input1,
                    input2: state.input2,
                    operator: action.value,
                    result: state.result
                };


            case "calculate":

                let num1 = Number(state.input1);
                let num2 = Number(state.input2);
                let answer;

                switch (state.operator) {

                    case "+":
                        answer = num1 + num2;
                        break;

                    case "-":
                        answer = num1 - num2;
                        break;

                    case "*":
                        answer = num1 * num2;
                        break;

                    case "/":
                        answer = num1 / num2;
                        break;

                    default:
                        answer = 0;
                }

                return {
                    input1: state.input1,
                    input2: state.input2,
                    operator: state.operator,
                    result: answer
                };


            case "clear":

                return {
                    input1: "",
                    input2: "",
                    operator: "",
                    result: ""
                };


            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(
        calculator,
        initialState
    );

    return (
        <>
            <h2>
                {state.result !== ""
                    ? state.result
                    : state.input1 + state.operator + state.input2}
            </h2>

            <button className="text-2xl " onClick={() => dispatch({ type: "number", value: "1" })}>1</button>
            <button  className="text-2xl "onClick={() => dispatch({ type: "number", value: "2" })}>2</button>
            <button  className="text-2xl "onClick={() => dispatch({ type: "number", value: "3" })}>3</button>

            <button  className="text-2xl "onClick={() => dispatch({ type: "number", value: "4" })}>4</button>
            <button  className="text-2xl " onClick={() => dispatch({ type: "number", value: "5" })}>5</button>
            <button  className="text-2xl "onClick={() => dispatch({ type: "number", value: "6" })}>6</button>

            <button  className="text-2xl "onClick={() => dispatch({ type: "number", value: "7" })}>7</button>
            <button  className="text-2xl "onClick={() => dispatch({ type: "number", value: "8" })}>8</button>
            <button  className="text-2xl "onClick={() => dispatch({ type: "number", value: "9" })}>9</button>

            <button  className="text-2xl "onClick={() => dispatch({ type: "number", value: "0" })}>0</button>
 <br></br>
            <button  className="text-2xl "onClick={() => dispatch({ type: "operator", value: "+" })}>+</button>
            <button  className="text-2xl "onClick={() => dispatch({ type: "operator", value: "-" })}>-</button>
            <button  className="text-2xl "onClick={() => dispatch({ type: "operator", value: "*" })}>*</button>
            <button  className="text-2xl "onClick={() => dispatch({ type: "operator", value: "/" })}>/</button>

            <button  className="text-2xl "onClick={() => dispatch({ type: "calculate" })}>=</button>

            <button  className="text-2xl "onClick={() => dispatch({ type: "clear" })}>C</button>
        </>
    );
}

export default Calculate;
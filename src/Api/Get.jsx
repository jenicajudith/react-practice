import { useState, useEffect } from "react";
import axios from "axios";

function Get() {

    const [display, setDisplay] = useState([]);
    const [first, setfirst] = useState("");
function splice(){
    Setdisplay(display.splice(1,5));
}    

    useEffect(() => {

        async function displayapi() {

            try {

                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                console.log(response.data);

                const datas = response.data;
                const first = response.data[0];

                setfirst(first);
                setDisplay(datas);
            } catch (error) {

                console.log("Error: " + error.message);

            }

        }

        displayapi();

    }, []);

    return (

        <div className="d-flex flex-column align-items-center">

            <h3>{first.title}</h3>

            <table className="table w-75 border border-primary table-bordered">

                <thead>

                    <tr>

                        <th>Index</th>
                        <th>User ID</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>

                    </tr>

                </thead>

                <tbody>

                    {display.map((team, index) => (

                        <tr key={team.id}>

                            <td>{index + 1}</td>
                            <td>{team.userId}</td>
                            <td>{team.id}</td>
                            <td>{team.title}</td>
                            <td>{team.body}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Get;
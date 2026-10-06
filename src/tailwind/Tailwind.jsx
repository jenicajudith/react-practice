function Tailwind(){

    return(
        < >
        <div className="grid">

      
        <h1 className="text-purple-900 text-3xl text-center" >TAILWIND</h1>
        <p className="border-7  content-center shadow-2xl shadow-black border-blue-200 m-5 bg-red-200 p-5 text-center text-4xl place-content-center  rounded-2xl hover:bg-red-800  duration-5000 ">Box</p>
        <p className="border-7 shadow-2xl shadow-black border-blue-200 m-5 bg-red-200 p-5 text-center text-4xl place-content-center  rounded-2xl hover:bg-red-800  duration-5000 ">Box</p>
        <p className="border-7 shadow-2xl shadow-black border-blue-200 m-5 bg-red-200 p-5 text-center text-4xl place-content-center  rounded-2xl hover:bg-red-800  duration-5000 ">Box</p>
         <p className="border-7 shadow-2xl shadow-black border-blue-200 m-5 bg-red-200 p-5 text-center text-4xl place-content-center  rounded-2xl hover:bg-red-800  duration-5000 ">Box</p>
        <p className="border-7 shadow-2xl shadow-black border-blue-200 m-5 bg-red-200 p-5 text-center text-4xl place-content-center  rounded-2xl hover:bg-red-800  duration-5000 ">Box</p>
          </div>
          <hr></hr>
          <br></br>
          <div className="grid [grid-template-areas:'h_h_h'_'m_m_m'_'f_f_f']">
            <p className="bg-purple-700 h-20 text-center text-3xl [grid-area:h]">HEADER</p>
            <p className="bg-red-800  h-35 text-center text-2xl [grid-area:m]">MAIN</p>
            <p className="bg-green-950 h-20 text-2xl text-center [grid-area:f]">FOOTER</p>
          </div>
          <br>
          </br>
          <div className="grid [grid-template-areas:'1_1_1_1'_'2_2'] ">
            <p className="border-2  h-20 text-center place-content-center bg-amber-300 [grid-area:1]">Box</p>
            <p className="border-2  h-20 text-center place-content-center bg-amber-400 [grid-area:1]">Box</p>
            <p className="border-2  h-20 text-center place-content-center bg-amber-500 [grid-area:1]">Box</p>
            <p className="border-2  h-20 text-center place-content-center bg-amber-600 [grid-area:1]">Box</p>
            <p className="border-2  h-20 text-center place-content-center bg-amber-700 [grid-area:2]">Box</p>
            <p className="border-2 h-20  text-center place-content-center bg-amber-800 [grid-area:2]">Box</p>

          </div>
        </>
    )

}
export default Tailwind;
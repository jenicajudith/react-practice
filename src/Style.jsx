import boy from './assets/boy.jpg';
import girl from './assets/girl.jpg';
import kids from './assets/kids.jpg';
function Style(){


    return(

        <div className="bg-pink-200 vh-100">
        <div className="grid grid-cols-5 gap-5 p-2">
            <p>Home</p>
            <p className="">New arrivals</p>
            <p className="font-serif text-xl"> Cool clothes 
            </p>
            <p className="">Special</p>
            <p className="">Contact</p>
        </div>
        <div className='text-center pt-25'>
            <h1 className=''>Boxing Sale Highlights</h1>
            <p>A lot of style! Discover "Boxing Day"<br></br>in the entire new collection</p>
        </div>
        <div className='grid grid-cols-3 pt-10'>

        <div >
            <img className='h-40 w-45 border-2 rounded-s-full rounded-e-full rounded-xs' src={boy}></img>
            <p>COOL OUTFIT<br></br>$80</p>
            <button className='border-2'>Add to cart</button>
        </div>
                <div>
             <img className='h-40 w-45 border-2 rounded-s-full rounded-e-full' src={girl}></img>

            <p>COOL OUTFIT<br></br>$80</p>
            <button className='border-2'>Add to cart</button>
        </div>
        <div>
            <img className='h-40 w-45 border-2 rounded-s-full rounded-e-full' src={kids}></img>

            <p>COOL OUTFIT<br></br>$80</p>
            <button className='border-2'>Add to cart</button>
        </div>
        </div>

        </div>
    )}
    

    
export default Style;
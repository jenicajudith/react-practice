 import {Typography, Button, Box, TextField, } from "@mui/material"
 function Materialui(){


    return(
        <>
       
        <Typography variant="h3" sx={{textAlign:"center"}} className="bg-amber-200">Material UI</Typography>
        <Box sx={{border:2, padding:2 , margin:2 ,textAlign:"center" ,backgroundColor:"beige"}}>
            <Typography variant="h4" >Login Form</Typography>
            <TextField variant="standard" label="Name" sx={{padding:2}}></TextField><br></br>

            <TextField variant="standard" label="Password" sx={{padding:2}}></TextField><br></br>
        
        <Button variant="filled" sx={{backgroundColor:"yellow"}}>Click</Button>
        </Box>
        </>
    )
}
export default Materialui;
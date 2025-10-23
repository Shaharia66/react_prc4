import { useState } from "react";

function Dynamic(){


    function styles2(s,f){
        setStyles({...styles,backgroundColor:s,color:f})
    }

    const [dsp,setDsp]=useState("flex")

    const [styles,setStyles]=useState({
        backgroundColor:"green",
        color:"yellow",
        width:"400px",
        margin:"4px",
        padding:"5px",
        border:"1px solid black",
    })
    return(
        <div>
            <button onClick={()=>{styles2("yellow","green")}}>button1</button>
            <div style={styles}>
            <h1>here we do Css work.</h1>
            <h1>first css code. </h1>
            <h1>last css code.</h1>
            </div>

            <button onClick={()=>setDsp(!dsp)}>display btn!</button>
            <div style={{display:dsp?"flex":"block",padding:"4px",width:"500px",margin:"3px",border:"2px solid black"}}>
                <button style={{backgroundColor:"red",color:"white"}}>RED</button>
                <button style={{backgroundColor:"green",color:"white"}}>GREEN</button>
                <button style={{backgroundColor:"blue",color:"white"}}>BLUE</button>
                <button style={{backgroundColor:"yellow",color:"white"}}>YELLOW</button>
                <button style={{backgroundColor:"black",color:"white"}}>BLACK</button>
            </div>
        
        </div>
    )
}
export default Dynamic;
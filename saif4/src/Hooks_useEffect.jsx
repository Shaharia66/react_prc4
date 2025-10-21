import { useEffect, useState } from "react";

function Effects(){
    const [count,setCount]=useState(0);
    const [data,setData]=useState(0);

    useEffect(()=>{
        callon();
    },[count,data])

    function callon(){
        console.log("call the function ",count,data)
    }

    return(
        <div>
            <h1>here do work of useEffect Hooks.</h1>
            <button onClick={()=>{setCount(count+1)}}>counter:{count}</button>
            <button onClick={()=>{setData(data+1)}}>data:{data}</button>
        </div>
    )
}
export default Effects;

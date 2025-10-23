import { useEffect, useState } from "react";
import Comp2 from "./Hooks_hndlprops2";

function Comp1(){

    const [count,setCount]=useState(0);
    const [data,setData]=useState(0);
    const [display,setDisplay]=useState(true);


    return(
        <div>
            <h1>Handle side effects for props .</h1>
            {
                display? <Comp2 cnt={count} dt={data} dsp={display}/>:null
            }
            <button onClick={()=>setCount(count+1)}>Counter:{count}</button>
            <button onClick={()=>setData(data+1)}>Data:{data}</button>
            <button onClick={()=>setDisplay(!display)}>toggle</button>
        </div>
    )
}
export default Comp1;

import { useEffect } from "react";

function Comp2({cnt,dt,dsp}){


    function effects(){
        console.log("here call for update,",cnt,dt);
    }
    function effects2(){
        console.log("this is call for Mount .")
    }
    function effects3(){
        console.log("call for unMount.")
    }

    useEffect(()=>{
        effects();
    },[cnt,dt])
    useEffect(()=>{
        effects2()
    },[])
    useEffect(()=>{
        return()=>{
            effects3();
        };
    },[])

    return(
        <div>
            <h3>here is our function and effect part.</h3>

        </div>
    )
}
export default Comp2;

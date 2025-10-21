import Student from "./student";

function College({ college }) {
    return (
        <div  style={{backgroundColor:"yellow", padding:"10px", margin:"10px",
            color:"red", borderBottom:"2px solid black" 
        }}>
            
            <p>College Name:<span><b>{college.name}</b></span></p>
            <ul style={{ textAlign: "left" }}>
                <li>
                    City:<b>{college.city}</b>
                </li >
                <li>
                    website:<b>{college.website}</b>
                </li>
                {
                    college.student.map((student)=>(
                        <Student student={student}/>

                    ))
                }
            </ul>
        </div>
    )
}
export default College;
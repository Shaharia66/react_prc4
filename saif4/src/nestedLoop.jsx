import College from "./college";

function CollegeData(){
    const colleges=[
        {
            name:"buet",
            city:"dhaka",
            website:"www.buet.com",
            student:[
                {
                    name:"saif",
                    age:25,
                    id:66,
                },
                {
                    name:"raif",
                    age:27,
                    id:67,
                },
                {
                    name:"taif",
                    age:25,
                    id:68,
                }
            ]
        },
        {
            name:"kuet",
            city:"khulna",
            website:"www.kuet.com",
            student:[
                {
                    name:"saif",
                    age:25,
                    id:66,
                },
                {
                    name:"raif",
                    age:27,
                    id:67,
                },
                {
                    name:"taif",
                    age:25,
                    id:68,
                }
            ]
                
            
        },
        {
            name:"ruet",
            city:"rajshahi",
            website:"www.ruet.com",
            student:[
                {
                    name:"saif",
                    age:25,
                    id:66,
                },
                {
                    name:"raif",
                    age:27,
                    id:67,
                },
                {
                    name:"taif",
                    age:25,
                    id:68,
                }
            ]
        }

    ]
    return(
        <div>
            <h1>Information</h1>
            <div>
            {
                colleges.map((coll)=>(
                    <College college={coll}/>
                ))
            }
            </div>
        </div>
    )
}
export default CollegeData;
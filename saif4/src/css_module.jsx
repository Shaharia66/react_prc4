import style from "./css/cssmo.module.css"

function UserProfile(){
    return(
        <div>
            <div className={style.div1}>
                <h3 className={style.heading}>User Profile</h3>
                <img className={style.image} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div className={style.div2}>
                    <h4>Shahariar Saif</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}
export default UserProfile;

import Style from "./loader.module.css"
const Loading=()=>{
    return(
        <div className={Style.div_loader}>
            <img src="https://i.pinimg.com/originals/ea/b7/e1/eab7e1120c9dd628d3bb39a20a94927d.gif"/>
        </div>
    )
}
export default Loading;
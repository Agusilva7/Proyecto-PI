import React from 'react';
import { useDispatch} from 'react-redux'
import { remove } from '../../Redux/Actions/actions';
import Style from "./error.module.css"
const Error=()=>{
    const dispatch=useDispatch();
    const clear=()=>{
        dispatch(remove())
    }
    return(
        <div>
            <div className={Style.div_cont_total}>
                <div className={Style.div_cont}>
                    <div>
                        <img className={Style.img_error} src="https://imagenes.20minutos.es/uploads/imagenes/2018/05/10/3171084.gif"/>
                    </div>
                </div>
            </div>
            <div className={Style.div_button}>
                <button onClick={()=>{clear()}}>Back</button>
            </div>
            <div className={Style.div_img2}>
                <div>
                    <img src="https://gifdb.com/images/thumbnail/programming-bug-runner-meme-tds5x78v3hl3oy63.gif"/>
                </div>
            </div>
            <div className={Style.div_dai}>
                <div> 
                    <img src="https://iili.io/HD4COwg.gif" />
                </div>
            </div>

        </div>
    )
}
export default Error;
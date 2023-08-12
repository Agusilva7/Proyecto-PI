import React from "react";
import Style from "./landing.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getVideoGamesGenres ,getVideoGames } from "../../Redux/Actions/actions";
const Landing = () => {
  const allVideoGames=useSelector((state)=>state.allVideoGames)
  const dispatch=useDispatch();

  return (
    <div className={Style.cont}>
      <Link to={"/home"}>
        <div>
          <img
            className={Style.imagen}
            src="https://as2.ftcdn.net/jpg/05/34/41/39/360_F_534413913_QF8E2ELN3S9c8L16w1roKxhi87bQA89O.png"
          />
        </div>
        <div className={Style.img}></div>
      </Link>
    </div>
  );
};

export default Landing;

import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Youssef</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
            excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
            ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
            corporis!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
            excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
            ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
            corporis!
          </p>
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
            excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
            ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
            corporis!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
            excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
            ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
            corporis!
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;

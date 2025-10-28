import React from "react";
import "./slidebar.css";
import home_icon from "../../assets/home.png"; 
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Slidebar = ({sidebar , Category , setCategory}) => {
  return (
    <div className={`slidebar ${sidebar? "":"small-sidebar"} `}>
      <div className="shortcut_links">
        <div className={`side_link ${Category===0?"active":""}`} onClick={() => setCategory(0)}>
          <img src={home_icon} alt="home" />
          <p>Homw</p>
        </div>
        <div className={`side_link ${Category===20?"active":""}`} onClick={()=> setCategory(20)} >
          <img src={game_icon} alt="games" />
          <p>Gaming</p>
        </div>
        <div className={`side_link ${Category===2?"active":""}`} onClick={()=> setCategory(2)} >
          <img src={automobiles} alt="automobiles" />
          <p>Automobiles</p>
        </div>
        <div className={`side_link ${Category===17?"active":""}`} onClick={()=> setCategory(17)} >
          <img src={sports} alt="sports" />
          <p>Sports</p>
        </div>
        <div className={`side_link ${Category===24?"active":""}`} onClick={()=> setCategory(24)} >
          <img src={entertainment} alt="entertainment" />
          <p>Entertainment</p>
        </div>
        <div className={`side_link ${Category===28?"active":""}`} onClick={()=> setCategory(28)} >
          <img src={tech} alt="tech" />
          <p>Technology</p>
        </div>
        <div className={`side_link ${Category===10?"active":""}`} onClick={()=> setCategory(10)} >
          <img src={music} alt="music" />
          <p>Music</p>
        </div>
        <div className={`side_link ${Category===19?"active":""}`}  onClick={()=> setCategory(19)} >
          <img src={blogs} alt="blogs" />
          <p>Blogs</p>
        </div>
        <div className={`side_link ${Category===25?"active":""}`} onClick={()=> setCategory(25)} >
          <img src={news} alt="news" />
          <p>News</p>
        </div>
         <hr />
      </div>
       <div className="subscribed_list">
        <h3>Subscribed</h3>
        <div className="side_link">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side_link">
          <img src={simon} alt="" />
          <p>Mr Beast</p>
        </div>
        <div className="side_link">
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side_link">
          <img src={megan} alt="" />
          <p>5 Minute Crafts</p>
        </div>
        <div className="side_link">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
       </div>
    </div>
  );
};

export default Slidebar;

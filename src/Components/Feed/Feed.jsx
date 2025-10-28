import React, { useEffect, useState } from "react";
import "./feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import Player from "../../Pages/Video-player/Player";
import { Api_key } from "../../script";
import { value_converter } from "../../script";
import moment from "moment";

const Feed = ({ Category }) => {

  const [data, setData] = useState([])

  const fetchdata = async () => {
    const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=In&videoCategoryId=${Category}&key=${Api_key}`
    await fetch(videolist_url).then(response => response.json()).then(data => setData(data.items))
  }

  useEffect(() => {
    fetchdata()
  }, [Category])


  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link to={`Player/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
          </Link>
        )
      })}



    </div>

  );
};

export default Feed;

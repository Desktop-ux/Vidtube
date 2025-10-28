import React, { useEffect, useState } from 'react'
import "./Recommended.css"
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Api_key, value_converter } from '../../script';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {

    const [apiData, setApidata] = useState(null)

    const fetchRecommendedVideos = async () => {
        const Recommended_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&videoCategoryId=${categoryId}&key=${Api_key}`
        await fetch(Recommended_url).then(response => response.json()).then(data => { setApidata(data.items) })
    }

    useEffect(() => {
        fetchRecommendedVideos()
    }, [])
    

    return (
        <div className='Recommended' >
            {apiData && apiData.map((item, index) => {
                return (
                    <Link to={`/Player/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <span>{value_converter(item.statistics.viewCount)} views &bull; 2 days ago</span>
                        </div>
                    </Link>
                )
            })}



        </div>
    )
}

export default Recommended
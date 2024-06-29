import React from 'react'
import './Card.css'

function Card(props) {
    return (
      <div className="card text-white p-lg-2 mb-3 border bg-[#13131A]">
        <div className="img_wrapper">
            <img src={props.img} alt={props.head + " icon"} />
        </div>
        <h1>{props.head}</h1>
        <p>{props.parah}</p>
      </div>
    );
  }

export default Card;

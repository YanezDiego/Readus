import React from 'react';


const MostViewed = (props) =>{
    return(
      <div key={props.article.asset_id}>
        <img src={`${props.article.media[0]["media-metadata"][2].url}`}/>
        <h2><a target='_blank' href={`${props.article.url}`}>{props.article.title}</a></h2>
        <p>{props.article.abstract}</p><span>Total Shares: {props.article.total_shares}</span>
      </div>
    )
};


export default MostViewed;

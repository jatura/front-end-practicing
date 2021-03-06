import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Travel(props){
    return (
        <div className="travel-block">
            <div className="image">
                <img className="trvel-img" src={props.imageUrl}/>
                <p>Photo by <a target="_blank" href={props.artistUrl}>{props.artist}</a> on <a target="_blank" href="https://unsplash.com/">Unsplash</a></p>
            </div>
            <div className="detail">
                <div className="location">
                    <h3><FontAwesomeIcon className="icon"  icon={faLocationDot} />{props.location.toUpperCase()}</h3>
                    <a target="_blank" href={props.googleMapsUrl}>Maps</a>
                </div>
                <h2>{props.title.toUpperCase()}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
import React, {useRef, useEffect} from 'react'
import '../css/maps.css'
export default function Maps(props) {
    const imgSrc = props.image;
    const index = props.index;
    const mapItem = useRef(null);
    const currenting = props.current;
    useEffect(() => {
        if(currenting == index){
            mapItem.current.classList.add('active');
        }else{
            mapItem.current.classList.remove('active');
            
        }

    }, [currenting])
    const handleMap = ()=>{
        props.mapMove(index)
    }
    return (
        <div ref={mapItem} onClick={handleMap} className='map-item'>
            <img className='img' src={imgSrc}></img>
        </div>
    )
}

import React, {useRef, useEffect} from 'react';
import butterfly from '../../asset/gif/butterfly3.gif'
import '../../scss/mainscreen.scss'
//Gsap
import  {gsap} from "gsap";

export default function ButterFly({top, left,rotateY,rotateX, z}) {

    const tl = useRef();
    const butterFly = useRef(null)
    useEffect(() => {
        tl.current = gsap.timeline({repeat : -1, yoyo : true})
            .to(butterFly.current,7,{x:`random(0, ${z})`, y:`random(0, ${z})`})
            .to(butterFly.current,7,{x:`random(0, ${z})`, y:`random(0, ${z})`})
            .to(butterFly.current,7,{x:`random(0, ${z})`, y:`random(0, ${z})`})
            .to(butterFly.current,7,{x:`random(0, ${z})`, y:`random(0, ${z})`})
            .to(butterFly.current,7,{x:`random(0, ${z})`, y:`random(0, ${z})`})
    }, [])
  return (
        <div style={{top : top, left : left, transform : `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`}} ref={butterFly} className='butterfly-box'>
            <img src={butterfly}></img>
        </div>
  )
}

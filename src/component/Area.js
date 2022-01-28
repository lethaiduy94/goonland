import React, { useEffect, useRef, useState } from 'react'
import '../css/area.css'
import { gsap } from 'gsap';
import {compareID} from '../function/Compare'
//components
import Student from '../component/area/Student'
//images
// import background from '../asset/images/eat-background5.svg'
export default function Area(props) {
    const area = props.area;
    const tl = useRef();
    const image = props.image;
    const state = props.state;
    const currentArea = props.current;
    const data = props.data;
    const width = props.width
    const stateMobile = props.mobileState
    const [students, setStudents] = useState([])

    useEffect(() => {
        const studentsArray = []
        data.forEach((student, index) =>{
            if(student.group === area){
                studentsArray.push(student)
            }
            if (typeof studentsArray !== 'undefined' && studentsArray.length === 0) return;
            const sortArray = studentsArray.sort(compareID)
            setStudents(sortArray);
        })

    }, [data , area])
    
    useEffect(() => {
            

                tl.current = gsap.timeline()
                .to(props.inerRef.current,1, {width: 100/3 + 'vw', height: 100/2 + 'vh'})
            

            
        

    }, [])
    
    const handleMap = () =>{
        props.mapMove(props.index)
        
    }
    

    const loadData = () =>{
        
        if((state && currentArea === props.index )|| stateMobile){

            if (typeof students !== 'undefined' && students.length === 0){
                return(
                    <></>
                )
            }else{
                return(
                    <div className='students-box'>
                        {students.map((item, index) =>{
                            return(
                                <Student width = {width} key={item.id} data = {item} />
                            )
                        })}
                    </div>
                )
            }
        }

    }
    return (
        <div onClick={!state ? handleMap : null} ref={props.inerRef} className='area'>
            {/* <div className='area-background'>
                <img className='area-background-img' src={background}></img>
            </div> */}
            <div className='area-imgBox'>
                <img className='area-img' src={image}></img>
            </div>
            { loadData()}
        </div>
    )
}

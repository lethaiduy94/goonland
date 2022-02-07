import React, { useRef} from 'react'
import {gsap} from "gsap";
import audio2 from '../../asset/audio/buttonEffect.mp3'
import Flower from '../Flower'
//image

import orange from '../../asset/flower/5_flower_left.svg'
import red from '../../asset/flower/5_flower_right.svg'
import white from '../../asset/leaf/5_leaf_left.svg'
import yellow from '../../asset/leaf/5_leaf_right.svg'
import pink from '../../asset/leaf/5_leaf_right2.svg'
import leaf from '../../asset/images/x.svg'
//function
import { Random } from '../../function/Random';

export default function Student({data, width}) {
    
    const student = data;
    const widthMobile = width;
    var codeAverage = 0;
    var planAverage = 0;
    var designAverage = 0;
    var presentationAverage = 0;
    var communicationAverage = 0;

    
    const randomTop = Random(20,60) + '%';
    const randomLeft = Random(0,70) + '%';

    if(typeof student.evalutions !== 'undefined' && student.evalutions.length !== 0){
        
        const studentArrayLenghth = data.evalutions.length

        const codeAverage2 = student.evalutions.reduce((acc, cur)=>{
            return acc + cur.code;
        },0)
        const planAverage2 = student.evalutions.reduce((acc, cur)=>{
            return acc + cur.plan;
        },0)
        const designAverage2 = student.evalutions.reduce((acc, cur)=>{
            return acc + cur.design;
        },0)
        const presentationAverage2 = student.evalutions.reduce((acc, cur)=>{
            return acc + cur.presentation;
        },0)
        const communicationAverage2 = student.evalutions.reduce((acc, cur)=>{
            return acc + cur.communication;
        },0)

         codeAverage = Math.round((codeAverage2 / studentArrayLenghth));
         planAverage = Math.round((planAverage2 / studentArrayLenghth));
         designAverage = Math.round((designAverage2 / studentArrayLenghth));
         presentationAverage = Math.round((presentationAverage2 / studentArrayLenghth));
         communicationAverage = Math.round((communicationAverage2 / studentArrayLenghth));
    
    }
    

    const tl = useRef();
    const studentInforRef = useRef(null);
    
    const modalOpen = ()=>{
        
        tl.current = gsap.timeline()
        .to(studentInforRef.current, 0.05, {
            scale:0.2,
            rotateZ:-5,
            opacity:0.2,
        })
        .to(studentInforRef.current, 0.05, {
            scale:0.4,
            rotateZ:5,
            opacity:0.4,
        })
        .to(studentInforRef.current, 0.05, {
            scale:0.6,
            rotateZ:-5,
            opacity:0.6,
        })
        .to(studentInforRef.current, 0.05, {
            scale:0.8,
            rotateZ:5,
            opacity:0.8,
        })
        .to(studentInforRef.current, 0.05, {
            scale:1,
            rotateZ:0,
            opacity:1,
        })
        

        var audio = new Audio(audio2);
        audio.load();
        audio.play();
        studentInforRef.current.style.display = 'block';
        
    }
    const modalClose = () =>{
        tl.current = gsap.timeline()
        .to(studentInforRef.current, 0.5, {
            scale:0,
        })
        studentInforRef.current.style.display = 'none';

    }
    return (
        <div style={{top:student.Coordinate !== null ? `${student.Coordinate.x}%`:randomTop, left: student.Coordinate !== null ? `${student.Coordinate.y}%`:randomLeft}}  className='student'>
            <Flower number = {student.booth_number} modalOpen = {modalOpen} codeAverage={codeAverage} planAverage={planAverage} designAverage = { designAverage} communicationAverage = {communicationAverage} presentationAverage = {presentationAverage} />
                <div style={{top: widthMobile > 319 && widthMobile < 426 && student.coordinate_mobile !== null ? `${student.coordinate_mobile.x}%`:'-110%',
                            left: widthMobile > 319 && widthMobile < 426 && student.coordinate_mobile !== null ? `${student.coordinate_mobile.y}%`:'90%',
                            backgroundColor : student.student_number.includes('20aw') ? '#edf1f4' : '#fcf2f0',

                 }} ref={studentInforRef}  className='student-infor'>
                 <div style={{borderColor: student.student_number.includes('20aw') ? 'transparent #edf1f4 transparent transparent' : 'transparent #fcf2f0 transparent transparent' }} className='student-infor-triangle'></div>
                <div onClick={modalClose} className='student-close'>
                    <img src={leaf}></img>
                </div>
                <div className='student-infor-layout'>


                    <div className='student-infor-header'>
                        <div className='student-number'>
                            <p>{student.student_number.includes('20aw') ? '二年生':'一年生'}</p>
                            
                        </div>
                        <div className='student-name'>
                            <p style={{fontSize:'24px'}}>{student.name}</p>
                        </div>
                    </div>
                    <p className='student-power' style={{fontWeight:'bold'}}>この学生の強み</p>
                    
                    <div className='student-info-body'>
                        <ul className='student-score'>
                            <li style={{display: designAverage == 5 ? 'block': 'none'}}>
                                <div className='student-score-content'>
                                    <div className='score-icon'>
                                        <img src={yellow}></img>
                                    </div>
                                    <span>UIデザイン力</span>
                                    {/* <p>{designAverage}</p> */}
                                </div>
                            </li>
                            <li style={{display: planAverage == 5 ? 'block': 'none'}}>
                                <div className='student-score-content'>
                                    <div className='score-icon'>
                                        <img src={pink}></img>
                                    </div>
                                    <span>企画力</span>
                                    {/* <p>{planAverage}</p> */}
                                </div>
                            </li>
                            <li style={{display: presentationAverage == 5 ? 'block': 'none'}}>
                                <div className='student-score-content'>
                                    <div className='score-icon'>
                                        <img src={red}></img>
                                    </div>
                                    <span>プレゼンテーション力</span>
                                    {/* <p>{presentationAverage}</p> */}
                                </div>
                            </li>
                            <li style={{display: codeAverage == 5 ? 'block': 'none'}}>
                                <div className='student-score-content'>
                                    <div className='score-icon'>
                                        <img src={orange}></img>
                                    </div>
                                    <span>実装力</span>
                                    {/* <p>{codeAverage}</p> */}
                                </div>
                            </li>
                            <li style={{display: communicationAverage == 5 ? 'block': 'none'}}>
                                <div className='student-score-content'>
                                    <div className='score-icon'>
                                        <img src={white}></img>
                                    </div>
                                    <span>ビジネスマナー</span>
                                    {/* <p>{communicationAverage}</p> */}
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                </div>

        </div>
    )
}

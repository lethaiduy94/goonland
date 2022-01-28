import React, { useRef} from 'react'
import {gsap} from "gsap";
import audio2 from '../../asset/audio/audio2.wav'
import Flower from '../Flower'
//image

import orange from '../../asset/flower/5_flower_left.svg'
import red from '../../asset/flower/5_flower_right.svg'
import white from '../../asset/leaf/5_leaf_left.svg'
import yellow from '../../asset/leaf/5_leaf_right.svg'
import pink from '../../asset/leaf/5_leaf_right2.svg'
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
         codeAverage = Math.round((student.total_scores.code / studentArrayLenghth));
         planAverage = Math.round((student.total_scores.plan / studentArrayLenghth));
         designAverage = Math.round((student.total_scores.design / studentArrayLenghth));
         presentationAverage = Math.round((student.total_scores.presentation / studentArrayLenghth));
         communicationAverage = Math.round((student.total_scores.communication / studentArrayLenghth));
    
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
        

        // var audio = new Audio(audio2);
        // audio.load();
        // audio.play();
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
            <Flower modalOpen = {modalOpen} codeAverage={codeAverage} planAverage={planAverage} designAverage = { designAverage} communicationAverage = {communicationAverage} presentationAverage = {presentationAverage} />
                <div style={{top: widthMobile > 319 && widthMobile < 426 && student.coordinate_mobile !== null ? `${student.coordinate_mobile.x}%`:'-110%',
                            left: widthMobile > 319 && widthMobile < 426 && student.coordinate_mobile !== null ? `${student.coordinate_mobile.y}%`:'90%'

                 }} ref={studentInforRef}  className='student-infor'>
                <div onClick={modalClose} className='student-close'>
                    <img src={red}></img>
                </div>


                    <div className='student-infor-header'>
                        <div className='student-number'>
                            <p>ブース番号</p>
                            <span>{student.booth_number}</span>
                        </div>
                        <div className='student-name'>
                            <p style={{fontSize:'18px'}}>{student.name}</p>
                        </div>
                    </div>
                    <p className='student-title'>タイトル:<span>{student.title}</span></p>
                    <p style={{fontWeight:'bold'}}>送っていただいた評価の平均値</p>
                    
                    <div className='student-info-body'>
                        <ul className='student-score'>
                            <li>
                                <div className='score-icon'>
                                    <img src={yellow}></img>
                                </div>
                                <span>UIデザイン力</span>
                                <p>{designAverage}</p>
                            </li>
                            <li>
                                <div className='score-icon'>
                                    <img src={pink}></img>
                                </div>
                                <span>企画力</span>
                                <p>{planAverage}</p>
                            </li>
                            <li>
                                <div className='score-icon'>
                                    <img src={red}></img>
                                </div>
                                <span>プレゼンテーション力</span>
                                <p>{presentationAverage}</p>
                            </li>
                            <li>
                                <div className='score-icon'>
                                    <img src={orange}></img>
                                </div>
                                <span>実装力</span>
                                <p>{codeAverage}</p>
                            </li>
                            <li>
                                <div className='score-icon'>
                                    <img src={white}></img>
                                </div>
                                <span>ビジネスマナー</span>
                                <p>{communicationAverage}</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>

        </div>
    )
}

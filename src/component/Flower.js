import React, { useRef, useState, useEffect } from 'react'
import {flowerLeft, flowerRight} from '../asset/flower';
import {leafLeft, leafRight, leafPink} from '../asset/leaf';
import initialFlower from '../asset/images/0.png';
//css
import  '../scss/flower.scss';

export default function Flower({codeAverage, planAverage, designAverage, communicationAverage, presentationAverage , modalOpen, number, state}) {
    const boothNumber = number;
    const score1 = codeAverage;
    const score2 = presentationAverage;
    const score3 = communicationAverage;
    const score4 = designAverage;
    const score5 = planAverage;
    // const [score1, setScore1] =useState(1);
    // const [score2, setScore2] =useState(1);
    // const [score3, setScore3] =useState(1);
    // const [score4, setScore4] =useState(1);
    // const [score5, setScore5] =useState(1);
    //useRef
    const flower = useRef();
    


    const initial = () =>{
        if(score1 == 0 && score2 == 0 && score3 == 0 && score4 == 0 && score5 ==0){
            return(
                <div>

                     <img className='img-initial' src={initialFlower}></img>
                </div>
                
            )
        }else return (
            <>
                <div  className='trunk'>
                    <div className='flower-left-box' style={{ top : score1 == 1 ? '18%': score1 == 2 ? '13%' : score1 == 3 ? '12%' : score1 == 4 ? '11%' : score1 == 5 ? '12%' : '18%',
                                    left : score1 == 1 ? '30%' : score1 == 2 ? '25%' : score1 == 3 ? '25%' : score1 == 4 ? '25%' : score1 == 5 ? '26%' : '30%',

                        }}>

                        <img src={flowerLeft[score1 - 1]}  className ='flower-left'></img>
                    </div>
                    
                    <div className='flower-right-box' style={{top : score2 == 1 ? '-2%' : score2 == 2 ? '-4%' : score2 == 3 ? '-4%' : score2 == 4 ? '0%' : score2 == 5 ? '-7%' : '-2%',
                                    left : score2 == 1 ? '61%' : score2 == 2 ? '62%' : score2 == 3 ? '61%' : score2 == 4 ? '61%' : score2 == 5 ? '60%' : '61%',
                        
                        }}>
                        <img src={flowerRight[score2 - 1]}  className ='flower-right'></img>
                    </div>
                   
                   <div className='leaf-left-box' style={{top: score3 == 1 ? '51%' : score3 == 2 ? '51%' : score3 ==3 ? '52%': score3 == 5 ? '50%' : '51%',
                                    left : score3 ==1 ? '26%' : score3 == 2 ? '26%' : score3 == 3 ? '24%' : score3 == 4 ? '24%' : score3 == 5 ? '20%' : '26%',
                        }}>
                        <img src={leafLeft[score3 - 1]}  className ='leaf-left'></img>
                   </div>
                    
                    <div className='leaf-right-box' style={{top : score4 == 1 ? '30%' : score4 == 2 ? '26%': score4 == 3 ? '24%' : score4 == 4 ?  '23%' : score4 == 5 ? '23%' :  '30%',
                                    left : score4 == 1? '73%' : score4 == 2 ? '76%' : score4 == 3 ? '77%' : score4 == 4 ? '80%' : score4 == 5 ? '79%' :  '73%',
                        }}>
                        <img src={leafRight[score4 - 1]}  className ='leaf-right'></img>
                    </div>
                    <div className='leaf-right2-box' style={{top : score5 == 1 ? '63%' : score5 == 2 ? '62%' : score5 == 3 ? '62%' : score5 == 4 ? '63%' : score5 == 5? '59%' :  '73%',
                                    left : score5 == 1? '73%' : score5 == 2 ? '77%' : score5 == 3 ? '79%' : score5 == 4 ? '79%' : score5 == 5 ? '81%' :  '73%',
                        }}>
                        <img src={leafPink[score5 - 1]}  className ='leaf-right2'></img>
                    </div>
                </div>
            </>
        )
    }
    const openModal = ()=>{
        modalOpen();
    }
    return (
        <div>
            {/* <h1>Flower</h1>
            <input onChange={(e) => setScore1(e.target.value)} value={score1} type='range' min='0' max='5' step= '1' ></input>
            <input onChange={(e) => setScore2(e.target.value)} value={score2} type='range' min='0' max='5' step= '1' ></input>
            <input onChange={(e) => setScore3(e.target.value)} value={score3} type='range' min='0' max='5' step= '1' ></input>
            <input onChange={(e) => setScore4(e.target.value)} value={score4} type='range' min='0' max='5' step= '1' ></input>
            <input onChange={(e) => setScore5(e.target.value)} value={score5} type='range' min='0' max='5' step= '1' ></input> */}
            
            <div onClick={openModal} ref={flower} className='flower'>
            <div style={{position: state ? 'relative': 'absolute',
                        left: state ? '10px' : '20%',
                        
                        }} className='flower-number'>{boothNumber}</div>
                {initial()}
            </div>
        </div>
    )
}

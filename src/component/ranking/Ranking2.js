import React, {useState, useEffect, useRef} from 'react'
import Particles from "react-tsparticles";
import axios from 'axios'
import '../../scss/raking.scss'
//img
import flower from '../../asset/flower/5_flower_left.svg'
import flower2 from '../../asset/flower/5_flower_right.svg'
import flower3 from '../../asset/leaf/5_leaf_left.svg'
import flower4 from '../../asset/leaf/5_leaf_right.svg'
import flower5 from '../../asset/leaf/5_leaf_right2.svg'
import gun from '../../asset/gif/gun2.gif'
import minion from '../../asset/gif/bf6.gif'
import congra from '../../asset/gif/congrats.gif'

import number1 from '../../asset/images/number1.svg';
import number2 from '../../asset/images/number2.svg';
import number3 from '../../asset/images/number3.svg';
//function
import { compareTotal2} from '../../function/Compare'
//audio
import {useAudio} from '../../function/Audio';
import audio from '../../asset/audio/rankingaudio.mp3'

export default function Ranking2() {
    //tabs state
    //useRef
    const cursor2 = useRef(null)
    const [students, setStudents] = useState([])
    const [students2, setStudents2] = useState([])


    const [open1, setOpen1] = useState(false)// mo cai bang 1
    const [open2, setOpen2] = useState(false)// mo cai bang 2
    const [open3, setOpen3] = useState(false)// mo 2 cai bang
    const [playing, toggle] = useAudio(audio);

    var setDate = new Date('02 03 2022 10:00:0');// time start

    var setDate2 = new Date ('02 05 2022 13:00:0');// time end
    
    // useEffect(() => {
    //     const fetchData = async () =>{

    //         try {
    //             const studentData = await axios({
    //                 method:'GET',
    //                 url:`https://quiet-sands-58722.herokuapp.com/students?student_number_contains=21aw`
    //             })
                
    //             const scoreSort = studentData.data.sort(compareTotal)
    //             setStudents(scoreSort)

    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     fetchData()
    //     const realTimeId = setInterval(() => {
    //         fetchData()
                
    //         }, 10000);
    //         return () => {
    //             clearInterval(realTimeId)
    //         }
    // }, [])
    useEffect(() =>{

        document.addEventListener('mousemove', handleMouse)
        function handleMouse(e){
            var x = e.clientX;
            var y = e.clientY;
            cursor2.current.style.left = x + 30 +  'px';
            cursor2.current.style.top = y + 30 + 'px';
        }
        return () =>{
        document.removeEventListener('mousemove',handleMouse)
        }
    },[])
    useEffect(() => {
        const fetchData = async () =>{

            try {
                const studentData = await axios({
                    method:'GET',
                    url:`https://quiet-sands-58722.herokuapp.com/students?student_number_contains=21aw`
                })
                


                var scoreList = [];
        
                studentData.data.map((student) =>{
        
                    if(typeof student.evalutions !== 'undefined' && student.evalutions.length !==0  ){
        
                        var evalutionArray = [];
                        student.evalutions.map((evalution, index) =>{
                            const evalutionTime = evalution.created_at;
        
                            if( Date.parse(setDate) < Date.parse(evalutionTime) && Date.parse(evalutionTime) < Date.parse(setDate2)){
                                evalutionArray.push(evalution);
                            }
                            
                            return(<></>)
                            
                        })
        
                        const totalScore = evalutionArray.reduce((acc,cur) =>{
                            return acc + cur.code + cur.plan + cur.design + cur.presentation + cur.communication
                        },0)
        
                        scoreList.push({
                            'name': student.name,
                            totalScore,
                        })
                    }
                    
                    return(<></>)
                })
                
                const scoreSort = scoreList.sort(compareTotal2)
                setStudents(scoreSort)

            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
        const realTimeId = setInterval(() => {
            fetchData()
                
            }, 10000);
            return () => {
                clearInterval(realTimeId)
            }
    }, [])


    useEffect(() => {
        const fetchData2 = async () =>{

            try {
                const studentData = await axios({
                    method:'GET',
                    url:`https://quiet-sands-58722.herokuapp.com/students?student_number_contains=20aw`
                })
                


                var scoreList = [];
        
                studentData.data.map((student) =>{
        
                    if(typeof student.evalutions !== 'undefined' && student.evalutions.length !==0  ){
        
                        var evalutionArray = [];
                        student.evalutions.map((evalution, index) =>{
                            const evalutionTime = evalution.created_at;
        
                            if( Date.parse(setDate) < Date.parse(evalutionTime) && Date.parse(evalutionTime) < Date.parse(setDate2)){
                                evalutionArray.push(evalution);
                            }
                            
                            return(<></>)
                            
                        })
        
                        const totalScore = evalutionArray.reduce((acc,cur) =>{
                            return acc + cur.code + cur.plan + cur.design + cur.presentation + cur.communication
                        },0)
        
                        scoreList.push({
                            'name': student.name,
                            totalScore,
                        })
                    }
                    
                    return(<></>)
                })
                
                const scoreSort = scoreList.sort(compareTotal2)
                setStudents2(scoreSort)

            } catch (error) {
                console.log(error)
            }
        }

        fetchData2()
        const realTimeId2 = setInterval(() => {
            fetchData2()
                
            }, 10000);
            return () => {
                clearInterval(realTimeId2)
            }
    }, [])

    //time
    // useEffect(()=>{
        
    //     const timeOut = setInterval(() => {

           
    //         const setDate = new Date('01 29 2022 5:0:0')

    //         const now = new Date();
    //         const Hours = now.getHours();
    //         const Minutes = now.getMinutes();
    //         const sec = now.getSeconds();

    //         if(Date.parse(setDate) > Date.parse(now)){
    //             console.log('dang lon hon')
    //         }
    //     }, 1000);
    //     return () =>{

    //     }
    // },[])

    // const rankingStudent = async () => {
    //     // (YYYY, MM, DD, Hr, Min, Sec)
    //     var setDate = new Date(2022, 1, 29, 1, 30, 0);

    //     var scoreList = [];

    //     const studentTotalScore =  students.map((student, index) =>{

    //         if(typeof student.evalutions !== 'undefined' && student.evalutions.length !==0  ){

    //             var evalutionArray = [];
    //             student.evalutions.map((evalution, index) =>{
    //                 const evalutionTime = evalution.created_at;

    //                 if(Date.parse(evalutionTime) < Date.parse(setDate)){
    //                     evalutionArray.push(evalution);
    //                 }

                    
    //             })

    //             const totalScore = evalutionArray.reduce((acc,cur) =>{
    //                 return acc + cur.code + cur.plan + cur.design + cur.presentation + cur.communication
    //             },0)

    //             scoreList.push({
    //                 'student': student.name,
    //                 totalScore
    //             })
    //         }

    //     })


    // }


    const loadStudents = () =>{
        if (typeof students !== 'undefined' && students.length === 0){
            return(
                <></>
            )
        }else{
            return(
                <div className='students-box'>
                    {students.slice(0,3).map((student, index) =>{
                        return(
                            <li style={{opacity: index === 0 && open1 ? 1 : index !== 0 ? 1 : 0}} key={index}>
                                {/* <p className='player-number'>{index + 1}</p> */}
                                <div className='player-number1'>
                                    <img src={index === 0 ? number1 : index === 1 ? number2 : index ===2 ? number3 : number1}></img>
                                </div>
                                <p className='player-name'>{student.name}</p>
                                <p  className='player-score'>{student.totalScore}</p>
                            </li>
                        )
                    })}
                    
                        {students.slice(0,1).map((student, index) =>{
                            return(
                                <div style={{display: open1 ? 'block':'none'}}  key={index} className='balloon'>
                                    <p>{student.name}</p>
                                </div>
                            )
                        })}
                    
                </div>
            )
        }
    }
    const loadStudents2 = () =>{
        if (typeof students2 !== 'undefined' && students2.length === 0){
            return(
                <></>
            )
        }else{
            return(
                <div className='students-box'>
                    {students2.slice(0,3).map((student, index) =>{
                        return(
                            <li style={{opacity: index === 0 && open2 ? 1 : index !== 0 ? 1 : 0}} key={index}>
                                {/* <p className='player-number'>{index + 1}</p> */}
                                <div className='player-number1'>
                                    <img src={index === 0 ? number1 : index === 1 ? number2 : index ===2 ? number3 : number1}></img>
                                </div>
                                <p className='player-name'>{student.name}</p>
                                <p  className='player-score'>{student.totalScore}</p>
                            </li>
                        )
                    })}
                    {students2.slice(0,1).map((student, index) =>{
                            return(
                                <div style={{display: open2 ? 'block':'none'}} key={index} className='balloon grade'>
                                    <p>{student.name}</p>
                                </div>
                            )
                        })}
                    
                </div>
            )
        }
    }

    const handleOpen1 = () =>{
        setOpen1(true)
    }
    const handleOpen2 = () =>{
        setOpen2(true)
    }
    const handleOpen3 = () =>{
        toggle();
        setOpen3(!open3)
    }
    return (
        <div className='ranking-wrap'>
         <div ref={cursor2} className='cursor2'></div>
            <div style = {{display : open3 ? 'none': 'block'}} className='ranking-background'>
                <div className='ranking-square'></div>
            </div>
            {/* <h1 className='ranking-title'>今までの合計点数ランキング</h1> */}
            <div onClick={() => handleOpen3()} className='ranking-event'>
                スペシャルイベント
            </div>
            <div style={{opacity : open3 ? 1 : 0}} className='ranking-container'>
                
                <div className='ranking-container-box'>
                    <h1 className ='ranking-header'>一年生</h1>
                    {/* <h2 className='ranking-score'>今までの合計点数ランキング</h2> */}
                    <div className='ranking-players'>
                        <ul className='players'>
                          {loadStudents()}
                        </ul>
                    </div>
                    <div onClick={handleOpen1} className='ranking-team'>発表</div>
                <div style={{opacity : open1 ? 1 : 0, zIndex : open1 ? 2: 0}} className='congra'>
                    <div className='ranking-congra'>
                        <img src={gun}></img>
                    </div>
                    <div className='ranking-congra'>
                        <img src={gun}></img>
                    </div>
                </div>

                </div>
                <div className='ranking-container-box grade2'>
                    <h1 className='ranking-header'>二年生</h1>
                    {/* <h2 className='ranking-score'>今までの合計点数ランキング</h2> */}
                    

                    <div className='ranking-players'>
                        <ul className='players'>
                            {loadStudents2()}
                        </ul>
                    </div>
                    <div onClick={handleOpen2} className='ranking-team'>発表</div>
                    <div style={{opacity : open2 ? 1 : 0, zIndex : open2 ? 2: 0}} className='congra'>
                        {/* class grade2 */}
                        <div className='ranking-congra'>
                            <img src={gun}></img>
                        </div>
                        <div className='ranking-congra'>
                            <img src={gun}></img>
                        </div>
                    </div>

                </div>
            
            <div style={{opacity : open2 ? 1: 0}} className='ranking-congra-middle'>
                <img src={congra}></img>
            </div>
                <Particles
                    id="tsparticles"
                    
                    options={{
                        background: {
                        
                        },
                        fpsLimit: 60,
                        interactivity: {
                        events: {
                            onClick: {
                            enable: false,
                            mode: "push",
                            },
                            onHover: {
                            enable: true,
                            mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                            },
                            push: {
                            quantity: 4,
                            },
                            repulse: {
                            distance: 100,
                            duration: 0.4,
                            },
                        },
                        },
                        particles: {
                            
                        color: {
                            
                        },
                        
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 800,
                            },
                            value: 15,
                        },
                        opacity: {
                            value: 0.7,
                        },
                        shape: {
                            type: ["image"],
                            
                            image: [
                                {
                                    // any path or url to your image that will be used as a particle
                                src: flower,
                                // the pixel width of the image, you can use any value, the image will be scaled
                                width: 100,
                                // the pixel height of the image, you can use any value, the image will be scaled
                                height: 100,
                                // if true and the image type is SVG, it will replace all the colors with the particle color
                                replaceColor: false ,
                                },
                                {
                                    // any path or url to your image that will be used as a particle
                                src: flower2,
                                // the pixel width of the image, you can use any value, the image will be scaled
                                width: 100,
                                // the pixel height of the image, you can use any value, the image will be scaled
                                height: 100,
                                // if true and the image type is SVG, it will replace all the colors with the particle color
                                replaceColor: false ,
                                },
                                {
                                    // any path or url to your image that will be used as a particle
                                src: flower3,
                                // the pixel width of the image, you can use any value, the image will be scaled
                                width: 100,
                                // the pixel height of the image, you can use any value, the image will be scaled
                                height: 100,
                                // if true and the image type is SVG, it will replace all the colors with the particle color
                                replaceColor: false ,
                                },
                                {
                                    // any path or url to your image that will be used as a particle
                                src: flower4,
                                // the pixel width of the image, you can use any value, the image will be scaled
                                width: 100,
                                // the pixel height of the image, you can use any value, the image will be scaled
                                height: 100,
                                // if true and the image type is SVG, it will replace all the colors with the particle color
                                replaceColor: false ,
                                },
                                {
                                    // any path or url to your image that will be used as a particle
                                src: flower5,
                                // the pixel width of the image, you can use any value, the image will be scaled
                                width: 100,
                                // the pixel height of the image, you can use any value, the image will be scaled
                                height: 100,
                                // if true and the image type is SVG, it will replace all the colors with the particle color
                                replaceColor: false ,
                                },
                            ],
                            
                        },
                        size: {
                            random: true,
                            value: 20,
                        },
                        },
                        detectRetina: true,
                    }}
                />
            </div>

        </div>
    )
}

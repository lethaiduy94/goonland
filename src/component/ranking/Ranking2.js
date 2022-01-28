import React, {useState, useEffect} from 'react'
import Particles from "react-tsparticles";
import axios from 'axios'
import '../../scss/raking.scss'
import flower from '../../asset/flower/5_flower_left.svg'
import flower2 from '../../asset/flower/5_flower_right.svg'
import flower3 from '../../asset/leaf/5_leaf_left.svg'
import flower4 from '../../asset/leaf/5_leaf_right.svg'
import flower5 from '../../asset/leaf/5_leaf_right2.svg'
//function
import {compareTotal} from '../../function/Compare'

export default function Ranking() {
    //tabs state
    //useRef
    const [students, setStudents] = useState([])
    const [students2, setStudents2] = useState([])
    useEffect(() => {
        const fetchData = async () =>{

            try {
                const studentData = await axios({
                    method:'GET',
                    url:`https://quiet-sands-58722.herokuapp.com/students?student_number_contains=21aw`
                })
                
                const scoreSort = studentData.data.sort(compareTotal)
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
                
               const scoreSort2 = studentData.data.sort(compareTotal)
                    setStudents2(scoreSort2)

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
                            <li key={student.id}>
                                <p className='player-number'>{index + 1}</p>
                                <p className='player-name'>{student.name}</p>
                                <p className='player-score'>{student.total}</p>
                            </li>
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
                            <li key={student.id}>
                                <p className='player-number'>{index + 1}</p>
                                <p className='player-name'>{student.name}</p>
                                <p className='player-score'>{student.total}</p>
                            </li>
                        )
                    })}
                </div>
            )
        }
    }
    return (
        <div className='ranking-wrap'>
            <h1 className='ranking-title'>今までの合計点数ランキング</h1>
            <div className='ranking-container'>
                
                <div className='ranking-container-box'>
                    <h1 className ='ranking-header'>LEADER BOARD</h1>
                    <h2 className='ranking-score'>今までの合計点数ランキング</h2>
                    <div className='ranking-players'>
                        <ul className='players'>
                          {loadStudents()}
                        </ul>
                    </div>
                    <div className='ranking-team'>一年生</div>

                </div>
                <div className='ranking-container-box'>
                    <h1 className='ranking-header'>LEADER BOARD</h1>
                    <h2 className='ranking-score'>今までの合計点数ランキング</h2>
                    

                    <div className='ranking-players'>
                        <ul className='players'>
                            {loadStudents2()}
                        </ul>
                    </div>
                    <div className='ranking-team'>二年生</div>


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

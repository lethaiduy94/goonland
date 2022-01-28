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
import {compareCode, comparePresentation, compareCommunication, compareDesign, comparePlan, compareTotal} from '../../function/Compare'
const tabs = ['plan','presentation', 'code', 'design', 'communication', 'total'];
export default function Ranking() {
    //tabs state
    const [state, setstate] = useState('plan')
    const [state2, setstate2] = useState('plan')
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
                
                if(state === 'plan'){
                    const scoreSort = studentData.data.sort(comparePlan)
                    setStudents(scoreSort)
                }
                if(state === 'presentation'){
                    const scoreSort = studentData.data.sort(comparePresentation)
                    setStudents(scoreSort)
                }
                if(state === 'code'){
                    const scoreSort = studentData.data.sort(compareCode)
                    setStudents(scoreSort)
                }
                if(state === 'design'){
                    const scoreSort = studentData.data.sort(compareDesign)
                    setStudents(scoreSort)
                }
                if(state === 'communication'){
                    const scoreSort = studentData.data.sort(compareCommunication)
                    setStudents(scoreSort)
                }
                if(state === 'total'){
                    const scoreSort = studentData.data.sort(compareTotal)
                    setStudents2(scoreSort)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

    }, [state])

    useEffect(() => {
        const fetchData2 = async () =>{

            try {
                const studentData = await axios({
                    method:'GET',
                    url:`https://quiet-sands-58722.herokuapp.com/students?student_number_contains=20aw`
                })
                
                if(state2 === 'plan'){
                    const scoreSort2 = studentData.data.sort(comparePlan)
                    setStudents2(scoreSort2)
                }
                if(state2 === 'presentation'){
                    const scoreSort2 = studentData.data.sort(comparePresentation)
                    setStudents2(scoreSort2)
                }
                if(state2 === 'code'){
                    const scoreSort2 = studentData.data.sort(compareCode)
                    setStudents2(scoreSort2)
                }
                if(state2 === 'design'){
                    const scoreSort2 = studentData.data.sort(compareDesign)
                    setStudents2(scoreSort2)
                }
                if(state2 === 'communication'){
                    const scoreSort2 = studentData.data.sort(compareCommunication)
                    setStudents2(scoreSort2)
                }
                if(state2 === 'total'){
                    const scoreSort2 = studentData.data.sort(compareTotal)
                    setStudents2(scoreSort2)
                }

            } catch (error) {
                console.log(error)
            }
        }

        fetchData2()

    }, [state2])

    const handleClick = (tab) =>{
        

        setstate(tab)
    }
    const handleClick2 = (tab) =>{
        

        setstate2(tab)
    }

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
                                <p className='player-score'>{state === 'plan' ? student.total_scores.plan:
                                                            state === 'presentation' ? student.total_scores.presentation:
                                                            state === 'code' ? student.total_scores.code:
                                                            state === 'design' ? student.total_scores.design:
                                                            state === 'communication' ? student.total_scores.communication :
                                                            state === 'total' ? student.total : student.total_scores.plan
                                }</p>
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
                                <p className='player-score'>{state2 === 'plan' ? student.total_scores.plan:
                                                            state2 === 'presentation' ? student.total_scores.presentation:
                                                            state2 === 'code' ? student.total_scores.code:
                                                            state2 === 'design' ? student.total_scores.design:
                                                            state2 === 'communication' ? student.total_scores.communication :
                                                            state2 === 'total' ? student.total : student.total_scores.plan
                                }</p>
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
                    <div style={{background: '#f29700'}} className='ranking-team'>一年生</div>
                    <h1 className='ranking-header'>LEADER BOARD</h1>
                    <div className='ranking-btns'>
                        {tabs.map((tab, index) =>{
                            return(
                                <button 
                                    style={state === tab ? {
                                        background : '#005bea'
                                        
                                    }: {
                                        background : 'gray'
                                    }}
                                    key={index}
                                    onClick={() => handleClick(tab)}
                                >
                                {tab === 'plan' ? '企画力': tab === 'presentation' ? 'プレゼンテーション力': tab === 'code' ? '実装力': tab === 'design' ? 'デザイン力' : tab === 'communication' ? 'コミュニケーション力' :'トータル'}
                                </button>
                            )
                        })}
                    </div>

                    <div className='ranking-players'>
                        <ul className='players'>
                            {loadStudents()}
                        </ul>
                    </div>
                </div>
                <div className='ranking-container-box'>
                    <div style={{background: '#009fe9'}} className='ranking-team'>二年生</div>
                    <h1 className='ranking-header'>LEADER BOARD</h1>
                    
                    <div className='ranking-btns'>
                        {tabs.map((tab, index) =>{
                            return(
                                <button 
                                    style={state2 === tab ? {
                                        background : '#005bea'
                                        
                                    }: {
                                        background : 'gray'
                                    }}
                                    key={index}
                                    onClick={() => handleClick2(tab)}
                                >
                                {tab === 'plan' ? '企画力': tab === 'presentation' ? 'プレゼンテーション力': tab === 'code' ? '実装力': tab === 'design' ? 'デザイン力' : tab === 'communication' ? 'コミュニケーション力' :'トータル'}
                                </button>
                            )
                        })}
                    </div>

                    <div className='ranking-players'>
                        <ul className='players'>
                            {loadStudents2()}
                        </ul>
                    </div>
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

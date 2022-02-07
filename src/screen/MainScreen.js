import React ,{useRef, useEffect, createRef, useState} from 'react'
import '../css/mainscreen.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Particles from "react-tsparticles";
import useWindowDimensions from '../function/useWindowDimensions'
//import audio
// import audio from '../asset/audio/background-audio.mp3'
import audio from '../asset/audio/background-audio3.mp3'
import {useAudio } from '../function/Audio'
import areaAudio from '../asset/audio/index';
//images

import images from "../asset/images/index";
import areaBackground  from '../asset/area-background/index';

import flower from '../asset/flower/5_flower_left.svg'
import flower2 from '../asset/flower/5_flower_right.svg'
import flower3 from '../asset/leaf/5_leaf_left.svg'
import flower4 from '../asset/leaf/5_leaf_right.svg'
import flower5 from '../asset/leaf/5_leaf_right2.svg'
import logo from '../asset/logo/logo.png'
import playBtn from '../asset/images/play.svg';
import pauseBtn from '../asset/images/pause.svg';
import bench from '../asset/images/bench.svg';
import foutain from '../asset/images/foutain.svg';
import light from '../asset/images/light.svg'
//components
import Area from '../component/Area';
import Maps from '../component/Maps';
import Visitor from '../component/mainscreen/Visitor';
import ButterFly from '../component/mainscreen/ButterFly';
//Gsap
import {gsap} from "gsap";


const areas = ["学ぶ","食べる","着飾る","暮らす","遊ぶ","伝える"];
const mapWidth = 3;
export default function MainScreen() {
    const [state, setState] =useState(false);
    const [playing, toggle] = useAudio(audio);
    const [currenting, setCurrenting] = useState(7);
    const [students, setStudents] = useState([]);
    const {  width } = useWindowDimensions();

    const [date, setDate] =useState(0);
    const [month, setMonth] =useState(0);
    const [hours, setHours] =useState(0);
    const [minutes, setMinutes] =useState(0);
    const [seconds, setSeconds] =useState(0);

    const cursor = useRef(null)
    //useEffect
    useEffect(() =>{

        document.addEventListener('mousemove', handleMouse)
        function handleMouse(e){
            var x = e.clientX;
            var y = e.clientY;
            cursor.current.style.left = x + 30 +  'px';
            cursor.current.style.top = y + 30 + 'px';
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
                    url:`https://quiet-sands-58722.herokuapp.com/students`
                })
                setStudents(studentData.data)
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

    const tl = useRef();

    const  mainScreen = useRef(null);
    const  mainContainer = useRef(null);
    
    // const q = gsap.utils.selector(mainScreen);
    

    // tao ref cho cai component
    const mapItem = useRef([]);
    mapItem.current = areas.map((element, i) => mapItem.current[i] ?? createRef());
    //audio play
    //animation with gsap
    useEffect(() => {
                tl.current = gsap.timeline()
                    .to(mainScreen.current,1,{width:'100vw', height:'100vh'})
    }, [])



    const i2xy = (index) =>{
        return{
            x : index % mapWidth,
            y : Math.floor(index/mapWidth)
        }
    }
    const mapMove = (index) =>{


        
        const xy = i2xy(index)
        
        gsap.to(mainScreen.current,1,{
            x : -xy.x * 100 + 'vw',
            y : -xy.y * 100 + 'vh',
        })
       
        if(mainScreen.current.style.width === '100vw' && mainScreen.current.style.height === '100vh'){
            gsap.to(mainScreen.current,1,{width: 100*3 + 'vw', height: 100*2 + 'vh',});
        }
        
        for(let i = 0; i < mapItem.current.length; i++){

            // mapItem.current[i].current.style.width = 100 + 'vw';
            // mapItem.current[i].current.style.height = 100 + 'vh';
            gsap.to(mapItem.current[i].current,1,{
                width: 100 + 'vw',
                height: 100 + 'vh',
            })
        }

        //map move
        
        setState(true)
        setCurrenting(index)
    }

    //map zoomOut
    const zoomOut = ()=>{
       
        if(mainScreen.current.style.width === '300vw' && mainScreen.current.style.height === '200vh')
        gsap.to(mainScreen.current,1,{width: 100 + 'vw', height: 100 + 'vh'});
        
        for(let i = 0; i < mapItem.current.length; i++){

            
            gsap.to(mapItem.current[i].current,1,{
                width: 100/3 + 'vw',
                height: 100/2 + 'vh',
            })
        }
        
        gsap.to(mainScreen.current,1,{
            x : 0 + 'vw',
            y : 0 + 'vh',
        })
        setState(false)
        
    }

    //time

    useEffect(() => {
        const watch = setInterval(() => {

            var now = new Date();

            var hours = conver(now.getHours());
            var minutes = conver(now.getMinutes());
            var seconds = conver(now.getSeconds());
             setDate(now.getDate());
             setMonth(now.getMonth());
             setHours(hours);
             setMinutes(minutes);
             setSeconds(seconds);

            
            
        }, 1000);
        function conver (x){
            if(x < 10){
                return `0${x}`
            }else{
                return `${x}`
            }
        }
        return() =>{
            clearInterval(watch)
        }
    }, [])
 

    
    return (
        
        
        <div ref={mainContainer} className='container'>
          
              
                   <div style={{backgroundColor: hours > 7 && hours < 16 ? '#bbeda0' : '#08044b',
                                    boxShadow: hours > 7 && hours < 16 ? '0px 0px 0 5000px #bbeda0' : '0px 0px 0 5000px #08044b' }} className='container-filter'>

                </div>
              
          
          <div ref={cursor} className='cursor'></div>
            {/* logo */}
            {state && <div className='backBtn' onClick={zoomOut}>
                <div className='backBtn-box'><img className='logo' src={logo}></img></div>
                {/* <div className='backBtn-shadow'></div> */}
            </div>}
            {!state && <div onClick={toggle} className='audio-background'>
                            <img className='audio-btn' src={playing ? pauseBtn : playBtn}></img>
                        </div>}
            {!state && <div className='bench'>
                <img src={bench}></img>
                <img src={bench}></img>
            </div>}

            {!state && <div className='foutain'>
                <img src={foutain}></img>
            </div>}
            {!state && <div  className='light'>
                <div style={{display :hours > 7 && hours < 16 ? 'none' : 'block'}} className='light-shadow'></div>
                <img src={light}></img>
                <img src={light}></img>
            </div>}
            {!state &&<div className='light light2'>
                <div style={{display :hours > 7 && hours < 16 ? 'none' : 'block'}} className='light-shadow'></div>
                <img src={light}></img>
                <img src={light}></img>
            </div>}
            {!state &&<div className='light light3'>
                <div style={{display :hours > 7 && hours < 16 ? 'none' : 'block'}} className='light-shadow'></div>
                <img src={light}></img>
                <img src={light}></img>
            </div>}
            <div style={{display : state ? "none": "block",}} className='goon'>
            <p style={{backgroundColor:hours > 7 && hours < 16 ? '#0f360f' : '#08044b',
                        textShadow:hours > 7 && hours < 16 ? ' 2px 3px 4px #baeda2' : ' 2px 3px 4px #85a788' }}>GO ON LAND</p></div>
            {/* 6 area */}
            <ButterFly top = {0} left  = {0} z ={ 400} />
            <ButterFly top = '50%' left  = '50%' z ={600}  rotateY = {180} rotateX = {0}/>
            <ButterFly top = '25%' left = '70%' z = { 300} rotateY = {0} rotateX={ 50}/>
            <ButterFly top = '55%' left = '70%' z = { 500} rotateY = {0} rotateX={ 0}/>
            <ButterFly top = '25%' left = '20%' z = { 400} rotateY = {180} rotateX={ 50}/>
            <ButterFly top = '35%' left = '40%' z = { 400} rotateY = {0} rotateX={ 0}/>
            <ButterFly top = '15%' left = '30%' z = { 400} rotateY = {180} rotateX={ 50}/>
            
            <div ref={mainScreen} className='main-screen'>
            
                {
                    areas.map((area, index) =>{
                        return(
                            
                                <Area 
                                    state ={state} 
                                    mapMove = {mapMove} 
                                    inerRef={mapItem.current[index]} 
                                    key={index}  
                                    area = {area} 
                                    image = {images[index]} 
                                    index = {index}
                                    current = {currenting}
                                    data = {students}
                                    width = {width}
                                    areaBackground = {areaBackground[index]}
                                    areaAudio={areaAudio[index]}
                                    hours = {hours}
                                    >
                                </Area>
                            
                        )
                    })
                }
            </div>

            {/* map */}

            {state && 
            
                <div className='map-container'>
                    <div className='map'>
                        {
                            images.map((image, index) =>{
                                return(
                                    <Maps current = {currenting} mapMove ={mapMove} key={index} index={index} image ={image} ></Maps>
                                )
                            })
                        }
                    </div>
                </div>
            }

            {/* 来場者の数 */}
            {
                !state && <Visitor date= {date} month = {month} hours = {hours} minutes = {minutes} seconds = {seconds} />
            }

            
            {/* Ranking */}
            {
                !state && 
                <div>
                    <Link onClick={() => toggle} className='ranking' to = {`./ranking`} >
                    </Link>
                </div>
            }
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
                            value: 10,
                        },
                        opacity: {
                            value: 0.6,
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
        
    )
}

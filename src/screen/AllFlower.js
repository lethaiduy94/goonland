import React, {useState, useEffect} from 'react'
import Particles from "react-tsparticles";
import axios from 'axios'
import '../scss/allflower.scss';
//image
import background from '../asset/images/cloud-background3.png'
import Flower from '../component/Flower';
import Student2 from '../component/allflower/Student2';
import flower from '../asset/flower/5_flower_left.svg'
import flower2 from '../asset/flower/5_flower_right.svg'
import flower3 from '../asset/leaf/5_leaf_left.svg'
import flower4 from '../asset/leaf/5_leaf_right.svg'
import flower5 from '../asset/leaf/5_leaf_right2.svg'
import ButterFly from '../component/mainscreen/ButterFly';
//function

import {compareBooth} from '../function/Compare'

export default function AllFlower() {
    const [students, setStudents] = useState([])
    const [stateAllFlower, setStateAllFlower] = useState(true)
   
   

    useEffect(() => {
        const fetchData = async () =>{

            try {
                const studentData = await axios({
                    method:'GET',
                    url:`https://quiet-sands-58722.herokuapp.com/students`
                })
                const scoreSort = studentData.data.sort(compareBooth)
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



    return (
        <div className='allflower-wrap'>
            <div className='allflower-background'>
                <img src={background}></img>
            </div>
            <div className='allflower-butterfly'>
            <ButterFly top = {0} left  = {0} z ={ 400} />
            <ButterFly top = '75%' left  = '25%' z ={ 700} />
            <ButterFly top = '45%' left  = '35%' z ={ 800} />
            <ButterFly top = '50%' left  = '50%' z ={600}  rotateY = {180} rotateX = {0}/>
            <ButterFly top = '25%' left = '70%' z = { 300} rotateY = {0} rotateX={ 50}/>
            </div>
            <h1 className='allflower-title'>そだてて!GO ON</h1>
            <div className='allflower-mess'>
            制作展で学生が企業様にプレゼンテーションすると、
            「企画力」「UIデザイン力」「プレゼンテーション力」「実装力」「ビジネスマナー」で
            評価されます。
            多くの人に評価されるほど、ひとりひとりの花が咲きます。
            学生の検討をご覧ください！
            </div>
            <div className='allflower-flowers'>
            
            {
                typeof students !== 'undefined' && students.length !== 0 && 
                <>
                    {students.map((student, index) =>{
                        return(
                            <Student2 state = {stateAllFlower} data ={student} />
                        )
                    })}
                </>
            }
            </div>

        </div>
    )
}

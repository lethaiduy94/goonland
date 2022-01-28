import React, { useState, useEffect, useRef} from 'react';
import '../scss/topranking.scss'
//img flower
import flower1 from '../asset/flower/5_flower_left.svg'
import flower2 from '../asset/flower/5_flower_right.svg'
import flower3 from '../asset/leaf/5_leaf_left.svg'
import flower4 from '../asset/leaf/5_leaf_right.svg'
import flower5 from '../asset/leaf/5_leaf_right2.svg'
import total from '../asset/images/zentai.svg'
import axios from 'axios'
//image
import congra from '../asset/gif/7E2b.gif'
import congraBackground from '../asset/gif/2yqT.gif'
//function compare 
import {compareCode, comparePresentation, compareCommunication, compareDesign, comparePlan, compareTotal} from '../function/Compare'
const tabs = ['plan','presentation', 'code', 'design', 'communication', 'total'];
export default function TopRanking() {

    const [state, setstate] = useState('plan')
    const [gradeOne, setGradeOne] = useState([])
    const [gradeTwo, setGradeTwo] = useState([])

    const modal = useRef(null)
    useEffect(() => {
        
        const fetchData = async () =>{

            try {
                const studentData = await axios({
                    method:'GET',
                    url:`https://quiet-sands-58722.herokuapp.com/students?student_number_contains=20aw`
                })
                if(state == 'plan'){
                    const scoreSort = studentData.data.sort(comparePlan)
                    setGradeOne(scoreSort[0])
                }
                if(state == 'presentation'){
                    const scoreSort = studentData.data.sort(comparePresentation)
                    setGradeOne(scoreSort[0])
                }
                if(state == 'code'){
                    const scoreSort = studentData.data.sort(compareCode)
                    setGradeOne(scoreSort[0])
                }
                if(state == 'design'){
                    const scoreSort = studentData.data.sort(compareDesign)
                    setGradeOne(scoreSort[0])
                }
                if(state == 'communication'){
                    const scoreSort = studentData.data.sort(compareCommunication)
                    setGradeOne(scoreSort[0])
                }
                if(state == 'total'){
                    const scoreSort = studentData.data.sort(compareTotal)
                    setGradeOne(scoreSort[0])
                }
                const studentData2 = await axios({
                    method:'GET',
                    url:`https://quiet-sands-58722.herokuapp.com/students?student_number_contains=21aw`
                })
                if(state == 'plan'){
                    const scoreSort = studentData2.data.sort(comparePlan)
                    setGradeTwo(scoreSort[0])
                }
                if(state == 'presentation'){
                    const scoreSort = studentData2.data.sort(comparePresentation)
                    setGradeTwo(scoreSort[0])
                }
                if(state == 'code'){
                    const scoreSort = studentData2.data.sort(compareCode)
                    setGradeTwo(scoreSort[0])
                }
                if(state == 'design'){
                    const scoreSort = studentData2.data.sort(compareDesign)
                    setGradeTwo(scoreSort[0])
                }
                if(state == 'communication'){
                    const scoreSort = studentData2.data.sort(compareCommunication)
                    setGradeTwo(scoreSort[0])
                }
                if(state == 'total'){
                    const scoreSort = studentData2.data.sort(compareTotal)
                    setGradeTwo(scoreSort[0])
                }

                console.log(gradeOne,gradeTwo)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
        // const realTimeId = setInterval(() => {
        //     fetchData()
                
        //     }, 10000);
        //     return () => {
        //         clearInterval(realTimeId)
        //     }
    }, [state])

    const handleClick = (tab)=>{
        setstate(tab)
        modal.current.style.display = 'block';
    }
    const modalClose = () =>{
        modal.current.style.display = 'none';

    }
    const loadData= () =>{
        if(typeof gradeOne !== 'undefined' && gradeTwo !== 'undefined' && gradeTwo.length == 0 && gradeOne.length == 0){
            return(<></>)
        }else{
            return(
            <>
                <div className='top-box grade-one'>{gradeOne.name}</div>
                <div className='top-box grade-two'>{gradeTwo.name}</div>

            </>

            )
        }
    }
  return (
    <div className='top-wrap'>
        <h1 className='top-title'>三日間 疲れ様です。</h1>
        <div className='top-btns'>
            {tabs.map((tab, index) =>{
                return(
                    <div key={tab} className='btn' onClick={() => handleClick(tab)}>
                    
                        <img
                            src={tab === 'plan' ? flower5 : 
                                tab === 'presentation' ? flower2:
                                tab === 'code' ? flower1 :
                                tab === 'design' ? flower4 :
                                tab === 'communication' ? flower3 :
                                tab === 'total' ? total : flower5 }
                        >
                        
                        </img>
                        <p>{
                            tab === 'plan' ? '企画力' : 
                                tab === 'presentation' ? 'プレゼンテーション力':
                                tab === 'code' ? '実装力' :
                                tab === 'design' ? 'デザイン力' :
                                tab === 'communication' ? 'ビジネスマナー力' :
                                tab === 'total' ? 'トータル' : '企画力' 
                        }</p>
                    </div>
                )
            })}
        </div>
        <div ref={modal} className='top-modal-wrap'>
            <div className='top-modal'>
                <div onClick={modalClose} className='top-modal-close'>X</div>
                <div className='top-congra'>
                    <img src={congra}></img>
                </div>
            {loadData()}
            </div>
        </div>
    </div>
  )
}

import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Visitor({ date, month, hours, minutes, seconds}) {
    
    const [visitors, setVisitors] = useState(0);
    useEffect(() => {
        const fetchData = async () =>{
            try {
                const visitorData = await axios({
                    method: 'GET',
                    url: `https://quiet-sands-58722.herokuapp.com/evalutions/count`
                })

                setVisitors(visitorData.data)
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
    //time


    

    
    return (
        <div className='victor'>
            <div className='victor-content'>
                <p>学生がプレゼンした回数:<span>{visitors}</span>回</p>
                <p>本日<span>{month + 1}</span>月<span>{date}</span>日 <span>{hours}:{minutes}:{seconds}</span></p>
                <p>プレゼン頑張ってください！！</p>
            </div>
        </div>
    )
}

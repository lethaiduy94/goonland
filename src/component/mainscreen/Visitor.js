import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Visitor() {

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
        // const realTimeId = setInterval(() => {
        // fetchData()
            
        // }, 10000);
        // return () => {
        //     clearInterval(realTimeId)
        // }
    }, [])
    
    return (
        <div className='victor'>
            <p>来場者:{visitors}</p>
        </div>
    )
}

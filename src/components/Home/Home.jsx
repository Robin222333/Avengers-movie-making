/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {
    const [allActors, setAllActors] = useState([])
    const [selectedActors, setSelectedActors] = useState([])
    const [remaining, setRemaining] = useState(20000)
    const [totalCost, setTotalCost] = useState(0)
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    },[])
    // console.log(allActors)

    
    const handleSelectActors = (actor) =>{
        const isExist = selectedActors.find(item => item.id === actor.id)
        let count = actor.salary;
        if(isExist){
            return alert('already here')
        }
        else{
            selectedActors.forEach(item => {
                count = count + item.salary
            })
            const remaining = 20000 - count;
            if(remaining < 0){
                return alert('Money finished')
            }
            else{
            setTotalCost(count)
            setRemaining(remaining)
            setSelectedActors([...selectedActors, actor])
            }
        }
        
    }
    // console.log(selectedActors)

    return (
        <div className='container'>
            <div className='home-container'>
                <div className="card-container">
                    {
                        allActors.map(actor => (
                            <div className="card">
                            <div className="card-img">
                                <img className='photo' src={actor.image} alt="" />
                            </div>
                            <h3 key={actor.id}>{actor.name}</h3>
                            <div className="card-info">
                                <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, temporibus?</small></p>
                            </div>
                            <div className="salary-title">
                                <p>salary: {actor.salary} $</p>
                                <p>{actor.role}</p>
                            </div>
                            <button className='btn' onClick={() => handleSelectActors(actor)}>Select</button>
                        </div>
                        ))
                    }
                </div>
                <div className="cart">

                   <Cart selectedActors={selectedActors}
                   totalCost={totalCost}
                   remaining={remaining}
                   ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;
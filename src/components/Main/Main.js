import React from 'react';
import { useEffect, useState } from 'react';
import data from '../../data/Data.json'
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
const Main = () => {
    const [course, setCourse] = useState([])
    const [cart,setCart] = useState([])
    useEffect(() => {
        setCourse(data);
    }, [])
    // console.log(course);
    const handleAddCart = (data)=>{
        const newData = [...cart,data];
        setCart(newData)
    }
    return (
        <div className="main container">
                <h2>React Online Course Simple Project</h2>
                <Cart cart={cart}></Cart>
            <div className="row">
                {course.map(singleCourse => <Course handleAddCart={handleAddCart} course={singleCourse}></Course>)}
            </div>
        </div>
    );
};

export default Main;
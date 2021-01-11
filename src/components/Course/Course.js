import React from 'react';
import './Course.css'

const Course = (props) => {
    const {course_img, course_name, first_name, last_name,course_price} = props.course
    const handleAddCart = props.handleAddCart
    return (
        <div className="col-xs-12 col-sm-4 col-md-3">
            <div className="card course rounded">
                <img src={course_img} alt="" />
                <div className="card-meta-data">
                    <h3 className="card-title">{course_name}</h3>
                    <p className="text-left">{first_name + " " + last_name}</p>
                </div>
                <div className="course-btn">
                <span>${course_price} </span><button  onClick={()=>handleAddCart(props.course)} className="btn btn-success">Enrol Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;
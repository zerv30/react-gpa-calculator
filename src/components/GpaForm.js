import React, { useState, useEffect } from 'react'
import FormItem from './FormItem'
// import { stat } from 'fs';
function GpaForm(props) {
    const [gradeArray, setGradeArray] = useState([])
    const [formItems, setFormItems] = useState([])


    let addNewCourse = () => {
        let index = formItems.length
        let getData = (data) => {
            let updatedGradeArray = [...gradeArray]
            updatedGradeArray[index] = data
            setGradeArray(updatedGradeArray)

        }
        let newElement = < FormItem key={index} sendGradePoints={getData} />
        let updatedFormItems = [...formItems, newElement]
        setFormItems(updatedFormItems)

    }
    let calcGPA = () => {
        let totalGradePoints = 0;
        let totalUnits = 0
        gradeArray.forEach(element => {
            if (element) {
                totalGradePoints += element.gradePoints * element.units
                totalUnits += element.units
            }

        });
        return totalUnits ? (totalGradePoints / totalUnits).toFixed(2) : 0.00
    }

    return (
        <div className="row gpa-form">
            <div className="col-12">

                <div className="row">
                    <span className="col">Course</span>
                    <span className="col">Grades</span>
                    <span className="col">Units</span>
                </div>
            </div>
            <form className="col-12 ">
                {formItems}

            </form>
            <button className="btn badge-primary mr-auto ml-auto mb-3" onClick={addNewCourse} >Add new course</button>
            <div className="col-12 h1">Gpa: {calcGPA()}</div>
        </div>
    )
    // }

}
export default GpaForm;
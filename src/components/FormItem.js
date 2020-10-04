import React, { useEffect, useState } from 'react'


function FormItem(props) {
    const [gradePoints, setGradePoints] = useState('4')
    const [units, setUnits] = useState(0)

    useEffect(() => {
        sendGradePoints()
    }, [units, gradePoints]);


    let updateGradePoints = (event) => {
        setGradePoints(event.target.value)

        // this.setState({gradePoints:event.target.value},()=>{
        //     this.sendGradePoints()
        // });


    }
    let updateUnits = (event) => {
        let regex = new RegExp('^[0-9]+$|^$|^\s$')
        if (regex.test(event.target.value)) {
            console.log(units)
            setUnits(Number(event.target.value))

        }
    }
    let sendGradePoints = () => {
        let data = {
            gradePoints: gradePoints,
            units: units
        }
        props.sendGradePoints(data)
    }
    return (
        <div className="row  form-group">
            <div className="col">
                <input className="form-control" />
            </div>

            <span className="col">
                <select onChange={updateGradePoints} className="form-control" name="Grades">
                    <option value="4.0">A+</option>
                    <option value="4.0">A</option>
                    <option value="3.7">A-</option>
                    <option value="3.3">B+</option>
                    <option value="3.0">B</option>
                    <option value="2.7">B-</option>
                    <option value="2.3">C+</option>
                    <option value="2.0">C</option>
                    <option value="1.7">C-</option>
                    <option value="1.3">D+</option>
                    <option value="1.0">D</option>
                    <option value="0.7">D-</option>
                    <option value="0.0">F</option>
                </select>
            </span>
            <div className="col">
                <input name="units" onChange={updateUnits} className="form-control" value={units} min="0" />
            </div>
        </div>
    )
    // }
}
export default FormItem;
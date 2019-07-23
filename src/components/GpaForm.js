import React from 'react'
import FormItem from './FormItem'
// import { stat } from 'fs';
class GpaForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            gradeArray:[],
            formItems:[]
        }
    }
    
    addNewCourse = ()=>{
        let index = this.state.formItems.length 
            let getData = (data)=>{
                let newGradeArray = [...this.state.gradeArray]
                newGradeArray[index] = data
                this.setState({
                    gradeArray:newGradeArray
                })
            }
        this.setState((state)=>{
            let newElement = <FormItem sendGradePoints={getData} />  
            let formItems= [...this.state.formItems,newElement]
            return{
                ...state,formItems
            }
        })
    }
    calcGPA = ()=>{
        let totalGradePoints = 0;
        let totalUnits = 0
        totalGradePoints = this.state.gradeArray.reduce((total,current)=> total+( current.gradePoints* current.units),0)
        totalUnits  = this.state.gradeArray.reduce((total,current)=> total+current.units,0)
        return totalUnits ? (totalGradePoints / totalUnits).toFixed(2) : 0.00
    }
    componentDidMount() {
        this.addNewCourse()
    }
    render(){
        return (
            <div className="row">
                <div className="col-12">
                    
                    <div className="row">
                        <span className="col">Course</span>
                        <span className="col">Grades</span>
                        <span className="col">Units</span>
                    </div>
                </div>
            <form className="col-12">
            {this.state.formItems}

            </form>
            <button className="btn badge-primary mr-auto ml-auto mb-3" onClick={this.addNewCourse} >Add new course</button>
            <div className="col-12 h1">Gpa: {this.calcGPA()}</div>
            </div>
        )
    }

}
export default GpaForm;
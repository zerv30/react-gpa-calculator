import React from 'react'


class FormItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            gradePoints:'4',
            units:0
        }
    }

    handleChange = (event)=> {
        this.setState({gradePoints:event.target.value},()=>{
            this.gradePoints()
        });
        

    }
    updateUnits = (event)=>{
        this.setState({units:Number(event.target.value)},()=>{
            this.gradePoints()
        });
    }
    gradePoints = ()=>{
        let data = {
            gradePoints:this.state.gradePoints,
            units:this.state.units
        }
        this.props.sendGradePoints(data)
    }
render(){
        return(
                <div className="row  form-group">
                <div className="col">
                    <input className="form-control" />
                </div>
                
                <span className="col">
                    <select  onChange={this.handleChange} className="form-control" name="Grades">
                        <option value="4.0">A+</option>
                        <option value="4.0">A</option>
                        <option value="3.7">A-</option>
                        <option value="3.3">B+</option>
                        <option value="3.0">B</option>
                        <option value="2.7">B-</option>
                        <option value="2.3">C+</option>
                        <option value="0.0">F</option>
                        <option value="2.0">C</option>
                        <option value="1.7">C-</option>
                        <option value="1.3">D+</option>
                        <option value="1.0">D</option>
                        <option value="0.7">D-</option>
                    </select>
                </span>
                <div className="col">
                    <input name="units" onChange={this.updateUnits} className="form-control" type="number"/>
                </div>
                </div>
        )
    
}


}
export default FormItem;
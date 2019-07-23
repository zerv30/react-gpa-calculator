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
        // return this.state.gradePoints * this.state.units
    }
render(){
    return(
            <div className="row  form-group">
            <div className="col">
                <input className="form-control" />
            </div>
            
            <span className="col">
                <select  onChange={this.handleChange} className="form-control" name="Grades">
                    <option value="4">A</option>
                    <option value="3">B</option>
                    <option value="2">C</option>
                    <option value="1">D</option>
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
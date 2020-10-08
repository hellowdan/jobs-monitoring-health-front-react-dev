import React, { Component } from 'react'
import JobService from '../services/JobService.js';

class AddJobComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            originBranch: '',
            targetBranch: ''
        }
        
        this.addBranch = this.addBranch.bind(this);

        this.changeOriginBranchHandler = this.changeOriginBranchHandler.bind(this);
        this.changeTargetBranchHandler = this.changeTargetBranchHandler.bind(this);
    }

    componentDidMount(){
        return
    }

    addBranch = (e) => {
        e.preventDefault();
        let originBranch = this.state.originBranch;
        let targetBranch = this.state.targetBranch;

        JobService.addBranch(originBranch, targetBranch).then(res =>{
            this.props.history.push('/jobs');
        });        
    }

    changeOriginBranchHandler= (event) => {
        this.setState({active: event.target.value});
    }        

    changeTargetBranchHandler= (event) => {
        this.setState({active: event.target.value});
    }            
    
    cancel(){
        this.props.history.push('/jobs');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h3 className="text-center">Add Branch</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Origin Branch: </label>
                                            <input placeholder="OriginBranch" name="originBranch" className="form-control" 
                                                value='' onChange={this.changeOriginBranchHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Target Branch: </label>
                                            <input placeholder="TargetBranch" name="targetBranch" className="form-control" 
                                                value='' onChange={this.changeTargetBranchHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.addBranch}>Add Branch</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddJobComponent


import React, { Component } from 'react'
import JobService from '../services/JobService.js';

class AddJobComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            branch: ''
        }
        
        this.activateBranch = this.activateBranch.bind(this);
        this.deactivateBranch = this.deactivateBranch.bind(this);

        this.changeBranchHandler = this.changeBranchHandler.bind(this);
    }

    componentDidMount(){
        return
    }

    activateBranch = (e) => {
        e.preventDefault();
        let branch = this.state.branch;

        JobService.activateBranch(branch).then(res =>{
            this.props.history.push('/jobs');
        });        
    }

    deactivateBranch = (e) => {
        e.preventDefault();
        let branch = this.state.branch;

        JobService.deactivateBranch(branch).then(res =>{
            this.props.history.push('/jobs');
        });        
    }    

    changeBranchHandler= (event) => {
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
                                    <h3 className="text-center">Change Branch Activation</h3>
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Branch: </label>
                                            <input placeholder="Branch" name="branch" className="form-control" 
                                                value='' onChange={this.changeBranchHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.activateBranch}>Activate Branch</button>
                                        <button className="btn btn-warning" onClick={this.deactivateBranch} style={{marginLeft: "10px"}}>Deactivate Branch</button>

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


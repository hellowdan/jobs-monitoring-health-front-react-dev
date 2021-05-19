import React, { Component } from 'react'
import JobService from '../services/JobService.js';

class AddBranchComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            originBranch: '',
            targetBranch: '',
            replacedValuesInUrl: '',
            newValuesInUrl: ''
        }
        
        this.addBranch = this.addBranch.bind(this);

        this.changeOriginBranchHandler = this.changeOriginBranchHandler.bind(this);
        this.changeTargetBranchHandler = this.changeTargetBranchHandler.bind(this);
        this.changeReplacedValuesInUrlHandler = this.changeReplacedValuesInUrlHandler.bind(this);
        this.changeNewValuesInUrlHandler = this.changeNewValuesInUrlHandler.bind(this);
    }

    componentDidMount(){
        return
    }

    addBranch = (e) => {
        e.preventDefault();
        let originBranch = this.state.originBranch;
        let targetBranch = this.state.targetBranch;
        let replacedValuesInUrl = this.state.replacedValuesInUrl;
        let newValuesInUrl = this.state.newValuesInUrl;

        console.log('new branch => ' + JSON.stringify(targetBranch));

        JobService.addBranch(originBranch, targetBranch, replacedValuesInUrl, newValuesInUrl).then(res =>{
            this.props.history.push('/jobs');
        });        
    }

    changeOriginBranchHandler= (event) => {
        this.setState({originBranch: event.target.value});
    }        

    changeTargetBranchHandler= (event) => {
        this.setState({targetBranch: event.target.value});
    }           
    
    changeReplacedValuesInUrlHandler= (event) => {
        this.setState({replacedValuesInUrl: event.target.value});
    }        

    changeNewValuesInUrlHandler= (event) => {
        this.setState({newValuesInUrl: event.target.value});
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
                                                value={this.state.originBranch} onChange={this.changeOriginBranchHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Target Branch: </label>
                                            <input placeholder="TargetBranch" name="targetBranch" className="form-control" 
                                                value={this.state.targetBranch} onChange={this.changeTargetBranchHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Values to be replaced in url (use | as a separator): </label>
                                            <input placeholder="ReplacedValuesInUrl" name="replacedValuesInUrl" className="form-control" 
                                                value={this.state.replacedValuesInUrl} onChange={this.changeReplacedValuesInUrlHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> New values in url (use | as a separator): </label>
                                            <input placeholder="NewValuesInUrl" name="newValuesInUrl" className="form-control" 
                                                value={this.state.newValuesInUrl} onChange={this.changeNewValuesInUrlHandler}/>
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

export default AddBranchComponent


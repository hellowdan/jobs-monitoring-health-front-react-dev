import React, { Component } from 'react'
import JobService from '../services/JobService'

class ListJobComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                jobs: []
        }
        this.loadJobs = this.loadJobs.bind(this);
        this.addJob = this.addJob.bind(this);
        this.addBranch = this.addBranch.bind(this);
        this.changeBranch = this.changeBranch.bind(this);
    }

    loadJobs(){
        JobService.getJobs().then((res) => {
            this.setState({ jobs: res.data});
        });
    }

    viewJob(id){
        this.props.history.push(`/view-job/${id}`);
    }
    
    componentDidMount(){
        return
    }

    addJob(){
        this.props.history.push('/add-job/_add');
    }

    updateJob(id){
        this.props.history.push(`/update-job/${id}`);
    }

    deleteJob(id){
        JobService.deleteJob(id).then( res => {
            this.setState({jobs: this.state.jobs.filter(job => job.id !== id)});
        });
    }

    addBranch(){
        this.props.history.push('/add-branch');
    }

    changeBranch(){
        this.props.history.push('/change-branch');
    }

    render() {
        return (
            <div> <br></br>
                 <h2 className="text-center">Jobs</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.loadJobs}> Load Jobs</button>
                    <button className="btn btn-primary" onClick={this.addJob} style={{marginLeft: "10px"}}> Add Job</button>
                    <button className="btn btn-info" onClick={this.addBranch} style={{marginLeft: "10px"}}> Add Branch</button>
                    <button className="btn btn-info" onClick={this.changeBranch} style={{marginLeft: "10px"}}> Change Branch Activation</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Job</th>
                                    <th> Product</th>
                                    <th> Branch</th>
                                    <th> Folder</th>
                                    <th> Schedule</th>
                                    <th> Subfolder</th>
                                    <th> Active</th>
                                    <th> Update</th>
                                    <th> Delete</th>
                                    <th> View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.jobs.map(
                                        job => 
                                        <tr key = {job.id}>
                                             <td> {job.job}</td>
                                             <td> {job.product}</td>
                                             <td> {job.branch}</td>
                                             <td> {job.folder}</td>
                                             <td> {job.schedule}</td>
                                             <td> {job.subfolder}</td>
                                             <td> {job.active}</td>
                                             <td> <button onClick={ () => this.updateJob(job.id)} className="btn btn-info">Update</button> </td>
                                             <td> <button onClick={ () => this.deleteJob(job.id)} className="btn btn-danger">Delete</button></td>
                                             <td> <button onClick={ () => this.viewJob(job.id)} className="btn btn-info">View</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListJobComponent
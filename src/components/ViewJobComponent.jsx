import React, { Component } from 'react'
import JobService from '../services/JobService.js'

class ViewJobComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            job: {}
        }
    }

    componentDidMount(){
        JobService.getJobById(this.state.id).then( res => {
            this.setState({job: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-12 offset-md-0">
                    <h3 className = "text-center"> View Job Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> <b>Job:&nbsp;</b></label>
                            <div> { this.state.job.job }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Product:&nbsp;</b></label>
                            <div> { this.state.job.product }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Branch:&nbsp;</b></label>
                            <div> { this.state.job.branch }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Folder:&nbsp;</b></label>
                            <div> { this.state.job.folder }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Schedule:&nbsp;</b></label>
                            <div> { this.state.job.schedule }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Subfolder:&nbsp;</b></label>
                            <div> { this.state.job.subfolder }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Url:&nbsp;</b></label>
                            <div> { this.state.job.url }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Api Url:&nbsp;</b></label>
                            <div> { this.state.job.apiUrl }</div>
                        </div>

                        <div className = "row">
                            <label> <b>Last Build Api Url:&nbsp;</b></label>
                            <div> { this.state.job.lastBuildApiUrl }</div>
                        </div>                        

                        <div className = "row">
                            <label> <b>Active:&nbsp;</b></label>
                            <div> { this.state.job.active }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewJobComponent


import axios from 'axios';

const JOB_API_BASE_URL = "https://jobs-monitoring-health-baqe-jobs-dashboards.6923.rh-us-east-1.openshiftapps.com/api";

class JobService {

    getJobs(){
        return axios.get(JOB_API_BASE_URL + '/jobs');
    }

    addJob(job){
        return axios.post(JOB_API_BASE_URL + '/add-job', job);
    }

    getJobById(jobId){
        return axios.get(JOB_API_BASE_URL + '/job/' + jobId);
    }

    updateJob(jobId, job){
        return axios.put(JOB_API_BASE_URL + '/update-job/' + jobId, job);
    }

    deleteJob(jobId){
        return axios.delete(JOB_API_BASE_URL + '/delete-job/',  + jobId);
    }    

    addBranch(originBranch, targetBranch){
        return axios.get(JOB_API_BASE_URL + '/add-branch/origin/' + originBranch + '/target/' + targetBranch);
    }

    activateBranch(branch){
        return axios.get(JOB_API_BASE_URL + '/activate-branch/' + branch);
    }

    deactivateBranch(branch){
        return axios.get(JOB_API_BASE_URL + '/deactivate-branch/' + branch);
    }

}

export default new JobService()
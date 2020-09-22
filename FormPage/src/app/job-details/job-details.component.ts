/**

    File Name:
    Author:
    Description:
    Modified Date:


**/




import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
    selector: 'app-job-details',
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
    Policy: any=['Policy 1', 'Policy 2']
    jobDetailForm = this.fb.group({
        jobName :['', Validators.required],
        policyName : ['', Validators.required],
        startDate : ['', Validators.required],
        runInterval : ['']
    })

    constructor(private fb: FormBuilder) { }

    ngOnInit() {}

    //This function is used for the form submission. The job gets submitted on submit of the form
    onSubmit(){
        console.log(this.jobDetailForm.value);
    }

    // (function jobNameValidation(fc:FormControl) {
    //     const jobNameRegex=[A-Z]{2}[/s]{2};

    //     return jobNameRegex.test(fc.value) ? null : {
    //         jobNameValid: {
    //             valid: false
    //         }


    // })
}

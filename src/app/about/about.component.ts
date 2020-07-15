import {Component, OnInit} from '@angular/core';
import {Job} from './job.model';
import {JobService} from './job.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  jobs: Job[];
  presentDate: Date;

  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.jobService.getSortedJobs()
      .subscribe(fetchedJobs => this.jobs = fetchedJobs);
    this.presentDate = new Date();
  }

}

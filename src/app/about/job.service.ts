import {Job} from './job.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  constructor(private http: HttpClient) {
  }

  getJobs() {
    return this.http.get<Job[]>(environment.apiUrl + 'experience');
  }

  getSortedJobs() {
    return this.getJobs().pipe(
      map(j => this.sortJobs(j)));
  }

  private sortJobs(j: Job[]) {
    return j.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
  }
}

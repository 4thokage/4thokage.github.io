import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Project} from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(private http: HttpClient) {
  }

  getProjects() {
    return this.http.get<Project[]>(environment.apiUrl + 'portfolio');
  }
}

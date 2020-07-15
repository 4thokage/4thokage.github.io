import {Component, OnInit} from '@angular/core';
import {Project} from './project.model';
import {ProjectService} from './project.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(fetchedProjects => this.projects = fetchedProjects);
  }

}

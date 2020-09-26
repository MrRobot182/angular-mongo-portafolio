import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Params } from '@angular/router'; 
import { Project } from '../../models/projects';
import { Global } from '../../services/global';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  private project: Project;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _route: ActivatedRoute    
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this._projectService.getProject(id).subscribe(
        response => {          
          this.project = response.project;
          console.log(this.project);
        },
        error => console.log(error)
      );
    });
  }

}

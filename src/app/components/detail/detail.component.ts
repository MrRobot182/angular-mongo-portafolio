import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute, Params } from '@angular/router'; 
import { Project } from '../../models/projects';
import { Global } from '../../services/global';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public project: Project;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute    
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(){
    this._route.params.subscribe(params => {
      let id = params.id;
      this._projectService.getProject(id).subscribe(
        response => {          
          this.project = response.project;
          console.log(response);
        },
        error => this._router.navigate(['projects'])
      );
    });
  }

  deleteProject(id){
    console.log(id); 
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(['projects']);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}

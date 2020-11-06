import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/projects';
import { UploadImageService } from '../../services/upload-image.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html', //'./create.component.html'
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadImageService]
})
export class EditComponent implements OnInit {

  public project: Project;
  public filesToUpload: File[];
  public url: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _projectService: ProjectService,
    private _uploadService: UploadImageService
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
          console.log(this.project);
        },
        error => this._router.navigate(['projects'])
      );
    });
  }
  
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(fileInput);
    console.log("-----------------")
    console.log(this.filesToUpload);
  }

  onSubmit(form){
    this._projectService.updateProject(this.project).subscribe(
      response => {                
        console.log(response.project);
        this.project = response.project;

        if(this.filesToUpload) {
          this._uploadService.makeFileRequest(this.project._id, this.filesToUpload, 'image').subscribe(
            response => console.log(response), error => console.log(error) 
          )
        }
        
        this._router.navigateByUrl('project/'+this.project._id);

      },
      error => console.log(error)
    );      
  }

}

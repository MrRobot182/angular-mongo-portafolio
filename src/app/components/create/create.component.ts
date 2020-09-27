import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects';
import { ProjectService } from '../../services/project.service';
import { UploadImageService } from '../../services/upload-image.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadImageService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: boolean;
  public imageStatus: boolean;
  public filesToUpload: Array<File>;
  public imgUploaded: boolean;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadImageService
  ) { 
    this.title = "Crear proyecto"
    this.project = new Project('','','','',2020,'','');
    this.status = null;
    this.imageStatus = null;
    this.imgUploaded = true;
  }

  ngOnInit(): void {
  }

  onSubmit(form) { 
    if(this.filesToUpload){
      this._projectService.saveProject(this.project).subscribe(
        response => {
          if(response.project){
            //Subida de imagen
            /*
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, this.filesToUpload, 'image').then((result:any)=>{
              console.log(result);
              this.status = true;
              form.reset();
            })*/
            this.project = response.project;
            console.log(this.project)

            this._uploadService.makeFileRequest(response.project._id, this.filesToUpload, 'image').subscribe(
              response => {
                this.imgUploaded = true;
                this.status = true;
                form.reset();
                console.log(response);
              }, 
              error => {
                this.imageStatus = false;
                console.log(error);
              }
            );
          }          
          else
            this.status = false;
        },
        error => {
          console.log(error)
      });
    }
    else
      this.imgUploaded = false;
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(fileInput);
    console.log("-----------------")
    console.log(this.filesToUpload);
  }

}

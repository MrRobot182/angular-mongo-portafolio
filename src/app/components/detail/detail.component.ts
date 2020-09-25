import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  constructor(
    private _projectService: ProjectService,
    private _route: ActivatedRoute    
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      this._projectService.getProject(id).subscribe(response => console.log(response), error => console.log(error));
    });
  }

}

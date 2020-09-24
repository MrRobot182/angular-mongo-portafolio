import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/projects';
import { Global } from './global'

@Injectable(/*{
  providedIn: 'root'
}*/)
export class ProjectService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = Global.url;
  }

  testService(){
    return "Testing project service";
  }

  saveProject(project: Project): Observable<any>{
    let body = JSON.stringify(project);
    let httpHdrs = new HttpHeaders().set("Content-Type","application/json");
    return this._http.post(this.url+'save-project', body, { headers: httpHdrs});
  }
}

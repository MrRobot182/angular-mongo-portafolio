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
  private httpHdrs: HttpHeaders;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = Global.url;
    this.httpHdrs = new HttpHeaders().set("Content-Type","application/json");
  }

  testService(){
    return "Testing project service";
  } 

  saveProject(project: Project): Observable<any>{
    let body = JSON.stringify(project);
    return this._http.post(this.url+'save-project', body, { headers: this.httpHdrs});
  }

  getProjects(): Observable<any>{
    return this._http.get(this.url+"projects", {headers: this.httpHdrs});    
  }

  getProject(id: string): Observable<any>{
    return this._http.get(this.url+"project/"+id, {headers: this.httpHdrs}); 
  }

  deleteProject(id: string): Observable<any>{
    return this._http.delete(this.url+"project/"+id, {headers: this.httpHdrs});
  }

  updateProject(project: Project): Observable<any>{
    let body = JSON.stringify(project);
    return this._http.put(this.url+"project/"+project._id, body, {headers: this.httpHdrs})
  }
}

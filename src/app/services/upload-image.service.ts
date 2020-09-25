import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UploadImageService {

  public url:string;

  constructor( private _http: HttpClient ) { 
    this.url = Global.url;
  }

  makeFileRequest(id: string, file: Array<File>, name: string){
    let urlUI = this.url+"upload-image/"+id;    
    let httpHdrs = new HttpHeaders().set("Content-Disposition","form-data");
    let fd = new FormData();
    
    fd.append(name, file[0]);
    
    return this._http.post(urlUI, fd);
  }
}

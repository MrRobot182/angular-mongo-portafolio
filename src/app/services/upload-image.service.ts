import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UploadImageService {

  public url:string;

  constructor( private _http: HttpClient ) { 
    this.url = Global.url;
  }

  makeFileRequest(url: string, file: Array<File>, name: string){
    var fd = new FormData();
    fd.append(name, file[0]);
    let httpHdrs = new HttpHeaders().set("Content-Disposition","form-data");
    return this._http.post(url, fd);
  }

  /*
  makeFileRequest(url: string, body: Array<string>, files: Array<File>, name: string){
    return new Promise((resolve, reject)=>{
      var formData = new FormData();
      var xhr = new XMLHttpRequest();

      for(let i=0; i<files.length; i++){
        formData.append(name, files[i],files[i].name)
      }

      xhr.onreadystatechange = ()=>{
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }
          else{
            reject(xhr.response);
          }
        }
      }

      xhr.open('POST', url, true);
      xhr.send(formData);
    })
  }*/
}

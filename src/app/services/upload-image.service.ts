import { Injectable } from '@angular/core';
import { Global } from './global';
import { chdir } from 'process';

@Injectable()
export class UploadImageService {

  public url:string;

  constructor() { 
    this.url = Global.url;
  }

  makeFileRequest(url: string, body: Array<string>, files: Array<File>, name: string){
    return new Promise((resolve, reject)=>{
      var formData:any = new FormData();
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
  }
}

import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


export interface album {
  id: number;
  title:string;
  crationDate:Date;
  archived:number;
  coverPicture:string;

}
@Injectable({
 providedIn: 'root'
})
export class AlbumService {
 private url = 'http://localhost:3000/album';
 constructor(private http: HttpClient) { }
 getalbum(): Observable<any[]> {
 return this.http.get<any[]>(this.url);
 }
}

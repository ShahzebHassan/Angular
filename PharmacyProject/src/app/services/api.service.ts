import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postInfo(data : any){
    return this.http.post<any>("http://localhost:3000/productList/",data);
  }
  getInfo(){
    return this.http.get<any>("http://localhost:3000/productList/", );
  }
  putInfo(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/productList/"+id, data);
  }
  deleteInfo(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id,);
  }
  //user apiis
  getUserInfo(){
    return this.http.get<any>("http://localhost:3000/userData/", );
  }
  postUserInfo(data : any){
    return this.http.post<any>("http://localhost:3000/userData/",data);
  }
  putUserInfo(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/userData/"+id, data);
  }
  deleteUserInfo(id:number){
    return this.http.delete<any>("http://localhost:3000/userData/"+id,);
  }
  //Medicine Data
  postMedInfo(data : any){
    return this.http.post<any>("http://localhost:3000/medData/",data);
  }
  getMedInfo(){
    return this.http.get<any>("http://localhost:3000/medData/", );
  }
  putMedInfo(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/medData/"+id, data);
  }
  deleteMedInfo(id:number){
    return this.http.delete<any>("http://localhost:3000/medData/"+id,);
  }
}

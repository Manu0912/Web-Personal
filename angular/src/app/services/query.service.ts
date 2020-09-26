import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryForm } from '../models/query';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  readonly URL_API_POST = 'https://emanuelcacheda.herokuapp.com/api/formdata/saverequest';
  readonly URL_API_GET = 'https://emanuelcacheda.herokuapp.com/api/formdata/internal/admin/privateandcertificate';
  readonly URL_API_DELETE = 'https://emanuelcacheda.herokuapp.com/api/formdata/internal/admin/privateandcertificate/delete'
  
  selectedQuery: QueryForm;
  queries: QueryForm[];

  constructor(
    private http: HttpClient
    ){
    this.selectedQuery = new QueryForm();
  }

  postFormQuery(formData: QueryForm) {
    return this.http.post(this.URL_API_POST, formData);
  }

  getAllQueries(){
    return this.http.get(this.URL_API_GET);
  }

  deleteQuery(_id:string){
    return this.http.delete(this.URL_API_DELETE + `/${_id}`);
  }
}

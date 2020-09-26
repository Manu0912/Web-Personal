import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technologies } from '../models/technologies';

@Injectable({
  providedIn: 'root'
})

export class TechnologiesService {

  readonly URL_API_GET = 'https://emanuelcacheda.herokuapp.com/api/technologies/getTechnologies';

  technologies: Technologies[];

  constructor(
    private http: HttpClient
  ) {
  }

  getAllQueries() {
    return this.http.get(this.URL_API_GET);
  }

}

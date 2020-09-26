import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/query.service';
import { QueryForm } from '../../models/query'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  mostrar = false;

  constructor(public queryService: QueryService,
    public auth: AuthService
  ) {

  }

  ngOnInit(): void {
    this.getQueries();

  }

  showMessage(query) {
    query.show = true;
  }

  noMessage(query) {
    query.show = false;
  }

  getQueries() {
    this.queryService.getAllQueries()
      .subscribe(res => {
        this.queryService.queries = res as QueryForm[];
      });
  }

  deleteQuery(_id: string) {
    if (confirm('Deseas eliminar la consulta?')) {
      this.queryService.deleteQuery(_id)
        .subscribe(res => {

          this.getQueries();

        })
    }
  }
}

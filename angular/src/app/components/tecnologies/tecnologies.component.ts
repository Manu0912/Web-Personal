import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from 'src/app/services/technologies.service';
import { Technologies } from 'src/app/models/technologies';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.css']
})
export class TecnologiesComponent implements OnInit {

  constructor(public technologiesService: TechnologiesService) {

  }


  ngOnInit() {
    this.getTechnologies();
  }

  getTechnologies() {
    this.technologiesService.getAllQueries()
      .subscribe(res => {
        this.technologiesService.technologies = res as Technologies[];
      });
  }
}

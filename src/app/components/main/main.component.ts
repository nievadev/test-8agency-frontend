import { Component, OnInit } from '@angular/core';
import { SpecialistsService } from 'src/app/services/specialists.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  specialists$ = this.specialistsService.getSpecialists();

  constructor(private specialistsService: SpecialistsService) { }

  ngOnInit(): void {
  }
}

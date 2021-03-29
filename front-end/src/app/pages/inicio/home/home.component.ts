import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Camiseta from 'src/app/shared/Data/camiseta';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  camisetas: Camiseta[] = [];

  constructor(
    public router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.findAllByOferta();
  }

  findAllByOferta() {
    this.homeService.findAllByOfertas()
      .subscribe((response) => (this.camisetas = response));
  }

}

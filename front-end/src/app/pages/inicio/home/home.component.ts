import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Camiseta from 'src/app/shared/Data/camiseta';
import { HomeService } from '../home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resultados: Camiseta[] = [];

  constructor(
    public router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.findAllByOferta();
  }

  findAllByOferta() {
    this.homeService.findAllByOfertas()
      .subscribe((response) => (this.resultados = response));
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    navSpeed: 900,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Camiseta from '../pages/camiseta';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  camisetas: Camiseta[] = [];

  constructor(
    public router: Router,
    private layoutService: LayoutService
  ) { }

  ngOnInit(): void {
    this.findAllByOferta();
  }

  findAllByOferta() {
    this.layoutService.findAllByOfertas()
      .subscribe((response) => (this.camisetas = response));
  }

}

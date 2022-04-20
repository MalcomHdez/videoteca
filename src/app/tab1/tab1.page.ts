import { Component, OnInit } from '@angular/core';
import { DataMoviesService } from '../services/data-movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private dataMovies: DataMoviesService) {}

  ngOnInit(): void {
    this.dataMovies.getDiscover();
  }

}

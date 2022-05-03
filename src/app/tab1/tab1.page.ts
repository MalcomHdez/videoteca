import { Component, OnInit } from '@angular/core';
import { Movies } from '../interfaces/interfaces';
import { DataMoviesService } from '../services/data-movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  discover: Movies[] = [];
  popularity: Movies[] = [];

  constructor(private dataMovies: DataMoviesService) {}

  //Los TypeScript son utilizados para consumir los servicios, ejemplo: data-movies.service.ts

  ngOnInit(): void {

    this.dataMovies.getDiscover().
        subscribe(

          resp=> {
            //console.log(resp)
            this.discover = resp.results;
          });


    this.dataMovies.getPopulary().
          subscribe(
            resp=> {
              //console.log(resp)
              this.popularity = resp.results;
            });
  }

}

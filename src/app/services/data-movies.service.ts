import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResultTMDB } from '../interfaces/interfaces';

const URL = environment.URL;
const API_KEY = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  constructor(private http: HttpClient) { }

  //Con + puedo acomodar las variables al hacer la concatenación
  //Con =+ concatena primero query y luego las démas variables

  private execQuery<T>(query: string){
    query = URL + query;
    query += `&api_key=${API_KEY}&language=es`;
    return this.http.get<T>(query);
  }

  getDiscover() {

    const fechaActual = new Date();
    const ultimoDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();
    const mes = fechaActual.getMonth()+1;
    let mesString;

    //Crear string de la fecha yyyy-mm-dd
    if(mes < 10 ){
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    const fecInicio = `${fechaActual.getFullYear()}-${mesString}-01`;
    const fecFin = `${fechaActual.getFullYear()}-${mesString}-${ultimoDia}`;



    return this.execQuery<ResultTMDB>(`/discover/movie?primary_release_date.gte=${fecInicio}&primary_release_date.lte=${fecFin}`);
    //return this.http.get<ResultTMDB>('https://api.themoviedb.org/3/discover/movie?api_key=747c14fe72c31bc1ba8de54623187b57&language=es&primary_release_date.gte=2022-03-01&primary_release_date.lte=2022-03-31');
  }

  getPopulary(){
    return this.execQuery<ResultTMDB>(`/discover/movie?sort_by=popularity.asc`);
  }


}

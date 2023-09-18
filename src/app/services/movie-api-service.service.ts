import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* this is for fetch api data through the third party api */
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseUrl ="https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  // banner api data this used in home component

  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apikey}`);

  }

 /* trending movie api home component */

  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`);
  }

  /* search movie this used in search component */  

  getSearchMovie(data:any):Observable<any>{
    return this.http.get
    (`${this.baseUrl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  /* get movie details this used in movie details*/
  getMovieDetails(data:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apikey}`)
  }

  /* get movie video  */

  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  /* get movie cast */
  getMovieCast(data:any):Observable<any>{
  return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  /* action movie */
  fetchActionMoive():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }


  /* adventure */

  fetchAdventureMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  /* animation */
fetchAnimationMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }


  /* comedy */

  fetchComedyMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  /* documentary */
fetchDocumentoryMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  /* sceince fiction */

  fetchScienceFictionMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  /* thriller */
  fetchThrillerMovie():Observable<any>{
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }

}

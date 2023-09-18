import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService){}

  bannerResult:any = [];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];
  scienceFictionMovieResult:any=[];
  thrillerMovieResult:any=[];





  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
     this.actionMovieData();
     this.adventureMovieData();
     this.animationMovieData();
     this.comedyMovieData();
     this.documentaryMovieData();
     this.thrillerMovieData();
     this.scienceMovieData();
  }


  // banner data   this is for fetch api data from movieApiService services 
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');

      this.bannerResult = result.results;
    });
  }


  // treanding movie api call 

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{

      console.log(result,'trending movie')
      this.trendingMovieResult = result.results;
    })
  }

  /* action movie */

  actionMovieData(){
    this.service.fetchActionMoive().subscribe((result)=>{
      console.log(result,'action movie');
      this.actionMovieResult = result.results;
      
    })
  }

  /* adventure movie */

  adventureMovieData(){
    this.service.fetchAdventureMovie().subscribe((result)=>{
      console.log(result,'advent movie');
      this.adventureMovieResult = result.results;
      
    })
  }


  /* animation movie */

  animationMovieData(){
    this.service.fetchAnimationMovie().subscribe((result)=>{
      console.log(result,'animation movie');
      this.animationMovieResult = result.results;
      
    })
  }


    /* comedy movie */

 comedyMovieData(){
    this.service.fetchComedyMovie().subscribe((result)=>{
      console.log(result,'comedy movie');
      this.comedyMovieResult = result.results;
      
    })
  }


     /* documentary movie */

 documentaryMovieData(){
    this.service.fetchDocumentoryMovie().subscribe((result)=>{
      console.log(result,'documentary movie');
      this.documentaryMovieResult = result.results;
      
    })
  }


     /* sceince fiction movie */

 scienceMovieData(){
    this.service.fetchScienceFictionMovie().subscribe((result)=>{
      console.log(result,'science movie');
      this.scienceFictionMovieResult = result.results;
      
    })
  }


       /* thriller movie */

 thrillerMovieData(){
    this.service.fetchThrillerMovie().subscribe((result)=>{
      console.log(result,'thriller movie');
      this.thrillerMovieResult = result.results;
      
    })
  }








  


}

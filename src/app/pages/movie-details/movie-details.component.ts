import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private service:MovieApiServiceService,private router:ActivatedRoute){}

  getMovieDetilsResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'get param id');
    
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }


  // get api data from movie api service getMovieDetails
  getMovie(id:any){

    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'movie id'); 
      this.getMovieDetilsResult=result;
    })

  }

  /* get movie vide */
  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'this is video');
      result.results.forEach((element:any) => {
        if(element.type==="Trailer"){
          
          this.getMovieVideoResult= element.key;
        }
      });
    });
  }


  /* get movie cast */
  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'this is cast');
      this.getMovieCastResult = result.cast;
      
    })
  }

}

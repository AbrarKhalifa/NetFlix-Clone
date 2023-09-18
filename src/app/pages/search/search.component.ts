import { Component,OnInit} from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
 
  constructor(private service:MovieApiServiceService){}
 
  ngOnInit(): void {
  }


  searchResult:any;

// for submit form
  searchForm = new FormGroup({
    'movieName' : new FormControl(null)  // this movieName define in html in input ele and in api getSearchMovie api 
  });


  //

  submitForm(){
    console.log(this.searchForm.value,"searchForm#");

    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,"search movie") ;

      this.searchResult = result.results;
      
    })
  }



  

}

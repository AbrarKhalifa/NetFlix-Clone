import { Component,HostListener} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showTime';

  /* navbar background color change while scrolling  */
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

     this.navbg ={
       'background-color':'#000000'  /* this is bg for navbar when scrolling  */
     }

    }else{
      this.navbg={}
    }
  }

}

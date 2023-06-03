import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../service/home-service.service';
import { isEmpty } from 'rxjs';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private route: ActivatedRoute,private data: HomeService) { }
  
  id:string;
  page:number = 1;
  responseData:any[];
  //setupPaginate:any[];
  registersPage:number;

  setupPaginate: {[key: string]: string} = {};

  


  ngOnInit(): void {   
    

    if(this.route.snapshot.paramMap.get('page')){      
      this.id = this.route.snapshot.paramMap.get('page');
    } else {
      this.id = "1";
    }

    
    console.log("Path Param::: " + this.id);


    this.getPosts(this.id);
  }


  changePage(event){
    console.log(event);
    this.getPosts(event);
    //Go to the top page ####
    this.onActivate();
  }

  getPosts(page:string){

    this.data.findHomeList(page).subscribe(data => {

      this.responseData = data;

      console.log(data);

      this.registersPage = data['registersPage'];
      this.setupPaginate['totalpages'] = data['totalpages'];
      this.setupPaginate['totalPosts'] = data['totalPosts'];

    });


    

  }

  onActivate() {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 
    
 }

  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  ngOnInit(): void {
    console.log('activateRout :>> ', this.activateRoute.snapshot.queryParams['code']);
    const authorCode: string = this.activateRoute.snapshot.queryParams['code'];
    this.authService.getToken(authorCode).subscribe(data => console.log('data :>> ', data));

  }

  constructor(public activateRoute:ActivatedRoute,private authService: AuthService){}

}

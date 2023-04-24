import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'keycloak-angular';

  urlAuthorizationCode: any;

  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
   this.authService.getAuthConfig().subscribe(res =>{
    if(res){
      this.urlAuthorizationCode = 'http://localhost:8080/auth/realms/evotek/protocol/openid-connect/auth?client_id=demo&response_type=code&state=fjkl2aubcdk&redirect_uri=http://localhost:4200/home&scope=openid profile'
      // console.log('res :>> ', res);
      // console.log('this.urlAuthorizationCode :>> ', this.urlAuthorizationCode);
    }
    
   })
  }

}

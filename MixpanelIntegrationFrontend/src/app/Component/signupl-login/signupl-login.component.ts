import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { HttpClient, HttpClientModule ,provideHttpClient,withFetch } from '@angular/common/http';

@Component({
  selector: 'app-signupl-login',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './signupl-login.component.html',
  styleUrl: './signupl-login.component.css'
})
export class SignuplLoginComponent {

  isSignDivVisiable: boolean = true;
  signUpobj : SignUpModel = new SignUpModel();
  loginobj : LoginModel = new LoginModel();

  constructor(private router: Router){}

  onRegister(){
    const localUser = localStorage.getItem('trackpanel18users');
    if(localUser !=null){
      const users = JSON.parse(localUser);
      users.push(this.signUpobj);
      localStorage.setItem('trackpanel18users', JSON.stringify(users));
    }else{
       const users = [];
       users.push(this.signUpobj);
       localStorage.setItem('trackpanel18users', JSON.stringify(users));
    }
    alert('Registration Success')
  }
  onLogin(){
    alert('signin')
    debugger;
    const localUser = localStorage.getItem('trackpanel18users');
    if(localUser != null){
      const users = JSON.parse(localUser);
      const isUserPresent = users.find((user:SignUpModel)=> user.email == this.loginobj.email && user.password == this.loginobj.password)
       if(isUserPresent != undefined)
       {
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        // this.router.navigate(['/products']);
        this.router.navigate(['/products']).then(success => {
          debugger;
          if (success) {
            console.log('Navigation successful');
          } else {
            console.log('Navigation failed');
          }
        });
       }else{
        alert("No user forund");
       }
       debugger;
    }
  }
  
}
export class SignUpModel {
  name: string;
  email: string;
  password: string;
  constructor(){
    this.name = "";
    this.email= "";
    this.password= "";
  }
}

export class LoginModel {
  email: string;
  password: string;
  constructor(){
    this.email= "";
    this.password= "";
  }
}
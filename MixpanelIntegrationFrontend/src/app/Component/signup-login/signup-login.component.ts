import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { HttpClient, HttpClientModule ,provideHttpClient,withFetch } from '@angular/common/http';
import { LoginModel, SignUpModel } from '../../Model/class';

@Component({
  selector: 'app-signup-login',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './signup-login.component.html',
  styleUrl: './signup-login.component.css'
})
export class SignupLoginComponent {

  isSignDivVisiable: boolean = true;
  signUpobj : SignUpModel = new SignUpModel();
  loginobj : LoginModel = new LoginModel();

  constructor(private router: Router){}

  onRegister(){
    debugger;
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

    const localUser = localStorage.getItem('trackpanel18users');
    if(localUser != null){
      const users = JSON.parse(localUser);
      const isUserPresent = users.find((user:SignUpModel)=> user.email == this.loginobj.email && user.password == this.loginobj.password)
       if(isUserPresent != undefined)
       {
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        // this.router.navigate(['/products']);
        this.router.navigate(['/products']).then(success => {

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



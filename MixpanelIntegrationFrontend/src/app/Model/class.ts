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

  export interface CartItem {
    title: string;
    price: number;
    count: number;
    category?: string; 
    images?: string[]; 
  }
  
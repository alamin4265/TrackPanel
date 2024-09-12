import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signupl-login',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './signupl-login.component.html',
  styleUrl: './signupl-login.component.css'
})
export class SignuplLoginComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignuplLoginComponent } from './Component/signupl-login/signupl-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignuplLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MixpanelIntegrationFrontend';
}

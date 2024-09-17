import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MixpanelService } from '../../../Shared/Services/mixpanel.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule,CommonModule,JsonPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  prod: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private mixpanelService: MixpanelService
  ) {}

    // @Input() productflag : string  = 'Details';
    
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.http.get(`https://dummyjson.com/products/${id}`).subscribe((result: any) => {
          this.prod = result;
          this.mixpanelService.trackEvent('ProductDetail', { Category: this.prod.category });
        });
      }
    }
    goBack() {
      this.router.navigate(['/products']);
    }
}

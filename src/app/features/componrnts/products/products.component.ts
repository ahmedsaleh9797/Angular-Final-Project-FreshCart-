import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { ProductcardComponent } from '../../../shared/components/productcard/productcard.component';
import { SearchproductPipe } from '../../../shared/pipes/searchproduct/searchproduct-pipe';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  imports: [ProductcardComponent, SearchproductPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {

  userSearch: string = '';

  private productService = inject(ProductService);

  productList = toSignal(
    this.productService.getAllProducts().pipe(
      map(res => res.data)
    ),
    { initialValue: [] }
  );

}
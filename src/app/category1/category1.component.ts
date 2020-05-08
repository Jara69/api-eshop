import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriesService} from '../services/categories.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../models/Category.model';
import {CategoryPage} from '../models/CategoryPage.model';
import {Product} from '../models/Produkt.model';
import {ProductsService} from '../services/products.service';
import {Images} from '../models/Obrazky.models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class Category1Component implements OnInit {

  public name: string;
  public description: string;
  public product: Product;
  public productArr: Product[];
  public images: Images[];

  constructor(private http: HttpClient, private category: CategoriesService, private activatedRoute: ActivatedRoute, private products: ProductsService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(i => {
      this.category.getCategory(i.id).subscribe((data: CategoryPage) => {
        console.log(data);
        this.name = data.category.name;
        this.description = data.category.description;
        this.productArr = data['products'];
      });
      this.products.getImage().subscribe((data: Images[]) => {
        console.log(data);
      });
    });
  }

}

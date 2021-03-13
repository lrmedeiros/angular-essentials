import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products!: Product[];
  displayedColumns: string[];

  constructor(private productService: ProductService) {
    this.displayedColumns = ["id", "name", "price", "action"];
  }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }
}

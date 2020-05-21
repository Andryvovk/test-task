import { Component, OnInit, HostListener } from '@angular/core';
import { StrCategory } from '../interfaces/category-interface';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  categories:StrCategory[];
  filteredCategories: any[];
  categoryIndex: number = 0;
  cocktails = [];
  isEndList: boolean = false;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.getCocktailCategories();
  }

  getCocktailCategories() {
    this.cocktailService.getCocktailCategories()
    .subscribe(
      res => {
        this.categories = res.drinks;
        this.categories.map(el => {
          el.selected = true;
        });
        this.setCategories()
      }
    )
  }

  getCocktails(categories) {
    if (categories.length <= this.categoryIndex) {
      this.isEndList = true;
    } else {
      this.cocktailService.getCoctails(categories, this.categoryIndex).subscribe(
        res => {
          this.cocktails.push(res.drinks);
          this.cocktails[this.categoryIndex].ctrName = categories[this.categoryIndex].strCategory;
          this.categoryIndex++
        }
      )
    }
  }
  
  setCategories() {
    if (this.filteredCategories) {
       this.getCocktails(this.filteredCategories)
    } else if (!this.filteredCategories) {
       return this.getCocktails(this.categories)
    }
  }

  filter($event) {
    this.cocktails = [];
    this.filteredCategories = [];
    this.categoryIndex = 0;
    this.isEndList = false;
    $event.map(element => {
      if (element.selected) {
          this.filteredCategories.push(element)
      } else {
          return;
      }
    });
    this.setCategories();
  }
  
  @HostListener("window:scroll") onWindowScroll() {
    let scroll = window.pageYOffset ||
                 document.documentElement.scrollTop ||
                 document.body.scrollTop || 0;

    const max = document.documentElement.scrollHeight -
                document.documentElement.clientHeight - 1;
    if (scroll >= max) {
      this.setCategories()
    }
  }
}
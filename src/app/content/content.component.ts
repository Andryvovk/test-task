import { Component, Input } from '@angular/core';
import { CocktailList } from '../interfaces/cocktail-interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() cocktails: CocktailList[] = [];
  @Input() isEndList: boolean;
}

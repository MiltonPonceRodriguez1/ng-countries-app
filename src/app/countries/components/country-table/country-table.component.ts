import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
    img {
      width: 4.5rem;
    }
  `
})
export class CountryTableComponent {
  public hasLoaded: boolean = false;

  @Input()
  public countries: Country[] = [];

  onLoad(): void {
    this.hasLoaded = true;
  }
}

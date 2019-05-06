import { Component } from '@angular/core';

@Component({
  selector: 'dev-component',
  templateUrl: './dev-component.component.html',
  styleUrls: ['./dev-component.component.scss']
})
export class DevComponent {
  public user= {name: 'Cristina Gutiérrez',
                dni: '1105822280',
                age: '23 years old'}; 
}

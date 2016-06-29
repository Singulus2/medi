import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'auction-navbar',
  template: require('./navbar.html'),
  directives: [RouterLink]
})
export default class NavbarComponent {}

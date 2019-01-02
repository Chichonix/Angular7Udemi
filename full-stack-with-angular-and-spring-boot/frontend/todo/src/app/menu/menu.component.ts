import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Esto no se usa aqui, puesto que con ello no se refresca la página al cambiar la vista y siempre queda el user logged in.
  // isUserLoggedIn: boolean = false;

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

// import { AppComponent } from '../app.component';

// @ComponentScan(
//    value = "com.my.springboot.web"
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
// public class SpringBootFirstWebApplication implements

export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  name = '';
  welcomeMessageFromService:string;

  // message : string = 'Some Welcome Message';
  // String message = 'Some Welcome Message';

  // public SpringBootFirstWebApplication(){

  // Activated route
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {

  }

  // void init(){
  ngOnInit() {

    // COMPILATION ERROR this.message = 5;
    // console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    // Subscribirse a un observable y decir que hacer al recibir la respuesta

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfullResponse(response),
      error => this.handleErrorResponse(error)
      // response => console.log(response)
    );

    // console.log('Last line of getWelcomeMessage');
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccesfullResponse(response),
      error => this.handleErrorResponse(error)
      // response => console.log(response)
    );

    // console.log('Last line of getWelcomeMessage');
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;

    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
  }

  handleSuccesfullResponse(response) {
    this.welcomeMessageFromService = response.message;

    // console.log(response);
    // console.log(response.message);
  }
}

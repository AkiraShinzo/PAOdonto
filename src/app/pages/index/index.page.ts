import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "src/app/pages/shared/authentication-service";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(public authService: AuthenticationService,public auth: AngularFireAuth) { }

  ngOnInit() {
  }

}

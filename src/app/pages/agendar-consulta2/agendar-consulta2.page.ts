import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendar-consulta2',
  templateUrl: './agendar-consulta2.page.html',
  styleUrls: ['./agendar-consulta2.page.scss'],
})
export class AgendarConsulta2Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('sevico: ',params[0]);
      console.log('agente: ',params[1]);
      console.log('nowdata: ',params[2]);
      console.log('nowtime: ',params[3]);
    });

   }

  ngOnInit() {
  }

}

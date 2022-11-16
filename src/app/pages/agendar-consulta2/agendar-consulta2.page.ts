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
  agente: any;
  service: any;
  nowdata: any;
  nowtime: any;
  nomeSel: any;
  sobrenomeSel: any;
  idadeSel: any;
  datadenascimentoSel: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('sevico: ',params[0]);
      console.log('agente: ',params[1]);
      console.log('nowdata: ',params[2]);
      console.log('nowtime: ',params[3]);

      this.service = params[0];
      this.agente = params[1];
      this.nowdata = params[2];
      this.nowtime = params[3];
    });

   }

  ngOnInit() {
  }
  canSave(): boolean {
    return this.nomeSel != null && this.sobrenomeSel != null && this.idadeSel != null && this.datadenascimentoSel != null;
  }
  config(nome,sobrenome,idade,datadenascimento){
    this.router.navigate(['pagamento'],{queryParams:[this.service,this.agente,this.nowdata,this.nowtime,nome.value,sobrenome.value,idade.value,datadenascimento.value]});
  }
}

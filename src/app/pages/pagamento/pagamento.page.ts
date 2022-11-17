import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {
  agente: any;
  service: any;
  nowdata: any;
  nowtime: any;
  nome: any;
  sobrenome: any;
  idade: any;
  datadenascimento: any;
  pagamentoSel: any;
  pagamentos: any;
  agendamentos: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private firestore: AngularFirestore) {

    this.activatedRoute.queryParams.subscribe(params => {
      console.log('sevico: ',params[0]);
      console.log('agente: ',params[1]);
      console.log('nowdata: ',params[2]);
      console.log('nowtime: ',params[3]);
      console.log('nome: ', params[4]);
      console.log('sobrenome: ', params[5]);
      console.log('idade: ', params[6]);
      console.log('datadenascimento: ', params[7]);

      this.service = params[0];
      this.agente = params[1];
      this.nowdata = params[2];
      this.nowtime = params[3];
      this.nome = params[4];
      this.sobrenome = params[5];
      this.idade = params[6];
      this.datadenascimento = params[7];

      this.pagamentos =  this.firestore.collection('pagamentos').valueChanges();
      this.agendamentos = firestore.collection('agendamentos');
    });


   }

  ngOnInit() {
  }
  checkValue(event) {
    this.pagamentoSel = event.detail.value;
  }
  agendar(){
    this.agendamentos.add({service: this.service,agente: this.agente, data: this.nowdata, horario: this.nowtime, nomePaciente: this.nome, sobrenomePaciente: this.sobrenome, idadePaciente: this.idade, nascimentoPaciente: this.datadenascimento,status:'',pagamento: this.pagamentoSel,id: ''}).then( novo => {
      this.agendamentos.doc(novo.id).update({id: novo.id})
      });

    this.router.navigateByUrl('historico-consulta');
  }
}

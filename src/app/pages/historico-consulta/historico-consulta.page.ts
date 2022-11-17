import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-historico-consulta',
  templateUrl: './historico-consulta.page.html',
  styleUrls: ['./historico-consulta.page.scss'],
})
export class HistoricoConsultaPage implements OnInit {
  agendamentosHIS: any;
  service: any;
  agente: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private firestore: AngularFirestore,private toastController: ToastController)
  {
    this.agendamentosHIS = this.firestore.collection('agendamentos').valueChanges();
    this.service = this.firestore.collection('procedimento').valueChanges();
    this.agente = this.firestore.collection('profissional').valueChanges();
  }

  ngOnInit() {
  }

  atender(atendimento){
    this.firestore.collection('agendamentos').doc(atendimento).update({status:'1'});
    this.presentToast('Consulta Atendida');
  }
  cancelar(atendimento){
    this.firestore.collection('agendamentos').doc(atendimento).update({status:'2'});
    this.presentToast('Consulta Cancelada');
  }

  canClick(status){
    if(status == ""){
      return false;
    }else{
      return true;
    }
  }

  canColor(status){
    if(status == "1"){
      return "success";
    }else if(status == "2"){
      return "danger";
    }
  }


  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'middle'
    });

    await toast.present();
  }

}

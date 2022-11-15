import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.page.html',
  styleUrls: ['./agendar-consulta.page.scss'],
})
export class AgendarConsultaPage implements OnInit {
  hourValues: string;
  minuteValues: string;
  procedimento: any;
  procedimentoSel: any;
  profissional: any;
  profissionalSel: any;


  constructor(
    private firestore: AngularFirestore,
    private router: Router
    )
    {
    this.hourValues = '08,09,10,11,13,14,15,16';
    this.minuteValues = '00,30';
    this.procedimento = this.firestore.collection('procedimento').valueChanges();
    this.profissional = this.firestore.collection('profissional').valueChanges();

  }


  ngOnInit() {}
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    return utcDay !== 0 && utcDay !== 6;
  };
  canSave(): boolean {
    return this.profissionalSel != null && this.procedimentoSel != null;
  }

  config(servico, agente, data){
    const nowdate = new Date(data.value).toLocaleDateString();
    const nowtime = new Date(data.value).toLocaleTimeString();
    this.router.navigate(['agendar-consulta2'],{queryParams:[servico.value,agente.value,nowdate,nowtime]});
  }
}

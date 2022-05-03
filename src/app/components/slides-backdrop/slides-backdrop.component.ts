import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movies } from 'src/app/interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slides-backdrop',
  templateUrl: './slides-backdrop.component.html',
  styleUrls: ['./slides-backdrop.component.scss'],
})
export class SlidesBackdropComponent implements OnInit {

  @Input() discover: Movies[] = [];

  constructor(private modalController: ModalController) { }

  ngOnInit() {}


  //async = para abrir cualquier elemento de tipo dinámico
  async showDetails(id: number){
    // Para recursos de tipo dinámicas, es una interfaz.
    // .create es para crear el controller
    const modal = await this.modalController.create({
        //Dentro de este create tenemos que especificar el componente que tenemos que abrir
        component: DetailsComponent,
        // Reciba ciertos valores
        componentProps:{
          id
        }
    });

    modal.present();

    //console.log(id);
  }

}

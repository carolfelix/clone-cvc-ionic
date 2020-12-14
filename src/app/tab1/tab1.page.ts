import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  count : number = 0;
  conta : number = 0;

  texto = "";

  constructor(private menu : MenuController, public router : Router) {}

    openMenu() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
    }

    compare(texto){
      if ( texto === 'PacotesHotel') {
        document.getElementById("PacotesHotel").classList.add('borderAmarela');      
        document.getElementById("Pacotes").classList.remove('borderAmarela');
      }
      else
      {
        document.getElementById("Pacotes").classList.add('borderAmarela');      
        document.getElementById("PacotesHotel").classList.remove('borderAmarela');
      }
    }
    pacotes(){
      this.router.navigate(['tabs','tab2',{
      }])
    }
    destinos(){
      this.router.navigate(['tabs','tab3',{
      }])
    }
  }

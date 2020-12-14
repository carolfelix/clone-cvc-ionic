import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  texto = "";

  constructor(private menu : MenuController) {}
  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  compare(texto){
  if ( texto === 'PacotesHotel') {
    document.getElementById("PacotesHotel").classList.add('fundoAzul');      
    document.getElementById("Pacotes").classList.remove('fundoAzul');
  }
  else
  {
    document.getElementById("Pacotes").classList.add('fundoAzul');      
    document.getElementById("PacotesHotel").classList.remove('fundoAzul');
  }
}

}

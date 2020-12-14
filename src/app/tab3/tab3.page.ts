import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private menu : MenuController, public router : Router) {}
  
    openMenu2() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  pacotes(){
    this.router.navigate(['tabs','tab2',{
    }])
  }
}

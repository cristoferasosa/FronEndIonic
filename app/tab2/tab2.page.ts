import { Component } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public usuarios: any;
  constructor(
    private userservice: UserService
  ) {}

  ObtenerUsuarios() {
   this.userservice.getUser().subscribe(
     Response => {
       this.usuarios = Response;
       console.log(this.usuarios);
     }
   );
  }

}

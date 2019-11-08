import { Component } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})
export class ListusersPage {
  public usuarios: any;

  constructor(private userservice: UserService) { }

  ObtenerUsuarios() {
    this.userservice.getUser().subscribe(
      Response => {
      this.usuarios = Response;
      console.log(this.usuarios);
    }
    );
  }
}

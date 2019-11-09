import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-solicitucredito',
  templateUrl: './solicitucredito.page.html',
  styleUrls: ['./solicitucredito.page.scss'],
})
export class SolicitucreditoPage implements OnInit {
  private credito: FormGroup;
  private idUser: any;

  constructor(private storage: Storage, private formBuilder: FormBuilder, private _userservice: UserService) {
    this.credito = this.formBuilder.group({
      monto_solicitado: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.storage.get('user').then(response => {
      this.idUser = response.id_credential;
      // console.log(this.idUser);
    });
  }

  sendRest() {
    const credit = this.credito.value;
    console.log(credit.monto_solicitado, credit.descripcion);
    console.log(this.idUser);
    this._userservice.sendCredit(credit.monto_solicitado, this.idUser, credit.descripcion).subscribe(
        Response => {
          console.log(Response);
          this.credito.reset();
        }
      );
  }
}

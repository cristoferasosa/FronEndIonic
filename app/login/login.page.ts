import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../api/user.service';
import {  Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { UiServiceService } from '../api/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public todo: FormGroup;
  private response: any;

  constructor(
    private formBuilder: FormBuilder,
    private _userService: UserService,
    private storage: Storage,
    private navCtrl: NavController,
    private uiService: UiServiceService
  ) {
    this.todo = this.formBuilder.group({
      correo: ['', Validators.required],
      contra: ['', Validators.required],
  });
}

  logForm() {
    let user = this.todo.value;
    console.log(user.correo, user.contra);

    this._userService.login(user.correo, user.contra).subscribe(
      Response => {
        console.log('Usted se ha logueado');
        console.log(Response);
        this.response = Response;
        this.storage.set('user', Response);
        this.navCtrl.navigateRoot('/paneladmin', { animated: true });
        // this.todo.reset();
      }, error => {
        console.log(<any> error);
        this.uiService.alertaInformatica('Usuario y/o contraseña incorrecta');
      }
    );
  }
}

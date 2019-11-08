import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../api/user.service';
import {  Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { UiServiceService } from '../api/ui-service.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.page.html',
  styleUrls: ['./createuser.page.scss'],
})
export class CreateuserPage {
  public person: FormGroup;

  constructor(private formBuilder: FormBuilder, private userservice: UserService) {
    this.person = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      edad: ['', Validators.required],
      dpi: ['', Validators.required],
      marital: ['', Validators.required],
      genero: ['', Validators.required],
      contra: ['', Validators.required],
    });
   }
   logForm() {
     const user = this.person.value;
     let newDataBinaryGender = 0;
     let newDataBinaryMarital = 0;

     if (user.genero === 'Masculino' || user.marital === 'Casado') {
       newDataBinaryGender = 1;
       newDataBinaryMarital = 1;
     } else {
       newDataBinaryGender = 2;
       newDataBinaryMarital = 2;
     }

     this.userservice.sendInfo(user.nombre, user.apellido,
       user.edad, user.dpi, user.correo, user.contra, newDataBinaryGender, newDataBinaryMarital).subscribe(
         Response => {
           console.log(Response);
           this.person.reset();
         },
         error => {
           alert('Algo salio mal');
           console.log(error as any);
         }
       );
   }
}

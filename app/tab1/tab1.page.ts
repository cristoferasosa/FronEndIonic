import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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

    if (user.genero === 'Masculino' || user.marital === 'Casado' ) {
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
          alert('Algo salio mal, Intente de Nuevo');
          console.log(error as any);
        }
      );
  }
}

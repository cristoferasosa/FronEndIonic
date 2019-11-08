import { Component} from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-listcredits',
  templateUrl: './listcredits.page.html',
  styleUrls: ['./listcredits.page.scss'],
})
export class ListcreditsPage {
  public creditos: any;
  constructor(private userservice: UserService) { }

  ObtenerCreditos() {
    this.userservice.getCredits().subscribe(
      Response => {
        this.creditos = Response;
        console.log(this.creditos);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;

  // tslint:disable-next-line:variable-name
  constructor(public _http: HttpClient) {
    this.url = 'https://c544ba11.ngrok.io/';
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public sendInfo(
    nombre: string, apellido: string,
    edad: number, dpi: string, correo: string,
    contra: string, genero: number, marital: number): Observable<any> {

    let user = {
    'tb_credenciales': {
      'id_rol': 1,
      'correo': correo,
      'contrasena': contra
    },
    'nombre': nombre,
    'apellido': apellido,
    'edad': edad,
    'dpi': dpi,
    'id_estado_marital': marital,
    'id_tipo_cliente': 1,
    'id_genero': genero
  };

    return this._http.post(this.url + 'api/accountmanagement/usuarios', JSON.stringify(user), this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)

    );
  }

    public getUser() {
      return this._http.get(this.url + 'api/accountmanagement/usuarios', this.httpOptions).pipe(
        retry(1),
        catchError(this.errorHandl)
      );
    }
  public deleteUser(id: number) {
    return this._http.delete(this.url + 'api/accountmanagement/usuarios/{id}' + this.deleteUser.apply).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  public login(correo: string, contra: string) {
    let login = {
      'correo' : correo,
      'contraseña': contra
    };
    return this._http.post(this.url + 'api/accountmanagement/login', login, this.httpOptions).pipe(
        retry(1),
        catchError(this.errorHandl)
    );
  }
  public getCredits() {
    return this._http.get(this.url + 'api/loanmanagement/getAll', this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
  public sendCredit( monto_solicitado: number, id_usuario: number,  descripcion: string) {
    const credito = {
        'monto_solicitado': monto_solicitado,
        'id_cantidad_cuota': 1,
        'id_usuario': id_usuario,
        'estado': 'P',
        'descripcion': descripcion
    };
    return this._http.post(this.url + 'api/loanmanagement/generate', credito, this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
  errorHandl(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ha Ocurrido un error:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Algo malo paso; please try again later.');
  }
}

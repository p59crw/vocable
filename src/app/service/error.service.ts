import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorService {

  constructor() { }

  public displayError(title: string, message: string) {
    Swal({
      type: 'error',
      title: title,
      text: message,
      footer: 'If the error persists, please contact the adminstrator.'
    });
  }

}

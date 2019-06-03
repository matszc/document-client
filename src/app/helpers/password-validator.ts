import {AbstractControl} from '@angular/forms';

export class PasswordValidator {
  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('Password').value;
    const  confirmPassword = AC.get('RepeatPassword').value;
    if (password === confirmPassword) {
      return null;
    } else {
      AC.get('RepeatPassword').setErrors({MatchPassword: true});
    }
  }
}

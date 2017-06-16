import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'form-guide',
  templateUrl: 'app/components/form-guide/form-guide.component.html'
})
export class FormGuideComponent {
  formModel: FormGroup; // links the model to the form element
  userName: FormControl;
  ssn: FormControl;
  passwordsGroup: FormGroup;
  pw: FormControl;
  confPw: FormControl;

  constructor() {
    this.userName = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.ssn = new FormControl('606-50-9021', this.ssnValidator);
    this.pw = new FormControl();
    this.confPw = new FormControl();

    this.passwordsGroup = new FormGroup({
      'pw': this.pw,
      'confPw': this.confPw
    });

    this.formModel = new FormGroup({
      'username': this.userName,
      'ssn': this.ssn,
      'passwordsGroup': this.passwordsGroup
    });
  }

  /**
   * SSN validator
   * @param control
   * @returns {{ssn: boolean}}
   */
  ssnValidator(control: FormControl): any {
    console.log('Performing ssnValidator execution.');
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : {ssn: true};
  }

  // asyncSsnValidator(control: FormControl): Observable<any> {
  //   console.log('Performing async ssnValidator execution.');
  //   const value = control.value || '';
  //   const valid = value.match(/^\d{9}$/);
  //   return Observable.of(valid ? null : {ssn: true}).delay(1000);
  // }

  onSubmit() {
    console.log('Form was submitted.');
    console.log('Is username valid? ' + this.userName.valid);
    console.log('Is ssn valid? ' + this.ssn.valid);
    console.log(JSON.stringify(this.formModel.value));
  }
}

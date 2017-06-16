"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormGuideComponent = (function () {
    function FormGuideComponent() {
        this.userName = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]);
        this.ssn = new forms_1.FormControl('606-50-9021', this.ssnValidator);
        this.pw = new forms_1.FormControl();
        this.confPw = new forms_1.FormControl();
        this.passwordsGroup = new forms_1.FormGroup({
            'pw': this.pw,
            'confPw': this.confPw
        });
        this.formModel = new forms_1.FormGroup({
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
    FormGuideComponent.prototype.ssnValidator = function (control) {
        console.log('Performing ssnValidator execution.');
        var value = control.value || '';
        var valid = value.match(/^\d{9}$/);
        return valid ? null : { ssn: true };
    };
    // asyncSsnValidator(control: FormControl): Observable<any> {
    //   console.log('Performing async ssnValidator execution.');
    //   const value = control.value || '';
    //   const valid = value.match(/^\d{9}$/);
    //   return Observable.of(valid ? null : {ssn: true}).delay(1000);
    // }
    FormGuideComponent.prototype.onSubmit = function () {
        console.log('Form was submitted.');
        console.log('Is username valid? ' + this.userName.valid);
        console.log('Is ssn valid? ' + this.ssn.valid);
        console.log(JSON.stringify(this.formModel.value));
    };
    return FormGuideComponent;
}());
FormGuideComponent = __decorate([
    core_1.Component({
        selector: 'form-guide',
        templateUrl: 'app/components/form-guide/form-guide.component.html'
    }),
    __metadata("design:paramtypes", [])
], FormGuideComponent);
exports.FormGuideComponent = FormGuideComponent;
//# sourceMappingURL=form-guide.component.js.map
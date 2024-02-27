import { Component } from '@angular/core';
import { ItHeaderComponent, ItIconComponent, ItMegamenuComponent, ItInputComponent, ItListModule, ItNavBarModule, ItLanguageSwitcherComponent, ItDropdownComponent, ItDropdownItemComponent, ItLinkComponent, ItButtonDirective } from 'design-angular-kit';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ItValidators } from 'design-angular-kit';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NgIf, RouterOutlet, ItHeaderComponent, ItIconComponent, ItMegamenuComponent, ItDropdownComponent, ItDropdownItemComponent, ItListModule, ItNavBarModule, ItLanguageSwitcherComponent, ItLinkComponent, ItInputComponent, ReactiveFormsModule, ItButtonDirective]
})
export class AppComponent {
  title = 'design-angular-kit-playground';
  myForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    const validators = [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern('[ab]+')
    ];
    this.myForm = this._fb.group({
      taxCode: [null, ItValidators.taxCode],
      vat: [null, ItValidators.vatNumber],
      cap: [null, ItValidators.cap],
      email: [null],
      url: [null],
      phone: [null],
      iban: [null, ItValidators.iban],
      myInput: ['', validators],
    });
  }

  value = '';
  savedValue = undefined;

  save(form: UntypedFormGroup) {
    this.savedValue = form.value.myInput;
  }

  markAllAsTouched() {
    this.myForm.markAllAsTouched();
  }
}

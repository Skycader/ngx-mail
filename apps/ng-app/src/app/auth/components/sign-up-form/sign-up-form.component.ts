import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../../../models/app-state.model';
import { logInAction } from '../../store/actions/log-in.action';
import { isSubmittingSelector } from '../../store/auth.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {
  public isSubmitting$: Observable<boolean> = this.store.pipe(
    select(isSubmittingSelector),
  );

  public signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    passwordAgain: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private store: Store<AppStateInterface>) { }

  public submit() {
    this.store.dispatch(
      logInAction({ authCredentials: this.signUpForm.value }),
    );
  }
}

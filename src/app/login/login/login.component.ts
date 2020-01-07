import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.form = new FormGroup({
    //   email: new FormControl('12@qq.com', Validators.compose([Validators.required, Validators.email])),
    //   password: new FormControl('', Validators.required)
    // });
    this.form = this.fb.group({
      email: ['123@qq.com', [Validators.required, Validators.email/*, this.validate*/]],
      password: ['', Validators.required]
    });

    this.form.controls.email.setValidators(this.validate);
  }

  onSubmit(data, ev: Event) {
    ev.stopPropagation();
    console.log(data );
  }


  // 自定义校验器

  validate(c: FormControl): {[key: string]: any} {
    if (!c.value) {
      return  null;
    }
    const pattern = /^tang+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: '邮件必须以tang开头'
    };

  }
}

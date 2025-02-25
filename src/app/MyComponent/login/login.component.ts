import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserdataService } from '../../services/userdata.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mastercenter: any;

  constructor(private authService: AuthService, private router: Router, private userdata: UserdataService, private alert: ToastrService) { }
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    centerno: [1, Validators.required]
  });

  ngOnInit() {
    this.Getcenters()
  }

  async onLogin() {
    let result: any

    if (this.loginForm.valid) {
      const user = this.loginForm.value// Mock user data
      this.userdata.uservalidation(user).subscribe((res) => {
        result = res;
        if (result.result === "pass") {
          this.alert.success(`Welcome ${user.username}!`);
          this.authService.login(user);
          this.router.navigate(['appmenu'], { state: this.loginForm.value });
        } else {
          this.alert.error("Sorry! this is restricted area")
        }
      })

    }
  }

  Getcenters() {
    this.userdata.center().subscribe((res) => {

      this.mastercenter = res;

    })
  }

}
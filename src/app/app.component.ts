import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service'
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inventory Management';
  userDetails: any;

  users:any;
  center: any;

  constructor(private userdata: UserdataService,private authService: AuthService,private router: Router,) {
    this.userDetails = this.authService.getUserDetails();
    this.users=userdata.users();
    this.GetCenter()
    console.log(this.center)
  }
  login(){
    this.router.navigate(['/login']);
  }
  logout(){
    localStorage.clear();
    this.authService.logout()
  }


  GetCenter() {
    this.userdata.centerbyID(1).subscribe((res) => {
  
      this.center = res;
      console.log(this.center)
  
    })
  }
  ngOnInit(){
    //this.userDetails = this.authService.getUserDetails();
    this.userDetails=localStorage.getItem('user');
    console.log(this.userDetails)
  }
}

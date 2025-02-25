import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css'
})
export class AppmenuComponent {
center:any;
user:any;
constructor(private authservice: AuthService,private router:Router,private userdata:UserdataService){}
ngOnInit(){
  this.user = window.history.state;
  this.GetCenter();
  console.log(this.user)
}
logout(){
  this.authservice.logout();
  this.router.navigate(["/"])

}
GetCenter() {
  this.userdata.centerbyID(this.user.centerno).subscribe((res) => {

    this.center = res;
    console.log(this.center)

  })
}

}

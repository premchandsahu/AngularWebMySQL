import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){
    
  }
center: any;
ngOnInit(): void{
this.center=window.history.state;
}
login(){
  this.router.navigate(['/login']);
}
}

import { Component } from '@angular/core';
import { UserdataService } from '../../services/userdata.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
users:any;
constructor(private userdata:UserdataService){
    this.userdata.users().subscribe((data)=>{
      // console.warn("data",data)
       this.users = data; 
    });
}

}

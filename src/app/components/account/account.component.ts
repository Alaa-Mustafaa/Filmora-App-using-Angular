import { Component ,OnInit} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  user_id:any;
  users:any[]=[]
  currentUser:any;
  newPassword:any;

  ngOnInit(): void {

 this.user_id=localStorage.getItem('user_id')
 this.users=JSON.parse(localStorage.getItem('users')!)

 this.currentUser=this.users[this.user_id];

 
  }

  ChangePAssword(){
    this.users[this.user_id].password=this.newPassword
    localStorage.setItem('users',JSON.stringify(this.users))
    Swal.fire({
      title: 'Success',
      text: 'Your password is changed successfully!',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  
  }

}

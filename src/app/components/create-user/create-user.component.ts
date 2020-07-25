import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: User = {
    names: '',
    lastNames: '',
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  postUser() {
    if (this.user.names && this.user.lastNames && this.user.email && this.user.password) {
      console.log(this.user);
      this.userService.postUser(this.user)
        .subscribe(
          res => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Usuario registrado',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['/users']);
          },
          err => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Usuario registrado',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['/users']);
          }
        );
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Debe completar todos los datos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}

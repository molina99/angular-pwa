import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(`http://localhost:3500/api/getUsers`);
  }

  postUser(user: object) {
    return this.http.post(`http://localhost:3500/api/postUser`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`http://localhost:3500/api/deleteUser/${id}`);
  }
}

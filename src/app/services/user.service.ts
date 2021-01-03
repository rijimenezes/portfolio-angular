import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyCookiesService } from './my-cookies.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authState = new BehaviorSubject(false); // observable of login status

  constructor(private myCookiesService: MyCookiesService) {
    this.getUser();
  }

  /**
   * check the user status as observable
   */
  public isLogged() {
    return this.authState.asObservable();
  }

  /**
   * check the status of user
   */
  public getUser(): string {
    const user = this.myCookiesService.get('portfolio:user');
    if (user) {
      this.authState.next(true);
    } else {
      this.authState.next(false);
    }
    return user;
  }

  /**
   * save the cookie for user
   * @param user user data as json in string
   */
  public logIn(user: string) {
    this.myCookiesService.create('portfolio:user', user);
    this.authState.next(true);
  }

  /**
   * remove the cookie of user
   */
  public logOut() {
    this.myCookiesService.delete('portfolio:user');
    this.authState.next(false);
  }

  /**
   * get the token to send to api
   */
  public getToken(): string{
    return this.myCookiesService.get('portfolio:token');
  }
}

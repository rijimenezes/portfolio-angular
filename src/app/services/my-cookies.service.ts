import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class MyCookiesService {

  constructor(
    private cookieService: CookieService
  ) { }

  /**
   * save a new cookie, expires in a day
   * @param name name of cookie to save
   * @param value value of cookie
   */
  public create(name: string, value: string): void{   
    this.cookieService.set(name,value,1);
  }

  /**
   * get a cookie by name
   * @param name name of cookie to get
   */
  public get(name: string): string{
    return this.cookieService.get(name);
  }

  /**
   * search if a cookie is saved
   * @param name name of cookie to search
   */
  public isRegistered(name: string): boolean{
    return this.cookieService.check(name);
  }

  /**
   * delete a cookie by name
   * @param name name of cookie to delete
   */
  public delete(name: string): void{
    this.cookieService.delete(name);
  }

  /**
   * returns all cookies
   */
  public getAll(): { [key:string]: string }{
    return this.cookieService.getAll();
  }

  /**
   * delete all cookies
   */
  public deleteAll(): void{
    this.cookieService.deleteAll();
  }

}

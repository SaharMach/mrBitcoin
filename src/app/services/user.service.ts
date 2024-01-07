import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userSubject = new BehaviorSubject<any>(this.loadUser());

  public signup(name: string) {
    const newUser = {
      name,
      coins: 100000,
      moves: []
    };
    this.saveUser(newUser);
    this.userSubject.next(newUser);
  }


  public logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
  
  public transferFund(contact: any, amount: number) {
    const user = this.userSubject.value;
    if (user.coins < amount) {
      console.log('Not enough coins!!');
      return;
    }
    const newUser = {
      ...user,
      coins: user.coins - amount,
      moves: [...user.moves, { contact, amount, at: new Date() }]
    };
    this.saveUser(newUser);
    this.userSubject.next(newUser);  
  }
  

  private saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private loadUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  public getUser() {
    return this.userSubject.asObservable();
  }
}

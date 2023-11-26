

import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrl: './moves-list.component.scss'
})
export class MovesListComponent implements OnInit {
  user: any; 
  userService = inject(UserService)
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      if (!this.user) {
        this.router.navigate(['/signup']);
      }
    })
  }
}


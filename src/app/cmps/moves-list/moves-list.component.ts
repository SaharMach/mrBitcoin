

import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrl: './moves-list.component.scss'
})
export class MovesListComponent implements OnInit {
  user: any; 
  userService = inject(UserService)
  btcRate?: number
  val?: number
  constructor(
    private router: Router,
    private bitcoinService: BitcoinService,

  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      if (!this.user) {
        this.router.navigate(['/signup']);
      } else {
        this.user.moves.forEach((move: any) => {
          this.bitcoinService.getRate(move.amount).subscribe(
            rate => move.btcRate = rate,
            err => {
              console.error('Error calc rate:', err);
            }
          );
        });
      }
    });
}


}


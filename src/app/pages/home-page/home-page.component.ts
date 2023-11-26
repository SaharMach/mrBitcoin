import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BitcoinService } from '../../services/bitcoin.service';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  user: any; 
  btcRate?: number;
  private userSubscription!: Subscription;

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.userService.getUser().subscribe(user => {
      this.user = user;
      if (!this.user) {
        this.router.navigate(['/signup']);
      }
    })
    this.getUserBtcRate();
  }
  private getUserBtcRate() {
    console.log('btcRate');
    
    this.bitcoinService.getRate(this.user.coins).subscribe(
      rate => {
        console.log('rate', rate)
        this.btcRate = rate
      },
      err => {
        console.error('Error calc rate:', err)
      }
    )
  }
}

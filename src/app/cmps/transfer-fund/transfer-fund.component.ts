import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Input } from '@angular/core';
import { Contact } from '../../models/contact.model';
@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrl: './transfer-fund.component.scss'
})
export class TransferFundComponent {
  amount!: any
  @Input() contact!: Contact

  userService = inject(UserService)
  onTransfer() {
    console.log('this.amount:', this.amount)
    this.userService.transferFund(this.contact, this.amount)
    console.log('this.userService.getUser():', this.userService.getUser().subscribe(res => {
      console.log('res:', res)
    }))
    this.amount = ''
  }
}

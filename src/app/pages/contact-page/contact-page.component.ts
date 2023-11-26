import { ContactService } from '../../services/contact.service';
import { Observable, Subscription ,take} from 'rxjs';
import { Contact } from '../../models/contact.model';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit, OnDestroy{
    contactService = inject(ContactService)
    subscription!: Subscription
    contacts$!: Observable<Contact[]>
    selectedContactId!: string


    ngOnInit(): void {
      this.contacts$ = this.contactService.contacts$
      console.log('this.contacts$:', this.contacts$)
    }

    onSelectContactId(contactId: string) {
      this.selectedContactId = contactId
  }
    
  ngOnDestroy(): void {
    this.subscription?.unsubscribe?.()
}
}

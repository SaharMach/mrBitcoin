import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent {
  @Input() contact!: Contact
  @Output() remove = new EventEmitter()
  isContactOpen = false

  public toggleContactDetails() {
    console.log('entered:')
    this.isContactOpen = !this.isContactOpen
  }
}

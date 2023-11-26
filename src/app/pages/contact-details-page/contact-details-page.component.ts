import { Component, EventEmitter, Input, Output,OnDestroy, OnInit, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Observable, Subject, Subscription, concatMap, lastValueFrom, map, mergeMap, switchMap, takeUntil, tap } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrl: './contact-details-page.component.scss'
})
export class ContactDetailsPageComponent implements OnInit, OnDestroy {
  // @Input() contact!: Contact
  // @Output() remove = new EventEmitter()



  private contactService = inject(ContactService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  destroySubject$ = new Subject<void>()

  subscription!: Subscription
  ans!: string
  contact: Contact | null = null
  contact$!: Observable<Contact>

  async ngOnInit(): Promise<void> {
    // this.contact$ = this.route.data.pipe(map(data => data['contact']))

    this.contact$ = this.route.params.pipe(
        switchMap(params => this.contactService.getContactById(params['id']))
    )

    // Ok'ish solution...
    // this.route.params.subscribe(async params => {
    //     const id = params['id']
    //     const pet = await lastValueFrom(this.petService.getById(id))
    //     console.log('pet:', pet)
    // })

    // VERY BAD, never subscribe inside a subscribe!
    // this.route.params.subscribe(params => {
    //     const id = params['id']
    //     this.petService.getById(id).subscribe(pet => {
    //         console.log('pet:', pet)
    //     })
    // })



    // First Day
    // this.pet$ = this.petService.getById(this.petId)

    // this.petService.getById(this.petId)
    //     .pipe(takeUntil(this.destroySubject$))
    //     .subscribe(pet=>this.pet=pet)

    // this.pet = await lastValueFrom(this.petService.getById(this.petId))
  }
  
  onDeleteContact(contactId: string) {
    console.log(contactId);
    
    this.contactService.remove(contactId)
    .subscribe({
      next: this.onBack.bind(this),
      error: err => console.log('err:', err)
  })
  }

  onBack() {
      this.router.navigateByUrl('/contact')
      // this.router.navigate(['/'], { queryParams: { name: 'JJojo', age: 30 } })
  }


  ngOnDestroy(): void {
      // this.subscription?.unsubscribe()
      this.destroySubject$.next()
      this.destroySubject$.complete()

  }


}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsletterComponent implements OnInit {

  private userInfo: User = { name: '', email: ''};
  profileForm: FormGroup;
  constructor(private fb: FormBuilder, private _service: ProductService) { 
    this.profileForm = this.fb.group({
      userEmail: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.userInfo.name = this.profileForm?.value["name"];
    this.userInfo.email = this.profileForm?.value["userEmail"];
    this._service.subscribeToNewsLetter(this.userInfo)
    .subscribe(res => {
      console.table(res);
      alert(res.message);
      this.profileForm.reset();
    });
  }

}

import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [

    CommonModule,MatSlideToggleModule,MatRadioModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private router: Router) { }

  toggleValue: string = "Locataire";

  HandleToggle(key: string): void {
    this.toggleValue = key;
    console.log('Toggle value changed', this.toggleValue);

  }

  handleSubmit(): void {

    if (this.toggleValue == "Locataire") {
      console.log('Form submitted', this.toggleValue);
      // Perform form submission logic here
      // Example:
      // localStorage.setItem('property', JSON.stringify(this.property));
      localStorage.setItem('connected', "Yes");
      this.router.navigate(['/']);
    }else{
      console.log('Form submitted', this.toggleValue);
      // Perform form submission logic here
      // Example:
      localStorage.setItem('connected', "Yes");
      this.router.navigate(['/home']);
    }



  }

}

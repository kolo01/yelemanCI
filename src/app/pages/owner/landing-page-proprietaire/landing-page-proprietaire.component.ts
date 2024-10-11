import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-landing-page-proprietaire',
  standalone: true,
  imports: [MatGridListModule, ],
  templateUrl: './landing-page-proprietaire.component.html',
  styleUrl: './landing-page-proprietaire.component.scss'
})
export class LandingPageProprietaireComponent {
  title = "Espace proprietaire"

}

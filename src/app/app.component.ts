import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageServiceService } from './services/local-storage-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  email = "info@gmail.com"
  title = 'Yeleman CI';
  connected :any = " "
  title2: string=""



  constructor(private localStorageService: LocalStorageServiceService) {
    // Utilise le service pour accéder à localStorage
    const storedTitle = this.localStorageService.getItem('title');
    this.title = storedTitle ? storedTitle : 'Titre par défaut';
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const storedTitle = this.localStorageService.getItem('title');
    this.title = storedTitle ? storedTitle : 'Titre par défaut';
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NxWelcomeComponent, RouterModule, NavbarComponent]
})
export class AppComponent {
  title = 'Digital Camera Shop VietNam';
}

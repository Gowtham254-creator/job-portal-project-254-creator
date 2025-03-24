import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from './common/menu-bar/menu-bar.component'; // Correct import
import { FooterComponent } from './common/footer/footer.component'; // Correct import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, MenubarComponent, FooterComponent]  // Correct imports
})
export class AppComponent {
  // Your component logic here (if any)
}

import { Component } from '@angular/core';
import { ItHeaderComponent, ItIconComponent, ItMegamenuComponent, ItDropdownModule, ItListModule, ItNavBarModule, ItLanguageSwitcherComponent, ItDropdownComponent, ItDropdownItemComponent, ItLinkComponent } from 'design-angular-kit';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ItHeaderComponent, ItIconComponent, ItMegamenuComponent, ItDropdownComponent, ItDropdownItemComponent, ItListModule, ItNavBarModule, ItLanguageSwitcherComponent, ItLinkComponent]
})
export class AppComponent {
  title = 'design-angular-kit-playground';
}

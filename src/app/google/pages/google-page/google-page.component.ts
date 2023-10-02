import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-google-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './google-page.component.html',
  styleUrls: ['./google-page.component.scss'],
})
export class GooglePageComponent {
  private readonly tokenService = inject(TokenService);
  protected readonly authUrl$ = this.tokenService.getAuthorizationURL();
}

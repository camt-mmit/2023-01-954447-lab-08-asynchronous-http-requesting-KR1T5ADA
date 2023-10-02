import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-require-token-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './require-token-page.component.html',
  styleUrls: ['./require-token-page.component.scss'],
})
export class RequireTokenPageComponent {
  private readonly TokenService = inject(TokenService);

  protected readonly tokenReady$ = this.TokenService.tokenReady$;

  protected async login(): Promise<void> {
    const url = await this.TokenService.getAuthorizationURL();
    location.href = `${url}`;
  }

  //protected readonly authUrl$ = this.TokenService.getAuthorizationURL();
}

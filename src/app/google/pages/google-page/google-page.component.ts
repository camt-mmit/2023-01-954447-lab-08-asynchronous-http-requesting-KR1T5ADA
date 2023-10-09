import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../services/token.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-google-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    MatInputModule,
    RouterLink,
  ],
  templateUrl: './google-page.component.html',
  styleUrls: ['./google-page.component.scss'],
})
export class GooglePageComponent {
  private readonly tokenService = inject(TokenService);
  protected readonly authUrl$ = this.tokenService.getAuthorizationURL();
}

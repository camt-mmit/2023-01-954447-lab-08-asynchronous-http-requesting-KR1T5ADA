import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetViewComponent } from 'src/app/star-war/planet/planet-view/planet-view.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PlanetService } from 'src/app/star-war/services/planets.service';

@Component({
  selector: 'app-planet-view-page',
  standalone: true,
  imports: [CommonModule, PlanetViewComponent],
  templateUrl: './planet-view-page.component.html',
  styleUrls: ['./planet-view-page.component.scss'],
})
export class PlanetViewPageComponent {
  private readonly planetService = inject(PlanetService);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.params.pipe(
    switchMap((params) => this.planetService.get(params['id'])),
  );
}

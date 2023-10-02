import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchData } from 'src/app/star-war/models';
import { map, switchMap } from 'rxjs';
import { PlanetListComponent } from 'src/app/star-war/planet/planet-list/planet-list.component';
import { PlanetService } from 'src/app/star-war/services/planets.service';

@Component({
  selector: 'app-planet-list-page',
  standalone: true,
  imports: [CommonModule, PlanetListComponent],
  templateUrl: './planet-list-page.component.html',
  styleUrls: ['./planet-list-page.component.scss'],
})
export class PlaneteListPageComponent {
  private readonly planetService = inject(PlanetService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.queryParams.pipe(
    switchMap((params) =>
      this.planetService.getAll(params).pipe(
        map((data) => ({
          params,
          data,
        })),
      ),
    ),
  );

  protected doSearchDataChange(searchData: SearchData): void {
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: searchData,
    });
  }
}

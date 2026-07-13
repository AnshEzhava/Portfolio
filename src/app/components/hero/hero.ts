import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE, STACK } from '../../shared/data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly year = '2025';
  protected readonly stack = STACK;
}

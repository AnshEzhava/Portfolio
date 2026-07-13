import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE, STACK } from '../../shared/data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly stack = STACK;
}

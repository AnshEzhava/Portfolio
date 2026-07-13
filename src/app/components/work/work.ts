import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../shared/data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './work.html',
  styleUrl: './work.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Work {
  protected readonly projects = PROJECTS;
}

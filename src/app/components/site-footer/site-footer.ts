import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE, REPO_URL } from '../../shared/data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly profile = PROFILE;
  protected readonly repo = REPO_URL;
  protected readonly year = '2025';
}

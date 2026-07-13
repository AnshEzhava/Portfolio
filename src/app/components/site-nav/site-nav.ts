import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { PROFILE } from '../../shared/data';

@Component({
  selector: 'app-site-nav',
  standalone: true,
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteNav implements OnInit, OnDestroy {
  protected readonly profile = PROFILE;
  protected readonly clock = signal('--:--:--');
  protected readonly theme = signal<'light' | 'dark'>('light');

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    const stored =
      (typeof localStorage !== 'undefined' &&
        (localStorage.getItem('theme') as 'light' | 'dark' | null)) ||
      null;
    const prefersDark =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme(stored ?? (prefersDark ? 'dark' : 'light'));

    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  protected toggleTheme(): void {
    this.applyTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(next: 'light' | 'dark'): void {
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage unavailable — ignore */
    }
  }

  private tick(): void {
    try {
      this.clock.set(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: this.profile.timeZone,
        }).format(new Date())
      );
    } catch {
      this.clock.set(
        new Date().toLocaleTimeString('en-GB', { hour12: false })
      );
    }
  }
}

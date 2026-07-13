import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteNav } from '../../components/site-nav/site-nav';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Work } from '../../components/work/work';
import { Contact } from '../../components/contact/contact';
import { SiteFooter } from '../../components/site-footer/site-footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SiteNav, Hero, About, Work, Contact, SiteFooter],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}

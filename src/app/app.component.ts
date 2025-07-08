import { Component, OnInit, OnDestroy } from '@angular/core';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'PortFolio';
  currentText = '';
  currentIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  typingSpeed = 150;
  deletingSpeed = 100;
  delayBetweenWords = 2000;

  words = ['Developer...', 'Designer...', 'Student...'];
  private typingInterval: any;

  // Page navigation properties
  showArrow = false;
  private arrowHideTimeout: any;
  currentPageIndex = 0;
  maxPages = 4; // Home, About, Projects, Contact

  // Define your pages with content
  pages = [
    { title: 'Home', content: 'home' },
    { title: 'About', content: 'about' },
    { title: 'Projects', content: 'projects' },
    { title: 'Contact', content: 'contact' },
  ];

  ngOnInit() {
    this.startTypingAnimation();
    inject();
    injectSpeedInsights();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
    if (this.arrowHideTimeout) {
      clearTimeout(this.arrowHideTimeout);
    }
  }

  startTypingAnimation() {
    this.typingInterval = setInterval(
      () => {
        this.typeText();
      },
      this.isDeleting ? this.deletingSpeed : this.typingSpeed
    );
  }

  typeText() {
    const currentWord = this.words[this.currentIndex];
    if (this.isDeleting) {
      this.currentCharIndex--;
      this.currentText = currentWord.substring(0, this.currentCharIndex);
    } else {
      this.currentCharIndex++;
      this.currentText = currentWord.substring(0, this.currentCharIndex);
    }
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
      typingElement.innerHTML = this.currentText || '&nbsp;';
    }
    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      this.isDeleting = true;
      clearInterval(this.typingInterval);
      setTimeout(() => this.startTypingAnimation(), this.delayBetweenWords);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
      clearInterval(this.typingInterval);
      setTimeout(() => this.startTypingAnimation(), 500);
    }
  }

  // Page navigation methods
  onRightEdgeHover() {
    // Only show arrow if there are more pages to navigate to
    if (this.currentPageIndex < this.maxPages - 1) {
      this.showArrow = true;
      if (this.arrowHideTimeout) {
        clearTimeout(this.arrowHideTimeout);
      }
    }
  }

  onRightEdgeLeave() {
    this.arrowHideTimeout = setTimeout(() => {
      this.showArrow = false;
    }, 100);
  }

  onArrowHover() {
    this.showArrow = true;
    if (this.arrowHideTimeout) {
      clearTimeout(this.arrowHideTimeout);
    }
  }

  onArrowLeave() {
    this.showArrow = false;
  }

  onArrowClick() {
    if (this.currentPageIndex < this.maxPages - 1) {
      this.currentPageIndex++;
      this.showArrow = false; // Hide arrow after clicking
      console.log(`Navigated to page ${this.currentPageIndex}`);
    }
  }

  goBack() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
    }
  }

  openLink(option: string) {
    if (option == 'github') {
      window.open('https://github.com/AnshEzhava', '_blank');
    } else if (option == 'linkedin') {
      window.open(
        'https://www.linkedin.com/in/ansh-baiju-646984285/',
        '_blank'
      );
    } else if (option == 'instagram') {
      window.open('https://www.instagram.com/anshbaiju', '_blank');
    } else if (option == 'repo') {
      window.open('https://github.com/AnshEzhava/Portfolio', '_blank');
    }
  }
}

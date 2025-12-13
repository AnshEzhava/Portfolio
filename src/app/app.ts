import { Component, OnInit, OnDestroy } from '@angular/core';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
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

  showToast = false;
  toastMessage = '';
  toastTimeout: any;
  currentPageIndex = 0;

  ngOnInit() {
    this.startTypingAnimation();
    inject();
    injectSpeedInsights();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
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
    } else if (option == 'mail') {
      this.copyToClipboard('anshdpsg@gmail.com');
    }
  }

  async copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      this.showToastNotification('Email copied to clipboard!');
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      this.showToastNotification('Email copied to clipboard!');
    }
  }

  showToastNotification(message: string) {
    this.toastMessage = message;
    this.showToast = true;

    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastTimeout = setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}

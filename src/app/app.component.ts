import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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

  words = ['Developer...', 'Designer...', 'Undergrad...'];
  private typingInterval: any;

  ngOnInit() {
    this.startTypingAnimation();
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
}

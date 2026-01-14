import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-component',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Kaitlyn Eng Resume';

  birthDate: Date = new Date(2004, 8, 10);
  
  currentDate: Date = new Date();
  currentMonth: number = this.currentDate.getMonth() + 1;
  currentYear: number =this.currentDate.getFullYear();
  currentDay: number = this.currentDate.getDate();

  getAge(): number {
    let age = this.currentYear - this.birthDate.getFullYear();
    if (
      this.currentMonth < this.birthDate.getMonth() + 1 ||
      (this.currentMonth === this.birthDate.getMonth() + 1 && this.currentDay < this.birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
}

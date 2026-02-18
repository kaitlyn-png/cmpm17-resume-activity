import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { Experience } from "./experience/experience.model";
import { EXPERIENCES } from "./experience/experience.mock";
import { Signal } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-component',
  imports: [ MatExpansionModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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

  name: string = 'Kaitlyn Eng';
  title = 'Kaitlyn Eng Resume';
  profilePic: string = 'images/kaitlyn-image.jpg';
  leadership: string = '';
  skills: string[] = [];
  isAdmin = true;

  // ------------------------- INPUTS AND OUTPUTS -------------------------

  // ------------------------- LOCAL UI STATE -----------------------------

  /** Working Experience **/
  experiences : Experience[] = EXPERIENCES;

  // ------------------------- WRITABLE SIGNALS ---------------------------
  selectedName: WritableSignal<string>= signal('Jialai');

  // ------------------------- COMPUTED DATA ------------------------------

  /** Computed signal that store my working experience **/
  myExperience: Signal<Experience | undefined > = computed( () => {
    return this.experiences.find(
      exp => exp.name === this.selectedName()
    )
  })

  // ------------------------- EVENT HANDLING -----------------------------

  changeStudent(){
    this.selectedName.set('Kaitlyn');
  }

  // ------------------------- OTHER --------------------------------------

  // ------------------------- LOAD AND CLEANUP ---------------------------
}
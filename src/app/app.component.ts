import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'testimonial';
  data: {
    id: number;
    show: boolean;
    testimony: string;
    name: string;
    designation: string;
    image: string;
  }[] = [
    {
      id: 0,
      show: true,
      testimony:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
      name: 'Tanya Sinclair',
      designation: 'UX Engineer',
      image: '../assets/image-tanya.jpg',
    },
    {
      id: 1,
      show: false,
      testimony:
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      name: 'John Tarkpor',
      designation: 'Junior Front-end Developer',
      image: '../assets/image-john.jpg',
    },
  ];
  index: number = 0;
  ngOnInit(): void {}

  clickPrev = () => {
    if (this.index === 0) {
      this.index = this.data.length - 1;
    } else {
      this.index -= 1;
    }
    this.data.forEach((d) => {
      if (d.id === this.index) {
        d.show = true;
      } else {
        d.show = false;
      }
    });
  };

  clickNext = () => {
    if (this.index === this.data.length - 1) {
      this.index = 0;
    } else {
      this.index += 1;
    }
    this.data.forEach((d) => {
      if (d.id === this.index) {
        d.show = true;
      } else {
        d.show = false;
      }
    });
  };
}

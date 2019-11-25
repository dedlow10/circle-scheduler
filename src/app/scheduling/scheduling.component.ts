import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.less']
})
export class SchedulingComponent implements OnInit {

  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  counselors = [
    { name: "Erica" }, 
    { name: "Sally" },
    { name: "Suzy" },
    { name: "Dan" },
    { name: "Dan" },
    { name: "Dan" }
  ];

  bunkSchedules = [
    {
        "Bunk": "1",
        "Mon-P1": "TB",
        "Mon-P2": "Circle Time",
        "Mon-P3": "Gaga",
        "Mon-Rest": "Bunk Picture",
        "Mon-P4": "AC-1",
        "Mon-P5": "Yoga",
        "Mon-P6": "Swim Test"
    },
    {
        "Bunk": "2",
        "Mon-P1": "TB",
        "Mon-P2": "Circle Time",
        "Mon-P3": "Swim Test",
        "Mon-Rest": "Shower",
        "Mon-P4": "Gaga",
        "Mon-P5": "Tennis",
        "Mon-P6": "BB"
    },
    {
        "Bunk": "3",
        "Mon-P1": "TB",
        "Mon-P2": "Swim Test",
        "Mon-P3": "Circle Time",
        "Mon-Rest": "Shower",
        "Mon-P4": "Gaga",
        "Mon-P5": "Archery",
        "Mon-P6": "Tennis"
    },
    {
        "Bunk": "4",
        "Mon-P1": "Gaga",
        "Mon-P2": "AC-1",
        "Mon-P3": "TB",
        "Mon-Rest": "Bunk Picture",
        "Mon-P4": "Circle Time",
        "Mon-P5": "Swim Test",
        "Mon-P6": "Safari"
    },
    {
        "Bunk": "5",
        "Mon-P1": "Tennis",
        "Mon-P2": "TB",
        "Mon-P3": "Circle Time",
        "Mon-Rest": "Bunk Picture",
        "Mon-P4": "Swim Test",
        "Mon-P5": "Canoe",
        "Mon-P6": "AC-1",
        "Mon-Rec": "Shower"
    },
    {
        "Bunk": "6",
        "Mon-P1": "AC-1",
        "Mon-P2": "TB",
        "Mon-P3": "Circle Time",
        "Mon-Rest": "Choice Signups",
        "Mon-P4": "Empowerment",
        "Mon-P5": "Swim Test/Tube-1",
        "Mon-P6": "Canoe"
    },
    {
        "Bunk": "7",
        "Mon-P1": "Dance",
        "Mon-P2": "Swim Test/Tube-1",
        "Mon-P3": "TB",
        "Mon-Rest": "Choice Signups",
        "Mon-P4": "Circle Time",
        "Mon-P5": "AC-1",
        "Mon-P6": "Archery"
    },
    {
        "Bunk": "8",
        "Mon-P1": "TB",
        "Mon-P2": "Circle Time",
        "Mon-P3": "AC-1",
        "Mon-Rest": "Choice Signups",
        "Mon-P4": "Archery",
        "Mon-P5": "Blankets",
        "Mon-P6": "Swim Test/Tube-1",
        "Mon-Rec": "Shower"
    },
    {
        "Bunk": "9",
        "Mon-P1": "TB",
        "Mon-P2": "Blankets",
        "Mon-P3": "Circle Time",
        "Mon-Rest": "Choice Signups",
        "Mon-P4": "Swim Test/Tube-1",
        "Mon-P5": "Empower",
        "Mon-P6": "Dance",
        "Mon-Rec": "Shower"
    }
]


  constructor() { }

  ngOnInit() 
  {

  }

  getMyOptions(counselor, day) {
    return [{id: '1', name: "Swimming"}];
  }
}

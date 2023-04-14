import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class VehicleListComponent  implements OnInit {

  public vehicles = [
    {
      name: "Jeep Wrangler",
      year: 2002,
    },
    {
      name: "Ford Mustang",
      year: 1966,
    },
    {
      name: "Mercedes 350SL",
      year: 1984,
    },
  ];

  constructor() { }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorates',
  templateUrl: './directorates.component.html',
  styleUrls: ['./directorates.component.css']
})
export class DirectoratesComponent implements OnInit {

  directorates: any

  constructor() { }

  ngOnInit(): void {
    this.directorates = [
      { title: 'E-Government', path: 'e-government' },
      { title: 'Capacity Building', path: 'capacity-building'},
      { title: 'Infrastructure Development', path: 'infrastructure-development' },
      { title: 'Intellectual Property', path: 'intellectual-property' },
      { title: 'Emission and Usage Regulatory', path: 'emission-and-usage' },
      { title: 'Innovation and Technology Transfer', path: 'innovation-and-technology' },
      { title: 'Quality Infrastructure', path: 'quality-infrastructure' }
    ]
  }

}

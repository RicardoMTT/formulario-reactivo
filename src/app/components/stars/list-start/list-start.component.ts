import { Component, OnInit } from '@angular/core';
import { StarService } from '../../star.service';

@Component({
  selector: 'app-list-start',
  templateUrl: './list-start.component.html',
  styleUrls: ['./list-start.component.css']
})
export class ListStartComponent implements OnInit {

  starss:any[];
  constructor(public svcStar:StarService) { }

  ngOnInit() {
    this.starss = this.svcStar.getStars();
    console.log(this.starss)
  }

}

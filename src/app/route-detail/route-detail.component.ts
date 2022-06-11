import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../_services/share-service.service';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {

  route : any
  constructor(private share: ShareServiceService) { }

  ngOnInit(): void {
    this.route = this.share.sharingValue;
    console.log(this.route);
  }

}

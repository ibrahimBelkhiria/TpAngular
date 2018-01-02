import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../services/publication.service';
import {Publication} from '../entities/publication';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {


  publication: Publication;



  constructor(pubService: PublicationService, route: ActivatedRoute) {

       pubService.getPublicationById(+route.snapshot.params['id']).subscribe(response => this.publication = response);
  }




  ngOnInit() {
    console.log(this.publication);
  }

}

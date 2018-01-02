import {Component, OnInit} from '@angular/core';
import {Publication} from '../entities/publication';
import {PublicationService} from '../services/publication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  publications: Publication[];
  contenu: string;

  filterBy: string;


  constructor(private pubService: PublicationService) {
   pubService.getAllPublications().subscribe(response => this.publications = response);


  }

  ngOnInit() {
    

  }



  addPublication(contenu: string) {

    let publication: any;
    publication = {
      'id': 3,
      'contenu': contenu,
      'date': '13/12/2017',
      'user': {

        'id': 1,
        'firstname': 'ibrahim',
        'lastname': 'belkhiria',
        'imageUrl': 'http://www.allenovery.com/people/PublishingImages/PublishingRollupImage_simon.roderick.jpg',
        'email': 'ibrahim@gmail.com'
      },
      'commentaires': [{
        'id': 1,
        'contenu': 'bonjour ibrahim hello_world for_name and_like ',
        'user': {
          'id': 1,
          'firstname': 'mohamed',
          'lastname': 'ali',
          'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79aVxRokUyllD4bCUCIwEoDlBbEZ7zhWcWybCQD_1hquTjIkN',
          'email': 'dhia@gmail.com'
        },
        'date': '13/12/2017'
      }, {
        'id': 2,
        'contenu': 'bonjour Asma',
        'user': {
          'id': 2,
          'firstname': 'ibrahim',
          'lastname': 'belkhiria',
          'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79aVxRokUyllD4bCUCIwEoDlBbEZ7zhWcWybCQD_1hquTjIkN',
          'email': 'ibrahim@gmail.com'
        },
        'date': '13/12/2017'
      }]

    };


    this.pubService.postPublication(publication).subscribe(res => {console.log(res); } );



  }

  remove(index: number) {

    this.publications.splice(index, 1);
      this.pubService.deletePublication(index).subscribe();
    console.log(index);
  }







}

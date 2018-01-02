import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstname: string;
  lastname: string;
  image: string;


  user: any = {
    firstname: 'ibrahim',
    lastname: 'belkhiria',
    image : 'http://www.allenovery.com/people/PublishingImages/PublishingRollupImage_simon.roderick.jpg'
  };


  publications: any = [
    {
      contenu: 'premiere publication',
      date: '8/11/2017'
    },
    {
      contenu: 'deuxieme publication',
      date: '8/11/2017'
    },
    {
      contenu: 'troisieme publication',
      date: '8/11/2017'
    },


  ];


   show= false;

  constructor() {

    console.log(this.user.image);
  }


  showForm() {
    this.show = true;
  }

  changeUser(firstname, lastname, image) {
      console.log(firstname);
      this.show = false;

      // const user: any = [{
        // firstname:
      // }];


  }


  cancelChange() {
    this.show = false;
  }


  publier(publication) {

    this.publications.push({contenu: publication.value, date: '8/11/2017'});
  }
  remove(index: number) {

    this.publications.splice(index, 1);

    console.log(index);
  }





  ngOnInit() {

  }

}

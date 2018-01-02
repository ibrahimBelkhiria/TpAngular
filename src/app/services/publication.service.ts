import { Injectable } from '@angular/core';
import {Publication} from '../entities/publication';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PublicationService {

  publications: Publication[] ;


    constructor(private http: HttpClient) {
          
    }



     getAllPublications(): Observable<Publication[]> {
      return this.http.get<Publication[]>('http://localhost:3000/publications');

    }

    getPublicationById(id: number): Observable<Publication> {
      return this.http.get('http://localhost:3000/publications/' + id);
    }


    postPublication(publication: Publication) {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
     return this.http.post('http://localhost:3000/publications', publication, httpOptions);
    }

    updatePublication(publication: Publication, id ) {
      return this.http.put('http://localhost:3000/publications/' + id, publication);
    }

    deletePublication(id: number) {

      return this.http.delete('http://localhost:3000/publications/' + id);
    }


}

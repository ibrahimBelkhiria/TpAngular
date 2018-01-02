
import {User} from './user';
import {Commentaire} from './commentaire';

export class Publication {
  id: number;
  contenu: string;
  user: User;
  date: Date;
  commentaires: Commentaire[];

}

import { Component } from '@angular/core';
import {Observable} from 'rxjs/index';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nwks: Observable<NWK[]>;
  private nwksCollection: AngularFirestoreCollection<NWK>;

  public constructor(db: AngularFirestore) {
    this.nwksCollection = db.collection<NWK>('nwks');
    this.nwks = this.nwksCollection.valueChanges();
  }

}



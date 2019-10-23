import { Component , OnInit} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app3';

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyBnVwjoy1ae5vcIDSarHTc2-cckVbezJVE",
      authDomain: "jta-instagram-clone-843df.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-843df.firebaseio.com",
      projectId: "jta-instagram-clone-843df",
      storageBucket: "jta-instagram-clone-843df.appspot.com",
      messagingSenderId: "507937211218",
      appId: "1:507937211218:web:8767ab8118ba8f85c8708b",
      measurementId: "G-EDKY3LEWBC"
    };
    firebase.initializeApp(firebaseConfig);
  }
}

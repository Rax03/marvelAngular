import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Asegúrate de usar '/compat' si estás usando AngularFire 7+
import firebase from 'firebase/compat/app'; // Asegúrate de usar '/compat' si estás usando AngularFire 7+

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public auth: AngularFireAuth) {}

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        console.log('Successfully logged in!', result);
      }).catch(error => {
        console.error('Error during login:', error);
      });
  }

  addCharacter() {
    // Aquí debes agregar la lógica para añadir personaje.
    console.log('Character added!');
  }
}
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Asegúrate de usar '/compat' si estás usando AngularFire 7+
import firebase from 'firebase/compat/app'; // Asegúrate de usar '/compat' si estás usando AngularFire 7+
import 'firebase/compat/auth'; // Asegúrate de usar '/compat' si estás usando AngularFire 7+

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Método para iniciar sesión con Google
  loginWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // Método para cerrar sesión
  logout() {
    return this.afAuth.signOut();
  }

  // Método para obtener el estado de autenticación del usuario
  getUser() {
    return this.afAuth.authState;
  }
}




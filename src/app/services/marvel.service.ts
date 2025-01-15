import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL_API = environment.apimarvel;
const KEY_PUBLIC = environment.public_key;
const HASH = environment.hash;

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${URL_API}/characters?ts=1&apikey=${KEY_PUBLIC}&hash=${HASH}`).pipe(map((data: any) => data.data.results));
  }

  getCharacter(id: string): Observable<any> {
    return this.http.get(`${URL_API}/characters/${id}?ts=1&apikey=${KEY_PUBLIC}&hash=${HASH}`).pipe(map((data: any) => data.data.results));
  }

  getComics(): Observable<any> {
    return this.http.get<any>(`${URL_API}/comics?ts=1&apikey=${KEY_PUBLIC}&hash=${HASH}`).pipe(map((data: any) => data.data.results));
  }

  getComic(id: string): Observable<any> {
    return this.http.get(`${URL_API}/comics/${id}?ts=1&apikey=${KEY_PUBLIC}&hash=${HASH}`).pipe(map((data: any) => data.data.results));
  }

  // Añadir personaje
  addCharacter(character: { name: string; description: string }): Observable<any> {
    const url = `${URL_API}/characters?ts=1&apikey=${KEY_PUBLIC}&hash=${HASH}`;
    return this.http.post(url, character);
  }
}

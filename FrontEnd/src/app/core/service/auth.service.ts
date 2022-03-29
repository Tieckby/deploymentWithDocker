import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { BehaviorSubject, map } from "rxjs";
import { RestApiService } from "./api-services/rest-api.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUserData: any;
  currentUserRole: any;

  //Vérifie si l'utilisateur est connecté
  private _isLogged = new BehaviorSubject<boolean>(false);
  public isLogged = this._isLogged.asObservable();


  constructor(private http: HttpClient,
    private router: Router,
    private restApi: RestApiService){}

  login(username: string, password: string)
  {
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
    return this.http.post(`${environment.apiLink}/login`, body, {headers: myheader}).pipe(
      map(user => {
        //Store tokens
        localStorage.setItem("currentUserToken", JSON.stringify(user)); //On stocke les tokens dans le local storage
        localStorage.setItem("token", user['AccessToken']); //On stocke le token dans le local storage
        localStorage.setItem("refreshToken", user['refreshToken']); //On stocke le refresh token dans le local storage
        this._isLogged.next(true); //Connection réussie
        
        this.restApi.getPersonByUsername(username, localStorage.getItem("token")).subscribe(
          result => {
            this.currentUserData = result;
            localStorage.setItem("username", username);
            localStorage.setItem("userRole", this.currentUserData.roles[0]['name']);
          }
        )        
        return user;
      })
    );
  }

  autoLogin()
  {
    const userToken = localStorage.getItem("currentUserToken");
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");
    const username = localStorage.getItem("username");
    const userRole = localStorage.getItem("userRole");

    if(!userToken && !token && !refreshToken && !username && !userRole) //S'il n'ya pas de données dans le local storage
    {
      return this._isLogged.next(false);
    }

    this._isLogged.next(true);
  }

  logout()
  {
    localStorage.removeItem("currentUserToken");  ////On supprime le token dans le local storage
    localStorage.removeItem("token"); //On supprime le token dans le local storage
    localStorage.removeItem("refreshToken");  //On supprime le refresh token dans le local storage
    localStorage.removeItem("username");  //Supprime username
    localStorage.removeItem("userRole");  //Supprime userRole
    this._isLogged.next(false); //Déconnexion réussie
    this.router.navigate(["/authentication/signin"]); //Retour à la page login
  }
}

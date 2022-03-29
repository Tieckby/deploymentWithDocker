/**
 * 
 * REST API for Cabinet medicale
 * Powered By
 *  Sogodogo - Tiémoko
 *    e-mail : tiemogosogodogo94@gmail.com
 *    github : github.com/tieckby
 *  
 * Fofana - Hady
 *    e-mail : hadyfofana72@gmail.com
 *    github : github.com/hedycarter
 * 
 * 
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  public userLink = environment.apiLink+'/gescab_db/api/v1/personne';
  private riveLink = environment.apiLink+'/gescab_db/api/v1/rive';
  private cabinetMedicaleLink = environment.apiLink+'/gescab_db/api/v1/cabinetMedicale';
  private specialityLink = environment.apiLink+'/gescab_db/api/v1/specialite';
  private rdvLink = environment.apiLink+'/gescab_db/api/v1/rdv';

  constructor(private http: HttpClient){ }

  //Set Header
  setHeader(authorization: string, token: string)
  {
    return new HttpHeaders().set(authorization, 'token:'+token);
  }

  /**_______________________________Section User___________________________________**/
  //Add new user
  addNewUser(userBody: any)
  {
    return this.http.post(this.userLink+'/add', userBody, {responseType: 'text'});
  }

  //Change user Password
  changeUserPassword(username: string, password: string)
  {
    return this.http.get(this.userLink+'/changePassword/'+username+'/'+password, {responseType: 'text'});
  }

  //Send email
  sendEmailToUser(email: string)
  {
    return this.http.get(this.userLink+'/sendEmail/'+email, {responseType: 'text'});
  }

  //Set User Statut
  setUserStatut(idUser: number, etat: string, token: string)
  {
    return this.http.get(this.userLink+'/setStatut/'+idUser+'/'+etat, {headers: this.setHeader('Authorization', token), responseType: 'text'})
  }

  //Get User by username
  getPersonByUsername(username: string, token: string)
  {
    return this.http.get(this.userLink+'/getByUsername/'+username, {headers: this.setHeader('Authorization', token)});
  }

  //Get User email
  getPersonEmail(email: string)
  {
    return this.http.get(this.userLink+'/getEmail/'+email, {responseType: 'text'});
  }

  //Get User username
  getPersonUsername(username: string)
  {
    return this.http.get(this.userLink+'/getUsername/'+username, {responseType: 'text'});
  }

  //Get User telephone
  getPersonTelephone(telephone: number)
  {
    return this.http.get(this.userLink+'/getTelephone/'+telephone, {responseType: 'text'});
  }

  //Get User by Profile
  getUserByProfile(profile: string, token: string)
  {
    return this.http.get(this.userLink+'/getByProfile/'+profile, {headers: this.setHeader('Authorization', token)});
  }

  //Update User
  updateUser(userId: number, userBody: any, token: string)
  {
    return this.http.put(this.userLink+'/update/'+userId, userBody, {headers: this.setHeader('Authorization', token), responseType: 'text'});
  }

  //Delete User by ID
  deleteUser(userId: number, token: string)
  {
    return this.http.delete(this.userLink+'/delete/'+userId, {headers: this.setHeader('Authorization', token), responseType: 'text'});
  }

  //Update user profile
  updateUserProfile(username: string, image: any, token: string)
  {
    const formData = new FormData();
    formData.append("file", image, image.name);

    return this.http.post(this.userLink+'/uploadImg/'+username, formData, {headers: this.setHeader('Authorization', token), responseType: 'text'});
  }

  /**_______________________________Section Rive___________________________________**/
  //Get all rives
  getAllRive()
  {
    return this.http.get(this.riveLink+'/getAll');
  }

  /**_______________________________Section Cabinet medicale___________________________________**/
  //Get Cabinet by ID
  getCabinetByID(id: number)
  {
    return this.http.get(this.cabinetMedicaleLink+'/getOne/'+id);
  }

  //Get all cabinets by rive
  getCabinetByRive(riveBody: any)
  {
    return this.http.post(this.cabinetMedicaleLink+'/getByRive', riveBody);
  }

  //GetAll Cabinet
  getAllCabinet()
  {
    return this.http.get(this.cabinetMedicaleLink+'/getAll');
  }

  //Get cabinet's specialities
  getCabinetSpecialities(cabinetBody: any)
  {
    return this.http.post(this.cabinetMedicaleLink+'/getSpecialities', cabinetBody);
  }

  //Get Cabinet's medecin
  getMedecinByCabinet(cabinetBody: any)
  {
    return this.http.post(this.userLink+'/getMedecinByCabinetMedicale', cabinetBody);
  }

  /**_______________________________Section RDV___________________________________**/
  //Take RDV
  takeRDV(rdvBody: any, token: string)
  {
    return this.http.post(this.rdvLink+'/add', rdvBody, {headers: this.setHeader('Authorization', token), responseType: 'text'})
  }

  //Update RDV
  updateRDV(id: number, rdvBody: any, token: any)
  {
    return this.http.put(this.rdvLink+'/update/'+id, rdvBody, {headers: this.setHeader('Authorization', token), responseType: 'text'})
  }

  deleteRDV(id: number, token: string)
  {
    return this.http.delete(this.rdvLink+'/delete/'+id, {headers: this.setHeader('Authorization', token), responseType: 'text'})
  }

  //Get all RDV
  getAllRDV(token: string)
  {
    return this.http.get(this.rdvLink+'/getAll', {headers: this.setHeader('Authorization', token)})
  }

  //Get RDV by Medecin
  getRDVByMedecin(postBody: any, token: string)
  {
    return this.http.post(this.rdvLink+'/getByMedecin', postBody, {headers: this.setHeader('Authorization', token)});
  }

  //Get RDV by Patient
  getRDVByPatient(postBody: any, token: string)
  {
    return this.http.post(this.rdvLink+'/getByPatient', postBody, {headers: this.setHeader('Authorization', token)});
  }

  //Get RDV by Medecin and Date
  getRDVByMedecinAndDate(currentDate: any, postBody: any, token: string)
  {
    return this.http.post(this.rdvLink+'/getByMedecinAndDate/'+currentDate, postBody, {headers: this.setHeader('Authorization', token)});
  }

  //Get RDV by Patient and Date
  getRDVByPatientAndDate(currentDate: any, postBody: any, token: string)
  {
    return this.http.post(this.rdvLink+'/getByPatientAndDate/'+currentDate, postBody, {headers: this.setHeader('Authorization', token)});
  }

  //Get distinct patient by medecin
  getDistinctPatientByMedecin(postBody: any, token: string)
  {
    return this.http.post(this.rdvLink+'/getDistinctPatient', postBody, {headers: this.setHeader('Authorization', token)});
  }

  //Get distinct patient by medecin and Date
  getDistinctPatientByMedecinAndDate(currentDate: any, postBody: any, token: string)
  {
    return this.http.post(this.rdvLink+'/getDistinctPatientAndDate/'+currentDate, postBody, {headers: this.setHeader('Authorization', token)});
  }

  //Valid a RDV
  validRDV(rdvId: number, isValid: boolean, token: string)
  {
    return this.http.get(this.rdvLink+'/validRDV/'+rdvId+'/'+isValid, {headers: this.setHeader('Authorization', token)});
  }

  //Get Upcoming RDV for the Patient
  upComingRDVForPatient(currentDate: any, body: any, token: string)
  {
    return this.http.post(this.rdvLink+'/getByPatientUpcomingRDV/'+currentDate, body, {headers: this.setHeader('Authorization', token)});
  }

  //Get Past RDV for the Patient
  pastRDVForPatient(currentDate: any, body: any, token: string)
  {
    return this.http.post(this.rdvLink+'/getByPatientPastRDV/'+currentDate, body, {headers: this.setHeader('Authorization', token)});
  }
}


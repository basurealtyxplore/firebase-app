import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SchoolsService {

  private baseUrl: String = 'http://192.168.43.170:9000/api/schools';
  constructor(private http: Http) { }

  getData(): Observable<School[]>{
    let school$ = this.http.get(`${this.baseUrl}`,{headers: this.getHeaders()}).map((res:Response) => this.mapSchool(res));
    return school$;

  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTQ5ODgyMDIzOH0.J3yKU10dyYkFVImGB8t6D9Ep4Kcnz1POLqh_dBMY0zKiX2LN8Vj6N4VSkPxjotwIIKPINTbmzltE8hsSXroXdQ');
    return headers;
  }

  private mapSchool(response: Response){
   // The response of the API has a results
   // property with the actual results
   //console.log('Service Response: ' + response.json().map(this.toSchool));
   console.log(response.json())
   return response.json();//.results.map(this.toSchool);

}
  /*private toSchool(r:any): School{
    let school = <School>({
      name: r.name,
      brand: r.brand
    });
    return school;
  }*/
}

interface School{
    id?: string,
    name?: string,
    brand?: string,
    logo?: string,
    verified?: boolean,
    overallRating?: number,
    workingHour?: string,
    workingDay?: string,
    workingMonth?: string,
    ageGroup?: string,
    premisesType?: string,
    accreditation?: string,
    mealsProvide?: boolean,
    mealsType?: string,
    transportation?: boolean,
    fecilities?: string,
    contactEmail?: string,
    contactPhone?: string,
    description?: string,
    images?: string,
    curriculum?: string,
    extraCurricular?: string,
    dayCareSaturday?: boolean,
    dayCareSunday?: boolean,
    highlights?: string,
    security?: string,
    mainLanguage?: string,
    otherlanguage?: string,
    schoolType?: string,
    lat?: number,
    lng?: number,
    country?: string,
    state?: string,
    city?: string,
    zone?: string
}

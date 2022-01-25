import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable,throwError } from 'rxjs';  
import {catchError} from 'rxjs/operators';  
import { Addresses } from './addresses';


export class Repo {
    'name': string;
    'stargazers_count': number;
    'open_issues_count': number;
    'created_at': string;
    'description': string;
    'svn_url': string;
    'owner': {
        'avatar_url': string;
        'login': string;
    };
};


export class Response {
    'items': Repo[];
};
// here we would set headers for if we wanted to get less rate limiting by authing users. I dont have time to setup oauth, so would be a future improvemnt.  
const httpOptions={} 

@Injectable({  
  providedIn: 'root'  
})  
export class getRepoService {  
   
    endpoint = new Addresses();
    constructor(private http:HttpClient) { }  
    repos: Repo[] = [];

    getRepos(pageNr: number):Observable<any>{  
        console.log('getting repos from service')
        // get date from 20 days ago
        const checkDate = lastMonth(new Date()).toISOString().split('T')[0];
        // build query string, remember page number
        let queryString = pageNr < 2 ? '?q=created:>' + checkDate + '&sort=stars&order=desc' : '?q=created:>' + checkDate + '&sort=stars&order=desc&page=' + pageNr;
        //for your reference
        console.log('queryString',queryString)
        const url=this.endpoint.searchAPI + queryString;
        return this.http.get<any>(url).pipe(catchError(this.handleError));  
    }  
    handleError(error: any){  
        return throwError(error.message || "Server Error");  
    }
}  
function lastMonth(date: Date) {
    var m, d = (date = new Date(+date)).getDate()
    date.setMonth(date.getMonth() - 1, 1);
    m = date.getMonth();
    date.setDate(d);
    if (date.getMonth() !== m) date.setDate(0);
    return date
}
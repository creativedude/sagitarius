import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Addresses } from './api/addresses';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sagitarius';
  endpoint = new Addresses();
  repos: Repo[] = [];
  pageNr = 1;

  constructor(private http: HttpClient) {
  } 
  
  ngOnInit() { 
    this.getRepos();
  }

  
  public getRepos() {
    // get date from 20 days ago
    const checkDate = lastMonth(new Date()).toISOString().split('T')[0];
    // build query string, remember page number
    let queryString = this.pageNr >= 2 ? '?q=created:>' + checkDate + '&sort=stars&order=desc' : '?q=created:>' + checkDate + '&sort=stars&order=desc&page=' + this.pageNr;
    return this.http.get<Response>(this.endpoint.searchAPI + queryString)
      .subscribe(
        (response) => {
          this.repos = response.items; 
          this.pageNr++; // up page number for next time
        },
        (error) => {
          // whoops
          alert(error);
        },
        () => {
          console.log('Request completed')
        })
  }
}

function lastMonth (date: Date) {
  var m, d = (date = new Date(+date)).getDate()
  date.setMonth(date.getMonth() - 1, 1);
  m = date.getMonth();
  date.setDate(d);
  if (date.getMonth() !== m) date.setDate(0);
  return date
}
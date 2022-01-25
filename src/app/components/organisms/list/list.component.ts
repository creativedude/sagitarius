import { Component, OnInit, Input } from '@angular/core';
import { Repo, getRepoService } from 'src/app/api/getRepoService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  array: Repo[] = [];  
  throttle = 300;  
  scrollDistance = 1;  
  scrollUpDistance = 2;  
  direction = "";  
  modalOpen = false;  
  repos: Repo[] = [];   
  pageNr = 1;
  warning = false;
  isLoading = false;

  constructor(private getRepoService: getRepoService) {  
  }

  ngOnInit(): void {
    this.getRepos(); 
  }
  getRepos() {
    // show loading spinner
    this.isLoading = true;
    //get repos
    this.getRepoService.getRepos(this.pageNr).subscribe((response: any) => {
      const responseItems = response.items;
      // possible improvements here: check for length and clear out old values so that we don't run out of memory
      this.repos = this.repos.concat( responseItems ); 
      // increase pageNr for next load. 
      this.pageNr++;
      // hide loader
      this.isLoading = false;
    }, (error) => {
      // possible improvements here: sniff for failure type. we assume 403, which is rate limiting. could be something different, then we could show a different error state.
      this.warning = true;
      this.isLoading = false;
    })
  }

  selector: string = '.main-panel';  

  onScrollDown() {  
    this.getRepos();  
    this.direction = "down";  
  }

  rateLimitRetry() {
    this.warning=false;
    this.getRepos(); 
  }
}

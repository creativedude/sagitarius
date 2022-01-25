import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Repo } from 'src/app/api/getRepoService';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  // lets build an empty object
  @Input() repo: Repo = {
    'name': '',
    'stargazers_count': 0,
    'open_issues_count': 0,
    'description': '',
    'created_at': '',
    'owner': {
      'avatar_url': '',
      'login': '',
    },
    'svn_url': '',
  }

  submittedDate = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // update date
    this.submittedDate = String(getDateDiff(this.repo.created_at));
  }
}

const getDateDiff = (date: string) => {
  // get how many days ago this was created
  const today = new Date().getTime();
  const originalDate = new Date(date).getTime();
  return Math.floor((today - originalDate) / 86400000);
}
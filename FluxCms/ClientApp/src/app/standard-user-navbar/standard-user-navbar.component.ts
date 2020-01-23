import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-standard-user-navbar',
  templateUrl: './standard-user-navbar.component.html',
  styleUrls: ['./standard-user-navbar.component.css']
})
export class StandardUserNavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService,private userService: UserService){
    this.translate.setDefaultLang('en');
    this.userService.getLanguage().subscribe((data: any) => {
      this.translate.use(data.language);
    },(err)=>{
      this.translate.setDefaultLang('en');
    });
  }
}

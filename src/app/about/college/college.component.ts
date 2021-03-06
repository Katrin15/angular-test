import { Component, Inject, OnInit } from '@angular/core';
import { COLLEGE_ABOUT$ } from '../about.providers';
import { Observable } from 'rxjs';
import { AboutInterface } from '../about.interface';

import { COLLEGE_DATA_PROVIDER } from '../about.providers';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss'],
    providers: [COLLEGE_DATA_PROVIDER]
})
export class CollegeComponent implements OnInit {

    constructor( @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>, private translateService: TranslateService ) {
        translateService.addLangs(['en', 'fr', 'he']);
        translateService.setDefaultLang('he');
        translateService.use('fr');
    }

    ngOnInit() {
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CollegeComponent } from './college/college.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { TranslateModule } from '@ngx-translate/core';
import { CollegeCoursesComponent } from './college-courses/college-courses.component';
import { CollegeAboutComponent } from './college-about/college-about.component';
import { CollegeTeachersComponent } from './college-teachers/college-teachers.component';
import { CollegeContactsComponent } from './college-contacts/college-contacts.component';


@NgModule({
    declarations: [
        CollegeComponent, 
        PageNotFoundComponent, CollegeCoursesComponent, CollegeAboutComponent, CollegeTeachersComponent, CollegeContactsComponent
    ],
    imports: [
        CommonModule, 
        AboutRoutingModule, 
        TranslateModule
    ]
})
export class AboutModule {
}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CollegeComponent } from "./college/college.component";
import { CollegeAboutComponent } from "./college-about/college-about.component";
import { CollegeCoursesComponent } from "./college-courses/college-courses.component";
import { CollegeTeachersComponent } from "./college-teachers/college-teachers.component";
import { CollegeContactsComponent } from "./college-contacts/college-contacts.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: CollegeComponent,
  },
  {
    path: "about",
    component: CollegeAboutComponent,
  },
  {
    path: "courses",
    component: CollegeCoursesComponent,
  },
  {
    path: "teachers",
    component: CollegeTeachersComponent,
  },
  {
    path: "contacts",
    component: CollegeContactsComponent,
  },
  { 
    path: "**", 
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule {}

import { AppComponent } from "./app.component";

import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./user/user.component";

import { Ng5SliderModule } from "ng5-slider";

import { BsDatepickerModule } from "ngx-bootstrap";

import { FormsModule } from "@angular/forms";

import { ToastrModule } from "ngx-toastr";

import { ViewTaskComponent } from "./view-task/view-task.component";

import { ProjectComponent } from "./project/project.component";

import { FilteruserPipe } from "./pipes/filteruser.pipe";

import { AddTaskComponent } from "./add-task/add-task.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: UserComponent }
    ];
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        Ng5SliderModule,
        BsDatepickerModule.forRoot(),
        FormsModule,
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true
        })
      ],
      declarations: [
        AppComponent,
        ViewTaskComponent,
        UserComponent,
        ProjectComponent,
        FilteruserPipe,
        AddTaskComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
    });
  }));

  it('should create the Application', () => {
    expect(component).toBeTruthy();
  });

  it(`should render the heading as Project Management`, () => {
    fixture.detectChanges();
    const ele = fixture.debugElement.nativeElement;
    expect(ele.querySelector('.navbar-brand').textContent).toContain('Project Management');
  });
});
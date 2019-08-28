import { AddTaskComponent } from "./add-task.component";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Routes, RouterModule } from "@angular/router";
import { FilteruserPipe } from "../pipes/filteruser.pipe";
import { TaskService } from "../services/task.service";
import { EventService } from "../services/event.service";
import { UserService } from "../services/user.service";
import { ProjectService } from "../services/project.service";
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from "@angular/forms";
import { Ng5SliderModule } from "ng5-slider";
import { HttpClientModule } from "@angular/common/http";
import { BsDatepickerModule, ModalModule } from "ngx-bootstrap";


describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', component: AddTaskComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [
        AddTaskComponent,
        FilteruserPipe
      ],
      providers: [
        TaskService,
        EventService,
        UserService,
        ProjectService
      ],
      imports: [
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true
        }),
        FormsModule,
        RouterModule.forRoot(routes),
        Ng5SliderModule,
        HttpClientModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot()
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AddTaskComponent);
      component = fixture.componentInstance;
    });
  }));

  it(`should create Add Task Component`, () => {
    expect(component).toBeTruthy();
  });
  
  it(`should render a panel with heading Add Task`, () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.panel-heading').textContent).toContain('Add Task');
  });
});
import { RouterTestingModule } from "@angular/router/testing";
import { ViewTaskComponent } from './view-task.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FilteruserPipe } from '../pipes/filteruser.pipe';
import { ProjectService } from '../services/project.service';
import { TaskService } from '../services/task.service';
import { EventService } from '../services/event.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewTaskComponent,
        FilteruserPipe],
      providers: [
        ProjectService,
        TaskService,
        EventService],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        ModalModule.forRoot(),
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true
        })
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ViewTaskComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create View Task Component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a panel with heading View Task', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.panel-heading').textContent).toContain('View Task');
  });
});
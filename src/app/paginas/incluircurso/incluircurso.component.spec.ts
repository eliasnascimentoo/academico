import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluircursoComponent} from './incluircurso.component';

describe('incluircursoComponent', () => {
  let component: IncluircursoComponent;
  let fixture: ComponentFixture<IncluircursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluircursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluircursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

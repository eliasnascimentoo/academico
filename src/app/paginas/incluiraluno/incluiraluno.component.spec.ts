import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluiralunoComponent } from './incluiraluno.component';

describe('IncluiralunoComponent', () => {
  let component: IncluiralunoComponent;
  let fixture: ComponentFixture<IncluiralunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluiralunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluiralunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

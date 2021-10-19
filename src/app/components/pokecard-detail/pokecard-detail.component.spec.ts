import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecardDetailComponent } from './pokecard-detail.component';

describe('PokecardDetailComponent', () => {
  let component: PokecardDetailComponent;
  let fixture: ComponentFixture<PokecardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokecardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokecardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

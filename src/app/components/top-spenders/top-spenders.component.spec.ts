import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpendersComponent } from './top-spenders.component';

describe('TopSpendersComponent', () => {
  let component: TopSpendersComponent;
  let fixture: ComponentFixture<TopSpendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSpendersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSpendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

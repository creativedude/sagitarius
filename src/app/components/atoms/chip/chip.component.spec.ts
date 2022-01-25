import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.label = "label is this";
    fixture.detectChanges();
    expect(compiled.querySelector('.label')?.textContent).toContain('label is this');
  });

  it('should render number', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.number = 5;
    fixture.detectChanges();
    expect(compiled.querySelector('.number')?.textContent).toContain('5');
  });
});

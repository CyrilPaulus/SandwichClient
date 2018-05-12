import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCreateDialogComponent } from './transaction-create-dialog.component';

describe('TransactionCreateDialogComponent', () => {
  let component: TransactionCreateDialogComponent;
  let fixture: ComponentFixture<TransactionCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit()', () => {
    let form: HTMLFormElement;
    let input: HTMLInputElement;

    beforeEach(() => {
      spyOn(component.submitted, 'emit');
      form = fixture.debugElement.query(By.css('form')).nativeElement;
      input = fixture.debugElement.query(By.css('#search-input')).nativeElement;
    });

    it('should not emit submitted event if value is empty', () => {
      form.dispatchEvent(new Event('submit'));
      expect(component.submitted.emit).not.toHaveBeenCalled();
    });

    it('should emit submitted event if value is not empty', () => {
      input.value = 'test';
      input.dispatchEvent(new Event('input'));
      form.dispatchEvent(new Event('submit'));
      expect(component.submitted.emit).toHaveBeenCalledWith('test');
    });

    it('should reset value of input element', () => {
      form.dispatchEvent(new Event('submit'));
      expect(input.value).toEqual('');
    });
  });
});

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {
  @Output() submitted = new EventEmitter<string>();

  onSubmit(elem: HTMLInputElement) {
    const { value } = elem;
    if (value) {
      this.submitted.emit(value);
      elem.value = '';
    }
  }
}

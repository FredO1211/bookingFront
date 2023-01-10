import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Comparator } from '../intrerfaces/compare.interface';

export function valueIsAlreadyExistsValidator(
  listToSearch: any[],
  comparator?: Comparator
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let result;
    if (comparator != null) {
      result = listToSearch.find(
        (x) => comparator.compare(control.value, x) == 0
      );
    } else {
      result = listToSearch.find((x) => x == control.value);
    }

    return result ? { used: { value: control.value } } : null;
  };
}

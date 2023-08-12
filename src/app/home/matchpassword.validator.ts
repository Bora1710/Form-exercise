import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let form = control.parent;
  return control.value === form?.value.password ? null : { invalidMatch: true };
};

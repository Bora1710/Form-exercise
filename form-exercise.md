# Form exercise

The point of this exercise is to get familiar with Angular reactive forms, their value changes, validations and submittion.

Basic rules:

- project needs to be in Angular framework
- only one page with a form is needed
- usage of Angular's Reactive Forms is required
- under every field needs to be a red message that will be displayed in case field validation failed (example: if name field is required and we leave it empty, on submit a message below the name field should appear and say 'name is required')
- form needs to have this set of fields:

| field name      | input type            | property type                   | validation                                                |
| --------------- | --------------------- | ------------------------------- | --------------------------------------------------------- |
| name            | text                  | string                          | required                                                  |
| gender          | dropdown(select)      | string                          | required                                                  |
| date of birth   | datepicker            | Date                            | required, valid date                                      |
| age             | input number READONLY | number                          | none                                                      |
| contact details | input text            | Object: {phone: string}         | valid phone format (start with 06, followed by 8 digits)  |
| email           | input text            | string                          | valid email format (email@something.com)                  |
| password        | input text            | string                          | min length 8, at least one uppercase, at least one number |
| password repeat | input text            | string                          | must be equal to password                                 |
| hobies          | checkbox              | FormArray: [{hobyName: string}] | none                                                      |

- age field should be calculated based on date of birth field
- BUTTON SUBMIT - form should be submited on button click and either show validation errors or show a success alert message
- BUTTON RESET - form should be reseted on button click

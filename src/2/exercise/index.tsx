/**
 * Goal:
 * yarn test 2/exercise
 *
 * Requirements:
 *   1) All fields are required
 *   2) firstName "Must be Bob" or "bob"
 *   3) lastName "Must be Ross" or "ross"
 *   4) email "Must be a valid email"
 *   5) Validation errors trigger when blurring an input
 *   6) Once errors have been triggered, users should see active errors until valid
 *   7) Validation errors dissapear as soon as field is valid
 *   8) Cancel clears all data and any validation errors
 *   9) Successful Submit calls `toaster('Success!', 'success');`
 *   10) Failed Submit calls `toaster('Ruh roh, Shaggy!', 'error');`
 *
 * Hint: 
 *   - use the `transformError` util in miscellaneous to pass a string to
 *     `validationMessage` on looker inputs
 *
 * Ninja Bonus:
 *   1) Add a pet object to our User type with a name and type
 *   2) Create a PetForm and mount it on the UserForm
 *   3) Create a usePetValidation and compose it with useUserValidation
 *   4) Add a `hasPet` flag to `User` and represent with a checkbox. If `hasPet`
 *      is true, render the PetForm, otherwise remove the PetForm and its values
 */
export const Exercise = () => {
  return null;
};

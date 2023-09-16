/**
 * Goal: Create an Incremental Form Generator
 *
 * Note: this is a lead up to exercise 4 and separates the complex Incremental
 * form type from the nested and composed types in exercise 4. Keep this in 
 * mind if you are working along with the docs at go/building-better-forms as 
 * the next example in the docs are essentially exercise 4, not 3.
 *
 * Requirements:
 *   1) create a User type that has first name, last name, email, and phones
 *   1) create a Phone type with number(string) and type(string)
 *   2) type should be a select box that can be "personal" or "business"
 *   5) create an incremental form generator to add and remove as many phones 
 *   6) validations:
 *      - reuse all validations from previous exercise 
 *      - phones must have a type and number
 *      - all phones must have 10 digit numbers
 *      - a contact must have at least one phone
 *
 * Ninja Bonus:
 *   1) contact info cannot have more than 2 phones
 *   2) all phones should be stored as a number string but should display as a
 *      prettified number
 *   4) a user can be a business owner, which when true, adds a Business type
 *      that includes a name, website, and ContactInfo.
 *
 * Good Luck!
 */
export const Exercise = () => {
  return null
}

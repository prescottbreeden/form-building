/**
 * Goal: Create a complex form with nested, composed, and incremental types
 *
 * Requirements:
 *   1) create a User type with Username, Password and Date of Birth
 *   2) create a nested ContactInfo type inside User which contains an email 
 *      and is composed with an Address type and an Incremental Phone type.
 *   3) create an Address type that has useful address information (e.g., 
 *      street, city, state, zipCode, etc.)
 *   4) create a Phone type that has type and number
 *   5) create an incremental form generator to add and remove as many phones 
 *   6) validations:
 *      - username and password are required
 *      - email is required and must be a valid email
 *      - phones must have a type and number
 *      - all phones must have 10 digit numbers
 *      - a contact must have at least one phone
 *      - all address fields are required
 *
 * Ninja Bonus:
 *   1) contact info cannot have more than 3 phones
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

import { CreateUser } from "./CreateUser"

/**
 * Goal: Create an Incremental Form Generator
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
export const Solution = () => {
  return <CreateUser />
}

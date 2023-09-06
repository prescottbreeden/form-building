import { CreateUser } from "./CreateUser";

/**
 * Requirements:
 *   1) All fields are required
 *   2) firstName must be "Bob" or "bob"
 *   3) lastName must be "Ross" or "ross"
 *   4) email must be a valid email
 *   5) Validation errors on trigger on blur
 *   6) Once errors have been triggered, users should see active errors until valid
 *   7) Validation errors dissapear as soon as field is valid
 *   8) Submit logs "success!" if form state is valid
 *   9) Cancel clears all data and any validation errors
 */
export const Solution = () => {
  return <CreateUser />
};

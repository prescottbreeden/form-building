import { ValidationMessageProps } from "../types/components";

export const randomId = () => Math.random().toString(36).substring(2, 10);

/**
 *  Internal Utility. Takes an event and extracts either the target.value
 *  property (or the target.checked property if type is 'checkbox') and returns
 *  it as the value of a key of target.name.
 *
 *  This allows for easy event updates by merging the output of this function
 *  with the current state of the form.
 *
 *  @example
 *  input: { target: { name: 'firstName', type: 'text', value: 'bob' } }
 *  output: { firstName: 'bob' }
 *
 *  input: { target: { checked: true, name: 'subscribed', type: 'checkbox' } }
 *  output: { subscribed: true }
 *
 *  [example usage]
 *  const genericOnChange = pipe(
 *    eventNameValue,
 *    merge(formState),
 *    setFormState
 *  )
 */
export const eventNameValue = (
  event: any,
): {
  [key: string]: string | number | boolean
} => {
  const target = event?.target ?? event?.currentTarget
  if (target) {
    const { name, checked, type, value } = target
    if (type === 'checkbox') {
      return { [name]: checked }
    } else {
      return { [name]: value }
    }
  }
  throw new Error(
    `"eventNameValue" cannot read event object because it does not have a target property.`,
  )
}

export const transformError = (msg: string): ValidationMessageProps => {
  return { type: 'error', message: msg ?? '' };
};

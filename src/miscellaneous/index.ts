import type { ValidationMessageProps } from '@looker/components';

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

/**
 * Transforms a string to a validationMessage compatible
 * ValidationMessageProps interface for @looker/components
 */
export const transformError = (message: string): ValidationMessageProps => {
  return message ? { type: 'error', message } : {};
};

/**
 * Some Looker components do not return change event objects from their onChange
 * handlers, this function allows the mapping of these broken components to
 * regular, reusable change handlers between various input types
 */
export const fakeChangeEvent = (name: string) => (value: any) => ({
  target: { name, value },
});



export const validate = values => {
  const errors = {}
  const requiredFields = [
    'title',
    'body',
    'author',
    'category'
  ];
  requiredFields.forEach(field =>
    !values[field] ? errors[field] = 'Required' : null
  );
  return errors
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
      // eslint-disable-next-line no-throw-literal
      throw { email: 'Email already Exists' }
    }
    throw { email: 'Email already Exists' }
  })
}

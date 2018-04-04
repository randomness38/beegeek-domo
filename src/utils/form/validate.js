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

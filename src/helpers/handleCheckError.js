const handleCheckError = (error, name, minLength = 0) => {
  if (error.type === 'required') return `${name} is required`;
  if (error.type === 'pattern') return `${name} is not valid`;
  return error.message;
};
export default handleCheckError;

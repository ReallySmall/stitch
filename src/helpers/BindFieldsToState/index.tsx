const BindFieldsToState = (event) => {

  const { target } = event;
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  return { name, value };

};


export { BindFieldsToState };


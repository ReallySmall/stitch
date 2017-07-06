export const blockTypeFields = () => {
  return {
    fields: {
      name: { 
        type: 'text',
        name: 'name', 
        label: 'Name', 
        value: '',
        validators: ['required']
      },
      description: { 
        type: 'text',
        name: 'description', 
        label: 'Description', 
        value: '',
        validators: ['required']
      }
    } 
  }
};
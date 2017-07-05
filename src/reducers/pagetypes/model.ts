export const pageTypeFields = () => {
  return {
    fields: {
      name: { 
        type: 'text',
        name: 'name', 
        label: 'Page Type', 
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
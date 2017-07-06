export const pageTypeFields = () => {
  return {
    fields: {
      name: {
        isHeading: true,
        type: 'text',
        name: 'name', 
        label: 'Name', 
        value: '',
        validators: ['required']
      },
      description: {
        isHeading: false, 
        type: 'text',
        name: 'description', 
        label: 'Description', 
        value: '',
        validators: ['required']
      }
    } 
  }
};
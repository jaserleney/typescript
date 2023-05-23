namespace Validations {
  export const validateText = (text: string): boolean => (text.length > 3 ? true : false);

  export const validateDate = (date: Date): boolean => (isNaN(date.valueOf()) ? false : true);
}

// console.log(Validations.validateText("Fer"));

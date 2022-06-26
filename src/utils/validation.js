export default function validation(values){
   
    let errors = {};

    if ( !values.name || values.name.length < 3 || values.name.length > 32){
      errors.name = "Имя должно содержать от 3 до 32 символов";
    }

    const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (values.email && values.email != "" && emailReg.test(values.email) == false) {
        errors.email = "Введен некорректный email";
    }
    
    const phoneReg = /^[\d\+][\d\(\)\ -]+\d$/;
    if (!values.phone || values.phone.length < 9 || values.phone.length > 18) {
        errors.phone = "Номер телефона должен содержать от 9 символов до 13 символов";
    } else if (phoneReg.test(values.phone) == false) {
        errors.phone = "Указан некорекнтый номер";
    }
    
    if (!values.message || values.message.length < 10 || values.message.length > 500) {
      errors.message = "Сообщение должно содержать от 10 до 500 символов";
    }

    return errors;
}
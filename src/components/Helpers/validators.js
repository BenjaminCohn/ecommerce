export const validator = {
    errors: {},
    passwordValue: '',
    email: (values)=>{
        if (!values.email) {
            validator.errors.email = 'The email field is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            validator.errors.email = 'Invalid email address';
        }else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            delete validator.errors.email ;
        }
        return validator.errors
    },
    firstname: (values)=>{
        if (!values.firstname) {
            validator.errors.firstname = 'The firstname field is required';
        } else if (!/^[a-zA-Z]{2,20}$/i.test(values.firstname)) {
            validator.errors.firstname = 'The firstname must be at least 2 and at most 20 characters';
        }
         else if (/^[a-zA-Z]{2,20}$/i.test(values.firstname)) {
            delete validator.errors.firstname 
        }
        return validator.errors
    },
    lastname: (values)=>{
        if (!values.lastname) {
            validator.errors.lastname = 'The lastname field is required';
        } else if (!/^[a-zA-Z]{2,20}$/i.test(values.lastname)) {
            validator.errors.lastname = 'The lastname must be at least 2 and at most 20 characters';
        }else if (/^[a-zA-Z]{2,20}$/i.test(values.lastname)) {
            delete validator.errors.lastname 
        }
        return validator.errors
    },
    password: (values)=>{
        if (!values.password) {
            validator.errors.password = 'The password field is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
            validator.errors.password = 'Password must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        }
        else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
            validator.passwordValue = values.password
            delete validator.errors.password;
        }
        return validator.errors
    },
    passwordConfirm: (values)=>{
        if (!values.passwordConfirm) {
            validator.errors.passwordConfirm = 'The password confirm field is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.passwordConfirm)) {
            validator.errors.passwordConfirm = 'The password confirm must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        } else if(values.passwordConfirm !== validator.passwordValue){
            validator.errors.passwordConfirm = 'The password does not match its confirmation';
        }else if(values.passwordConfirm === validator.passwordValue){
        
            delete validator.errors.passwordConfirm;
        }
        return validator.errors
    },
    checkAll: (values)=>{
        if (!values.email) {
            validator.errors.email = 'The email field is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            validator.errors.email = 'Invalid email address';
        }
    
        if (!values.firstname) {
            validator.errors.firstname = 'The firstname field is required';
        } else if (!/^[a-zA-Z]{2,20}$/i.test(values.firstname)) {
            validator.errors.firstname = 'The firstname must be at least 2 and at most 20 characters';
        }
    
        if (!values.lastname) {
            validator.errors.lastname = 'The lastname field is required';
        } else if (!/^[a-zA-Z]{2,20}$/i.test(values.lastname)) {
            validator.errors.lastname = 'The lastname must be at least 2 and at most 20 characters';
        }
    
        if (!values.password) {
            validator.errors.password = 'The password field is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
            validator.errors.password = 'Password must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        }
    
        if (!values.passwordConfirm) {
            validator.errors.passwordConfirm = 'The password confirm field is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i.test(values.password)) {
            validator.errors.passwordConfirm = 'The password confirm must contain at least eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
        } else if(values.passwordConfirm !== values.password){
            validator.errors.passwordConfirm = 'The password does not match its confirmation';
        }
    
        return  validator.errors
    }
    
}



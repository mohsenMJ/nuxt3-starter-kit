const password_pattern = /^(?=.+\d)(?=.+[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/;
const email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phone_pattern = /^[0-9]{10,10}$/;
const number_pattern = /^[0-9]{1,10}$/;

export class useValidation {
    required(v: any) {
        return (!Array.isArray(v) && !(typeof v == "object") && !(typeof v == "string") && v != null) || (Array.isArray(v) && !!v.length) || (typeof v == "string" && !!v.length) || (typeof v == "object" && !!v && !!Object.keys(v).length) || "This field should not be left blank."
    }

    password(v: string) {
        return !v || password_pattern.test(v) || "Password must be 9 characters including one uppercase letter, one special character and alphanumeric characters"
    }

    email(v: string) {
        return email_pattern.test(v) || "The Email must be a valid email address"
    }

    password_confirmation(cp: string, p: string) {
        return cp == p || "Password and confirm password must be same"
    }

    phone(v: string) {
        return phone_pattern.test(v) || "The Phone must be a valid"
    }

    number(v: string) {
        return number_pattern.test(v) || "The Number must be a valid"
    }
};

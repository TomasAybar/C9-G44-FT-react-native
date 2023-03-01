import * as yup from 'yup'

export const loginValidationShema = yup.object().shape({
    name: yup
    .string()
    .required('Campo obligatorio'),
    email: yup
    .string()
    .email('Este E-mail es inválido')
    .required('Campo obligatorio'),
    password: yup
    .string()
    .min(8, 'Debe contener al menos 8 caracteres')
    .max(20, 'Debe contener como máximo 20 caracteres')
    .required('Campo obligatorio'),
    repassword: yup
    .string()
    .required('Campo obligatorio')
    .oneOf([yup.ref('password'),null], 'La contraseña no coincide'),
    descripcion: yup
    .string()
    .max(500, 'Debe contener como máximo 500 caracteres')
    .required('Campo obligatorio'),
})
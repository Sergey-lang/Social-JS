import React from 'react'
import s from './FormControls.module.css'
import {Field} from 'redux-form'

const FormControl = ({input, meta: {touched, error}, children}) => {
   const hasError = touched && error
   return (
       <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
          <div>
             {children}
          </div>
          {hasError && <span>{error}</span>}
       </div>
   )
}

export const Textarea = (props) => {
   const {input, meta, ...restProps} = props
   return <FormControl {...props}><textarea rows={4} {...input}{...restProps}/></FormControl>
}

export const Input = (props) => {
   const {input, meta, ...restProps} = props
   return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}

export const CreateField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
       <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
       {text}
    </div>
)


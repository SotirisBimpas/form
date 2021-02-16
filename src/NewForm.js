import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Context from './context/Context';
import './App.css'

export default function  NewForm() {
    const { register, handleSubmit } = useForm();
    const { actions: { setCredentials}} = useContext(Context)

    const onSubmit = data => {
        console.log(data)
        setCredentials(data.name, data.token)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='newForm'>
            <input name="name" placeholder={'Username'} ref={register} />
            <input name="token" placeholder={'Token'} ref={register({ required: true })} />
            <input type="submit" />
        </form>
    )
}
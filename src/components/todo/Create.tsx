import Axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = (): JSX.Element => {
    const navigate = useNavigate()
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(false)


    const inputs = [
        {
            label: 'タイトル',
            type: 'text',
            state: title,
            setState: setTitle,
            required: true,
            autoComplete: null,
        },
        {
            label: '本文',
            type: 'textarea',
            state: content,
            setState: setContent,
            required: true,
            autoComplete: null,
        },
    ]

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        setSubmitDisabled(true)

        const url = 'http://localhost:8000/api/todos/'
        const data = {
            'title': title,
            'content': content,
        }

        Axios.post(url, data)
            .then((response) => {
                console.log(response)
                console.log(response.data)

                alert('success')
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                alert(error)

                setSubmitDisabled(false)
            })
    }


    return (
        <React.Fragment>
            <h2> Todo新規作成 </h2>
            <form onSubmit={onSubmit}>
                {inputs.map((input) => {
                    return (
                        <div className='m-1 p-1' key={input.label}>
                            <label
                                className='form-label'
                                children={input.label}
                            />
                            <InputOrTextarea {...input} />
                        </div>
                    )
                })}
                <div className='m-1 p-1'>
                    <button
                        className='btn btn-primary'
                        type='submit'
                        disabled={!Boolean(title && content) || submitDisabled}
                        children={'新規作成'}
                    />
                </div>
            </form>
        </React.Fragment>
    )
}


const InputOrTextarea = (props: any): JSX.Element => {
    const { type, state, setState, required, autoComplete } = props

    if (type === 'textarea') {
        return (
            <textarea
                className='form-control'
                rows={5}
                value={state}
                required={required}
                autoComplete={autoComplete}
                onChange={(event) => { setState(event.target.value) }}
            />
        )
    }
    return (
        <input
            className='form-control'
            type={type}
            value={state}
            required={required}
            autoComplete={autoComplete}
            onChange={(event) => { setState(event.target.value) }}
        />
    )
}

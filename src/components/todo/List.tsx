import Axios from 'axios'
import React, { useEffect, useState } from 'react'

export const List = (): JSX.Element => {
    const [todos, setTodos] = useState<any>([])

    useEffect(() => {
        const url = 'http://localhost:8000/api/todos/'
        Axios.get(url)
            .then((response) => {
                console.log(response)
                console.log(response.data)

                setTodos(response.data)
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
    }, [])

    return (
        <React.Fragment>
            <h2> Todoリスト </h2>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th> title </th>
                        <th> content </th>
                        <th> created_at </th>
                        <th> updated_at </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo: any) => {
                        return (
                            <tr key={todo.uuid}>
                                <td> {todo.title} </td>
                                <td> {todo.content} </td>
                                <td> {todo.created_at} </td>
                                <td> {todo.updated_at} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

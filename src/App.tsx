
import { Create as CreateTodo } from './components/todo/Create'
import { List as ListTodo } from './components/todo/List'
import { Routes, Route, Link } from 'react-router-dom'

export const App = (): JSX.Element => {
    return (
        <Routes>
            <Route
                index
                element={
                    <ul className='list-group m-1 p-1'>
                        <li className='list-group-item' >
                            <Link to='todos/create/' children={'Todo新規作成'} />
                        </li>
                        <li className='list-group-item' >
                            <Link to='todos/list/' children={'Todoリスト'} />
                        </li>
                    </ul>
                }
            />
            <Route
                path='todos/create/'
                element={<CreateTodo />}
            />
            <Route
                path='todos/list/'
                element={<ListTodo />}
            />
        </Routes>
    )
}

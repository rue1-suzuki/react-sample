import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link } from 'react-router-dom'
import { App } from './App'

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(
    <BrowserRouter>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/' children={'React Sample'} />

                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavAltMarkup'
                    aria-controls='navbarNavAltMarkup'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    children={<span className='navbar-toggler-icon' />}
                />

                <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                    <div className='navbar-nav'>
                        <Link className='nav-link' to='todos/create/' children={'Todo新規作成'} />
                        <Link className='nav-link' to='todos/list/' children={'Todoリスト'} />
                    </div>
                </div>
            </div>
        </nav>

        <div className='mx-1'>
            <App />
        </div>
    </BrowserRouter >
)

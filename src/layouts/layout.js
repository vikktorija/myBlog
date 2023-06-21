import { NavLink, Outlet } from 'react-router-dom';

function Layout() {

    return (
        <div className='container'>
            <header>
                <nav className='navigation'>
                    <NavLink className={({isActive}) => isActive ? 'navigaition activus' : 'navigaition'} to='/home'>Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'navigaition activus' : 'navigaition'} to='/blog'>Blog</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'navigaition activus' : 'navigaition'} to='/about'>About Me</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'navigaition activus' : 'navigaition'} to='/addpost'>Create</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}


export default Layout;
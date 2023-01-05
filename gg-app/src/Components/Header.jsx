import { Link } from 'react-router-dom'
import {auth} from '../utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

export default function Header() {

    
    const [user, loading] = useAuthState(auth)


return(
    <div>
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
        <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded nav-bg">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
            <h1 className="h-6 mr-3 sm:h-9 self-center text-xl md:text-3xl font-semibold whitespace-nowrap logo">GG</h1>
        </a>
        
        <div className="flex items-center md:order-2">
            
            <button type="button" className=" flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>

            
                <div className="w-8 h-8 rounded-full bg-emerald-400"></div>
            </button>
            <div className=" hidden my-4 text-base list-none  divide-y divide-gray-100 rounded shadow border-2 border-gray-200 backdrop-blur-md nav-bg user-dropdown" id="user-dropdown">
                <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                    <a href="/profile" className="block px-4 py-2 text-sm text-white backdrop-blur-xl hover:bg-gray-700">Profile</a>
                </li>
                <li>
                    <a href="/tracker" className="block px-4 py-2 text-sm text-white backdrop-blur-xl hover:bg-gray-700">Tracker</a>
                </li>
                <li>
                    <a href="/wishlist" className="block px-4 py-2 text-sm text-white backdrop-blur-xl hover:bg-gray-700">Wishlist</a>
                </li>
                <li>
                    <Link to="/auth/login" className="block px-4 py-2 text-sm text-white backdrop-blur-md hover:bg-gray-700">Log In</Link>
                </li>
                </ul>
            </div>
            
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            
        </div>
        
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-24 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li className='flex gap-3'>
                <svg className="w-6 h-6" fill="none" stroke=" lightblue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                <a href="/" className="block text-xl py-2 pl-3 pr-4 text-white hover:bg-gray-700 md:hover:text-sky-200 md:hover:bg-transparent rounded md:bg-transparent md:text-white md:p-0 ">Home</a>
            </li>
            <li className='flex gap-3'>
                <svg className="w-6 h-6" fill="none" stroke="lightgreen" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                <a href="/tracker" className="block text-xl py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-green-300 md:p-0">Tracker</a>
            </li>
            <li className='flex gap-3'>
                <svg className="w-6 h-6" fill="none" stroke="lightpink" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                <a href="/wishlist" className="block text-xl py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-red-300 md:p-0">Wishlist</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
    </div>
    )
}
import {auth} from '../utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router"


export default function Profile() {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)

    if(loading) return <h1>Loading...</h1>
    if(!user) navigate("/auth/login")
    if (user)
    return (
        <div className=' mt-20 login-page'>
            <h1>{user.displayName} Profile</h1>
            <img src={user.photoURL} alt='avatar' referrerPolicy="no-referrer" className=" h-10 rounded-full"/>

            <div>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
        </div>
    )
}
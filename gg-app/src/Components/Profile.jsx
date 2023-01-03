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
        <div className=' detail-bg h-screen'>
            <div className=' h-32 flex justify-center w-full'>
            <img src={user.photoURL} alt='avatar' referrerPolicy="no-referrer" className=" h-12 rounded-full mt-10 ml-3"/>
            <h1 className=' p-12 text-2xl md:text-5xl'>{user.displayName}'s Profile</h1>
            </div>
            <div className=' mt-16'>
                <button className=' font-semibold text-2xl rounded-xl p-6' onClick={() => auth.signOut()}>Sign Out</button>
            </div>
        </div>
    )
}
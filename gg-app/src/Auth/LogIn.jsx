import {FcGoogle} from 'react-icons/fc'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import Profile from '../Components/Profile'
import { useNavigate } from 'react-router'


export default function LogIn(){
    //Sign in with Google
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)
    const googleProvider =  new GoogleAuthProvider()

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth,googleProvider)
            console.log(result.user)
            navigate("/profile") 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(user){
            navigate("/profile")
        } else {
            console.log(LogIn)
        }
    })

    return(
        <div>
        {!user && (
        <div className=' bg-white p-7 rounded-3xl shadow-2xl mt-20 mx-auto w-1/3'>
            
            
            <div>
                <button onClick={GoogleLogin} className='flex mx-auto gap-2 bg-slate-700 rounded-xl shadow-2xl p-4 text-white'><FcGoogle/>Sign in with Google</button>
            </div>
    
        </div>
        )}  
        {user && (
            <div>
                
                <Profile/>
            </div>
        )}s
      </div>
    )
}
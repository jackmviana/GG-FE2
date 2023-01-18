// import {FcGoogle} from 'react-icons/fc'
// import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// import {auth} from '../utils/firebase'
// import {useAuthState} from 'react-firebase-hooks/auth'
// import { useEffect } from 'react'
// import Profile from '../Components/Profile'
// import { useNavigate } from 'react-router'


// export default function LogIn(){
//     //Sign in with Google
//     const navigate = useNavigate()
//     const [user, loading] = useAuthState(auth)
//     const googleProvider =  new GoogleAuthProvider()

//     const GoogleLogin = async () => {
//         try {
//             const result = await signInWithPopup(auth,googleProvider)
//             console.log(result.user)
//             navigate("/profile") 
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         if(user){
//             navigate("/profile")
//         } else {
//             console.log(LogIn)
//         }
//     })

//     return(
//         <div className=' detail-bg h-screen'>
//         {!user && (
//             <div className=''>
//                 <div className=' h-24 detail-bg'></div>
//                 <button onClick={GoogleLogin} className=' flex mx-auto gap-2 bg-slate-700 rounded-xl p-8 text-white text-xl' ><FcGoogle/>Sign in with Google</button>
//             </div>
//         )}  
//         {user && (
//             <div>
                
//                 <Profile/>
//             </div>
//         )}
//       </div>
//     )
// }
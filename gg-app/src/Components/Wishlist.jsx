import happykratos from "../Assets/happykratos.jpeg"

export default function Wishlist() {

    return (
        <div className=' detail-bg h-screen'>
            <div className=" flex flex-col justify-center">
                <h1 className=" p-4 text-lg">Hey gamer,</h1>
                <h1 className=" text-xl">The Wishlist Page is currently under construction!</h1>
                <div className=" flex justify-center">
                    <img src={happykratos} alt="" className=" mt-4 h-80 md:h-64 md:w-72 rounded-3xl"/> 
                </div>
            </div>
        </div>
    )
}
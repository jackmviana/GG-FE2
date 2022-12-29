import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { Carousel } from "flowbite-react"
import ReactStars from "react-stars"
import axios from "axios"
import CreateReview from "../Crud/CreateReview"

export default function GameDetails() {

    const [gameDetail, setGameDetail] = useState(null)
    const [gameReview, setGameReview] = useState(" ")

    const [isToggled, setIsToggled] = useState(false)

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    let {id} = useParams()

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get(`http://localhost:8000/games/${id}`)
            console.log(response.data)
            setGameDetail(response.data)
            setGameReview(response.data.reviews) 
        }
        
        getData()
    
    }, [])


    if (!gameDetail) {
        return <h2 className="loading">LOADING</h2>
    } else {
    return (
        <div className=" relative">
            <div className=" w-screen h-64 md:h-96" style ={{backgroundImage: `url(${gameDetail.photo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <div className=" absolute top-0 w-screen h-64 md:h-96" style={{background: 'linear-gradient(rgba(0,0,0,.3), rgba(24, 24, 24, .8), rgba(24, 24, 24, .9), rgba(24, 24, 24))'}}>
                <p className=" absolute bottom-12 md:bottom-24 left-3 text-2xl md:left-5 md:text-5xl">{gameDetail.title}</p>
                <div className=" absolute bottom-7 md:bottom-24 right-1/4 text-2xl md:right-2/4 w-6 h-6 md:w-7 md:h-7 border-lime-400 rounded-lg game-rating">
                        <p className=" text-sm  md:text-base">{gameDetail.rating}</p>
                </div>
            </div>

            <div className=" flex relative h-auto w-screen detail-bg">

                <div className=" w-1/2 detail-left mb-20">
                    <div className=" flex gap-8 md:gap-28 justify-center mb-10 mx-10">
                        <div>
                            <button className=" w-20 h-10 md:w-28 md:h-12 text-sm md:text-base text-center font-semibold rounded-lg">Add to Games</button>
                        </div>
                        <div>
                            <button className=" w-20 h-10 md:w-28 md:h-12 text-sm md:text-base text-center font-semibold rounded-lg">Add to Wishlist</button>
                        </div>
                    </div>

                    <div className=" mx-5 md:mx-12">
                        <p className=" text-left text-lg md:text-xl mb-3 font-semibold">About</p>
                        <p className=" text-xs md:text-base text-left">{gameDetail.description}</p>
                    </div>
                    
                    <div className=" mt-8 grid grid-cols-2 gap-5 mx-4">
                        <div className="">
                            <p className=" text-sm md:text-base text-slate-500 underline-offset-4">Release Date</p>
                            <p className=" text-sm md:text-base">{gameDetail.release_date}</p>
                        </div>
                        <div>
                            <p className=" text-sm md:text-base text-slate-500 underline-offset-4">Platform</p>
                            <p className=" text-sm md:text-base">{gameDetail.platform}</p>
                        </div>
                        <div>
                            <p className=" text-sm md:text-base text-slate-500 underline-offset-4">Developer</p>
                            <p className=" text-sm md:text-base">{gameDetail.developer}</p>
                        </div>
                        <div>
                            <p className=" text-sm md:text-base text-slate-500 underline-offset-4">Genre</p>
                            <p className=" text-sm md:text-base">{gameDetail.genre}</p>
                        </div>
                        <div>
                            <p className=" text-sm md:text-base text-slate-500 underline-offset-4">Age Rating</p>
                            <p className=" text-sm md:text-base">{gameDetail.age_rating}</p>
                        </div>
                    </div>
                </div>

                <div className=" w-1/2 detail-right mb-20">
                    <div className="h-56 sm:h-64 md:h-80 mx-2 md:mx-10">
                        <Carousel>
                        <iframe className=" h-full rounded-xl" src={gameDetail.video} title={gameDetail.video_title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <img className=" rounded-xl" src={gameDetail.photo} alt=""/>
                        <img className=" rounded-xl" src={gameDetail.photo} alt=""/>
                        <img className=" rounded-xl" src={gameDetail.photo} alt=""/>
                        </Carousel>
                        </div>
                </div>
                
            </div>

            <div className=" detail-bg">
                <div className="">
                    <p className=" text-3xl font-semibold text-left mx-10">Reviews</p>
                </div>

                <div className="">
                    <button onClick={() => setIsToggled(!isToggled)} 
                            className=" w-32 h-10 md:w-32 md:h-12 text-sm md:text-base text-center font-semibold rounded-lg">
                    Write Review
                    </button>
                    {isToggled && <CreateReview gameDetail={gameDetail}/>}
                </div>
                
                <div className=" flex justify-center">
                {gameReview.map((gameReview, id) => (  
                    <div className=" relative my-10 h-44 w-5/6 review-bg rounded-xl" key={id}>
                        <div className=" absolute top-4 left-4 h-7 w-7 bg-emerald-300 rounded-full"></div>
                        <p className=" absolute left-16 top-4 text-lg font-semibold">{gameReview.name}</p>
                        <div className=" absolute right-4 top-4">
                        <ReactStars
                                value={gameReview.rating}
                                edit={false}
                                size={24}
                                color2={'#ffd700'} />
                        </div>        
                        <p className=" absolute left-12 md:left-16 top-14 md:top-16 text-sm md:text-base">{gameReview.body}</p>
                    </div>
                    ))}
                </div>
                    
            </div>
        </div>
    )}
}
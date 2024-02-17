import React, { useEffect } from 'react'
import './blog.css'
import { Helmet } from 'react-helmet-async'



const cardData = [
    {
        megaCardPic: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmt8ZW58MHx8MHx8fDA%3D',
        megaCardPara: 'we are working here',
        megaCardTitle: 'mega-card-title',
        cardHeroName: 'shrihari R',
        cardHeroImg: 'https://www.svgrepo.com/show/433965/weary-face.svg',
        megaCardParaTwo: 'we are wixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        cardHeroRating: {
            starOne: 'https://www.svgrepo.com/show/434273/star.svg',
            starTwo: 'https://www.svgrepo.com/show/434273/star.svg',
            starThree: 'https://www.svgrepo.com/show/434273/star.svg',
            starFour: 'https://www.svgrepo.com/show/434273/star.svg',
            starFive: 'https://www.svgrepo.com/show/434273/star.svg',
        }
    }
]
const MegaCard = (props) => {


    return (
        <>
/* <div className="mega-card-img-holder w-full">
     <img src={props.megaCardPic} alt="" />
     <p className='mega-card-para'>{props.MegaCard}</p>
 </div>
 <div className="card-discription w-full">
     <div className="mega-card-title w-full">{props.megaCardTitle}</div>
     <div className="mega-card-para w-full">{props.megaCardParaTwo}</div>
 </div>
 <div className="card-hero-sec">

     <div className="card-hero-name">{props.cardHeroName}</div>
     <div className="card-hero-img w-[50px] "><img src={props.cardHeroImg} alt="" /></div>
     <div className="card-hero-ratings flex l">
         <img className='w-[50px]' src={props.cardHeroRating.starOne} alt="" />
         <img className='w-[50px]' src={props.cardHeroRating.starTwo} alt="" />
         <img className='w-[50px]' src={props.cardHeroRating.starThree} alt="" />
         <img className='w-[50px]' src={props.cardHeroRating.starFour} alt="" />
         <img className='w-[50px]' src={props.cardHeroRating.starFive} alt="" />
     </div>


 </div>/*
</>
)
}

const Blog = () => {
    useEffect(()=>{
        scrollTo(0,0)
    },[])
return (
<>
<Helmet>
    <title>wizinoa: Blog</title>
    <meta name='description' content="Explore insightful articles and updates on industry trends from wizinoa's blog." />
</Helmet>

    <iframe  src="https://wizinoa-it-solutions-madurai.blogspot.com/" title="blog" className='w-full h-screen blog-iframe' allowTransparency='true' 
    >
        
    </iframe>
</>
)
}

export default Blog
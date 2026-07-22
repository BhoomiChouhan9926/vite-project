import React from 'react'
import './Hero.scss'
import mainImg from '../../assets/main1.png'
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <h5 className='show-btn'>Your Memory Your Story ❤️</h5>
                <h1>
                    Preserve Your
                    <br />
                    <span>Precious Memories</span>
                    <br />
                    Forever ❤️
                </h1>
                <p>
                    Create beautiful digital scrapbooks, save your memories, write
                    letters, organize notes, and relive every special moment anytime.
                </p>

                <div className="hero-btns">
                    <button className="get-started">Get Started</button>
                    <button className="explore">Explore</button>
                </div>
            </div>

            <div className="hero-right">
                <img
                    src={mainImg}
                    alt="Hero"
                />
            </div>
        </section>
    )
}

export default Hero

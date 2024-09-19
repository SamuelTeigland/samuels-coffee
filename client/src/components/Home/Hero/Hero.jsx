import './hero.css'

export default function Hero() {
    return (
        <div className='hero__container'>
            <h2 className='hero__subheader'>Amazing Coffee</h2>
            <p className='hero__paragraph'>At an affordable price.</p>
            <div className='hero__button--container'>
                <a href='#'>
                    <button className='hero__button button__secondary'>Shop coffee</button>
                </a>
            </div>
        </div>
    )
}
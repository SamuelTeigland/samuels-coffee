import './productShowcase.css'

export default function ProductShowcase() {
    return (
        <div className='productShowcase__container'>
            <div className='productShowcase__subcontainer'>
                <img className='productShowcase__image' src='./images/mediumRoast.png' alt='Medium Roast Image' />
                <div className='productShowcase__text--container'>
                    <h2 className='productShowcase__subheader'>Sam's Coffee Vol. 1</h2>
                    <p className='productShowcase__paragraph'>Medium Roast</p>
                    <a className='productShowcase__button--container' href='#'>
                        <button className='productShowcase__button button__primary'>Shop Medium Roast</button>
                    </a>
                </div>
            </div>

            <div className='productShowcase__subcontainer'>
                <img className='productShowcase__image' src='./images/mediumRoast.png' alt='Medium Roast Image' />
                <div className='productShowcase__text--container'>
                    <h2 className='productShowcase__subheader'>Sam's Coffee Vol. 1</h2>
                    <p className='productShowcase__paragraph'>Medium Roast</p>
                    <a className='productShowcase__button--container' href='#'>
                        <button className='productShowcase__button button__primary'>Shop Medium Roast</button>
                    </a>
                </div>
            </div>

            <div className='productShowcase__subcontainer'>
                <img className='productShowcase__image' src='./images/mediumRoast.png' alt='Medium Roast Image' />
                <div className='productShowcase__text--container'>
                    <h2 className='productShowcase__subheader'>Sam's Coffee Vol. 1</h2>
                    <p className='productShowcase__paragraph'>Medium Roast</p>
                    <a className='productShowcase__button--container' href='#'>
                        <button className='productShowcase__button button__primary'>Shop Medium Roast</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
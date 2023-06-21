import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <div className='about'>
            <div className='back-home'><Link to='/'>&#8592; Home</Link></div>
            <div className='about-title'>
                <h1 className='about-title'>I can create a blog page about beautiful places on the planet. The page can feature stunning images of various locations and provide information about each place, such as history, culture, and unique features. Additionally, travel tips and recommendations for those who want to visit these places can be included. The blog can become an excellent resource for people who love to travel and explore new destinations. With engaging content and an attractive design, the blog can attract a wide audience and become a source of information about beautiful places around the world.</h1>
            </div>
        </div>
    )
}
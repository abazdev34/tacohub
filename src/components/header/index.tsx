import { Link } from 'react-router-dom'
import Logo from '../header/img/logo.svg'
const Header = () => {
	return (
		<header id='header'>
			<div className='container'>
				<div className='header'>
					<div className='logo'>
						<img src={Logo} alt='' />
					</div>
					<div className='title'>
						<div className='tel'>
							<h1>Доставка мексиканской еды</h1>
							<p>Время работы: 10:00 - 03:00</p>
						</div>
						<div className='nav'>
							<Link to={'home/'}>Меню</Link>
							<Link to={'/'}>Акции</Link>
							<Link to={'/'}>О доставке</Link>
							<Link to={'/'}>Отзывы</Link>
							<span>
								<Link to={'/'}>г Москва, ул Авангардная</Link>
							</span>
						</div>
					</div>
					<div className='btn'>
						<h2>+7977323049</h2>.
						<div className='blog'>
							<div className='voti'>
								<Link to={''}> Войти</Link>
							</div>
							<div className='tovar'>
								<Link to={''}>товаров</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

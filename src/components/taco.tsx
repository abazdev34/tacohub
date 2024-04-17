import React, { useState } from 'react'
import { Link } from 'react-scroll'

import Slider from './header/img/1f247c6e-9607-4993-938d-716f0b134cf9.jpg'
import Buro from './header/img/ccaad3e3-3bf8-482f-880c-ff6b0e55f468.jpg'
import Taco from './header/img/efc82022-fd8b-4280-8901-188e52c0d2af.jpg'
interface Image {
	img: string
	title?: string
	measure?: string
	price?: number
	description?: string
}

interface ITaco {
	id: string
	images: Image[]
	title?: string
}

const tacos: ITaco[] = [
	{
		id: 'Тако',
		images: [
			{
				img: Taco,
				title: 'Хрустящее тако',
				measure: '250г',
				price: 350,
				description:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste molestias neque eos consectetur minima sunt pariatur, repellat voluptate obcaecati vel eum et debitis magnam quos doloribus quaerat maiores nesciunt.',
			},
			{
				img: Taco,
				title: 'Хрустящее тако',
				measure: '250г',
				price: 522,
				description:
					' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste molestias neque eos consectetur minima sunt pariatur, repellat voluptate obcaecati vel eum et debitis magnam quos doloribus quaerat maiores nesciunt.',
			},
			{
				img: Taco,
				title: 'Хрустящее тако',
				measure: '250г',
				price: 200,
				description:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum iste molestias neque eos consectetur minima sunt pariatur, repellat voluptate obcaecati vel eum et debitis magnam quos doloribus quaerat maiores nesciunt.',
			},
		],
	},
	{
		id: 'Буррито',
		images: [{ img: Buro }, { img: Buro }, { img: Buro }],
		title: ' тако',
	},
	{
		id: 'Кесадильи',
		images: [{ img: Slider }, { img: Slider }, { img: Slider }],
		title: 'Хрустящее тако',
	},
	{
		id: 'Начос',
		images: [{ img: Slider }, { img: Slider }, { img: Slider }],
		title: 'Хрустящее тако',
	},
]
const TacoGallery: React.FC = () => {
	const [selectedTaco, setSelectedTaco] = useState<ITaco>(tacos[0])

	const handleTacoClick = (taco: ITaco) => {
		setSelectedTaco(taco)

		// DOM жаңыланышына убакыт берүү үчүн setTimeout колдонуу
		setTimeout(() => {
			const imagesElement = document.querySelector('.images')
			if (imagesElement) {
				imagesElement.scrollIntoView({
					behavior: 'smooth',
				})
			}
		}, 0)
	}

	return (
		<div>
			<div className='buttons'>
				{tacos.map(taco => (
					<Link key={taco.id} to={taco.id} smooth={true} duration={500}>
						<button>{taco.id}</button>
					</Link>
				))}
			</div>
			<div className='images'>
				{tacos.map(taco => (
					<div key={taco.id} id={taco.id} className='columnDiv'>
						<h1>{taco.id}</h1>

						<div className='tacos--img--container'>
							{taco.images.map((image, index) => (
								<div className='card' key={index}>
									<img src={image.img} alt={`Сүрөт ${index + 1}`} />
									<div className='card--title'>
										<p>{image.title}</p>
										<h6>{image.measure}</h6>
									</div>
									<div className='card--price'>
										<p>{image.price}</p>
										<button>+</button>
									</div>
									<div className='card--desc'>
										<p>{image.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default TacoGallery

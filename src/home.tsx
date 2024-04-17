import { FC } from 'react'

interface IHomeProps {
	background: string
	width: string
	height: string
	border: string
	margin: string
	padding: string
	logSmth: () => void
}

const Home: FC<IHomeProps> = ({
	background,
	width,
	height,
	border,
	margin,
	padding,
	logSmth,
}) => {
	return (
		<div>
			<div
				style={{
					width,
					height,
					background,
					border,
					margin,
					padding,
				}}
			>
				<button onClick={() => logSmth()}>click</button>
				<input
					type='text'
					style={{
						width,
						borderRadius: '10px',
						outline: 'none',
					}}
				/>
			</div>
		</div>
	)
}

export default Home

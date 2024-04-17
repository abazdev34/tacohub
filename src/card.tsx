// src/card.tsx
// src/card.tsx
import React from 'react'

interface CardProps {
	product: string // Эгерде product бир гана сүрөттүн URL'и болсо
}

const Card: React.FC<CardProps> = ({ product }) => {
	return <img src={product} alt='Product' />
}

export default Card

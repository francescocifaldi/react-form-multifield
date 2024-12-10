/**
 * Alcuni post dovranno rimanere senza immagine, quindi avere la proprietà image = undefined
 */
import myImg from './assets/iris.webp'

export const initialPosts = [
	{
		id: 1,
		title: 'Titolo del post',
		image: myImg /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html', 'css'],
		category: 'backend',
		published: true,
	},
	{
		id: 2,
		title: 'Titolo del post',
		image: undefined /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'css'],
		category: 'frontend',
		published: true,
	},
	{
		id: 3,
		title: 'Titolo del post',
		image: undefined /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'php'],
		category: 'express',
		published: true,
	},
	{
		id: 4,
		title: 'Titolo del post',
		image: myImg /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html'],
		category: 'react',
		published: false,
	},
]

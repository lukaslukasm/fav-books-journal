import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import type { Book } from '@/src/types/types';

type BookCardProps = {
	book: Book;
};

/**
 * Renders a card showing shorten book info. Opens modal on click with a full info.
 *
 */

export default function BookCard({ book }: BookCardProps) {
	return (
		<Card sx={{ maxWidth: 240 }}>
			<CardActionArea
				sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
				onClick={() => console.log('weee')}
			>
				<CardMedia
					component='img'
					height='200'
					sx={{ objectFit: 'contain', padding: '0.5rem' }}
					image={book.imagePath}
					alt='green iguana'
				/>
				<CardContent
					sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
				>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
					>
						{book.name}
					</Typography>
					<Typography
						variant='body2'
						sx={{
							color: 'text.secondary',
							overflow: 'hidden',
							display: '-webkit-box',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: 2,
						}}
					>
						{book.description}
					</Typography>
					<div
						className=''
						style={{ flexGrow: 1 }}
					></div>
					<Typography
						sx={{ marginTop: '0.5rem', display: 'block' }}
						variant='caption'
					>
						Click for more info
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

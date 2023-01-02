import Image from 'next/image';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';

export default function Gallery() {
  return (
    <>
      <div className='container-full bg-dark p-5' id='gallery-portfolio'>
        <Grid2 container spacing={4}>
          <Grid2 xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component='img'
                alt='illustration'
                height='200'
                image='/images/contact.jpg'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Visitez le site</Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 400 }} className='card'>
              <CardMedia
                component='img'
                alt='illustration'
                height='200'
                image='/images/contact.jpg'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Visitez le site</Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component='img'
                alt='illustration'
                height='200'
                image='/images/contact.jpg'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Visitez le site</Button>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 xs={12} md={6} lg={3}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component='img'
                alt='illustration'
                height='200'
                image='/images/contact.jpg'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Visitez le site</Button>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
        <h2 className='d-flex justify-content-center subtitle-gallery'>
          Et tellement d&#39;autres...
        </h2>
      </div>
    </>
  );
}

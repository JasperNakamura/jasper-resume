import IconColumn from './components/social.jsx'
import Header from './components/header.jsx'
import { Box, Container } from '@mui/system'
import { Card, CardMedia } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

export default function Home() {
  return (
    <>
      <Header/>
      <div>
        <IconColumn/>
        {/* Main Content Area */}
        <div style={{float: 'right', width: '95%', padding: '5em'}}>
          <Box>
            <h1>Jasper Van</h1>
          </Box>
          <Card sx={{maxWidth: '350px', borderRadius: '2em', float: 'right', marginRight: '10vw'}}>
            <CardMedia
              component="img"
              height='500px'
              alt="portrait"
              image={"portrait.png"}/>
          </Card>
          <Box>
            <p style={{width: '30%', paddingTop: '2em', paddingBottom: '2em'}}>
              Hello! My name is Jasper Van and I am a programmer and front-end web developer. 
              I am highly motivated and detail-oriented, with a strong foundation in HTML, CSS, and JavaScript. 
              I have experience using modern frameworks and libraries such as React, and I am always looking to learn and improve my skills.
              I am passionate about creating high-quality, user-friendly websites and applications, and I enjoy staying up to date with the latest trends and best practices in web development. 
              I am a team player and thrive in collaborative environments, and I am excited to bring my skills and enthusiasm to new challenges and opportunities. 
            </p>
          </Box>

          <ImageList sx={{ width: '60%', height: '50vh' }}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>by: {item.author}</span>}
                  position="below"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  )
}

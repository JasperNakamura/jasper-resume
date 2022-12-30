import IconColumn from './components/social.jsx'
import Header from './components/header.jsx'
import { Box, Container } from '@mui/system'

export default function Home() {
  return (
    <>
      <Header/>
      <div>
        <IconColumn/>
        <div style={{float: 'right', width: '95%'}}>
          <h1>Jasper Van</h1>
        </div>
      </div>
    </>
  )
}

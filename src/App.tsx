import './App.css'
import Puzzle from './Puzzle'
import { Box } from '@chakra-ui/react/box'

function App() {

  return (
    <>
      <Box bg='#011627' alignItems="center" height="100vh" width="100vw">
        <Puzzle />
      </Box>
    </>
  )
}

export default App

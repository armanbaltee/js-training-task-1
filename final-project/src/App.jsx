import './App.css'
import CursorWithShadow from './components/CursorWithShadow'
import Layout from './Layout'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
    <CursorWithShadow />
    <Layout>
      <Homepage />
    </Layout>
    </>
  )
}

export default App

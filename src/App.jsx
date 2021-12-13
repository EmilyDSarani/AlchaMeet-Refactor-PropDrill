import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import { useUser } from './context/UserContext'

function App() {
  // inital value should match the data type of end value
  // we might not be using user here, but since we wrapped app.js in the provider, this is how we can pass it to the children
  const { user } = useUser();
  return (
    <Layout >
      <Home />
    </Layout>
  )
}

export default App

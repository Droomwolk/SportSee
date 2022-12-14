import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/header/header'
import Homepage from '../pages/homepage/homepage'
import ErrorPage from '../pages/error/error';
import '../styles/main.scss'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/homepage/:id" element={<Homepage salutation="Bonjour" phrase="Félicitation ! Vous avez explosé vos objectifs hier 👏" />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App

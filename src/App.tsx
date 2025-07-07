import { Route, Routes } from 'react-router-dom'
import './App.css'
import '@/pages/contacts/style.css'
import MainLayout from './Layouts'
import Home from './pages/home'
import Contacts from './pages/contacts'
import Documentations from './pages/documentations'
import Blogs from './pages/blogs'


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/docs' element={<Documentations/>}/>
      </Route>
    </Routes>
  )
}

export default App

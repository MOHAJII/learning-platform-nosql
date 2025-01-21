import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import ListCoursesComponent from './component/ListCoursesComponent'
import AddCourse from './component/AddCourse'

function App() {

  return (
    <div className='font-mono'>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListCoursesComponent />}>
          </Route>
          <Route path='/courses' element={<ListCoursesComponent />}>
          </Route>
          <Route path='/add-course' element={<AddCourse />}>
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  )
}

export default App

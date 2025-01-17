import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import EmployeeComponent from './component/EmployeeComponent'
import ListCoursesComponent from './component/ListCoursesComponent'

function App() {

  return (
    <div className='font-mono'>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<ListCoursesComponent />}>
          </Route>
          <Route path='/employees' element={<ListCoursesComponent />}>
          </Route>
          <Route path='/add-course' element={<EmployeeComponent />}>
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import { ContactPage } from '../pages/contactPage'
import { DashboardPage } from '../pages/dashboardPage'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ContactPage/>}></Route>
        <Route path='/dashboard' element={<DashboardPage/>}></Route>
    </Routes>
  )
}

import { Route, Routes } from 'react-router-dom'
import { ContactPage } from '../pages/contactPage'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ContactPage/>}></Route>
    </Routes>
  )
}

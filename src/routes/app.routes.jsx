import { Routes, Route } from 'react-router-dom';

import { CreateMovie } from '../pages/CreateMovie';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';


export function AppRoutes() {
  return(
    <Routes>
      <Route path="/createmovie" element={<CreateMovie />} />  
      <Route path="/details" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
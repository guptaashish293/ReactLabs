import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'
import Six from './Six'
import Seven from './Seven'
import EIght from './EIght'
import Nine from './Nine'
import Eleven from './Eleven'
import Twelve from './Twelve'
import Thirteen from './Thirteen'
import Fifteen from './Fifteen'

export default function Ten() {
  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to='/one'>One</Link>
                </li>
                <li>
                    <Link to='/two'>Two</Link>
                </li>
                <li>
                    <Link to='/three'>Three</Link>
                </li>
                <li>
                    <Link to='/four'>Four</Link>
                </li>
                <li>
                    <Link to='/five'>Five</Link>
                </li>
                <li>
                    <Link to='/six'>Six</Link>
                </li>
                <li>
                    <Link to='/seven'>Seven</Link>
                </li>
                <li>
                    <Link to='/eight'>Eight</Link>
                </li>
                <li>
                    <Link to='/nine'>Nine</Link>
                </li>
                 <li>
                    <Link to='/eleven'>Eleven</Link>
                </li>
                <li>
                    <Link to='/twelve'>Twelve</Link>
                </li>
                <li>
                    <Link to='/thirteen'>Thirteen</Link>
                </li>
                <li>
                    <Link to='/fifteen'>Fifteen</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/one' element={<One/>}></Route>
            <Route path='/two' element={<Two/>}></Route>
            <Route path='/three' element={<Three/>}></Route>
            <Route path='/four' element={<Four/>}></Route>
            <Route path='/five' element={<Five/>}></Route>
            <Route path='/six' element={<Six/>}></Route>
            <Route path='/seven' element={<Seven/>}></Route>
            <Route path='/eight' element={<EIght/>}></Route>
            <Route path='/nine' element={<Nine/>}></Route>
            <Route path='/eleven' element={<Eleven/>}></Route>
            <Route path='/twelve' element={<Twelve/>}></Route>
            <Route path='/thirteen' element={<Thirteen/>}></Route>
            <Route path='/fifteen' element={<Fifteen/>}></Route>
            

        </Routes>
    </BrowserRouter>
  )
}

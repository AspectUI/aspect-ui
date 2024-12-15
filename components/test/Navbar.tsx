import {
  Navbar,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList
} from '@/app/src/components/Navbar'
import React from 'react'

const NavbarDemo = () => {
  return (
    <div>
      <Navbar collapseBreakpoint='md'>
        <NavbarContainer>
          <NavbarList>
            <NavbarItem>
              <a href='#home'>Home</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#about'>About</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#contact'>Contact</a>
            </NavbarItem>
          </NavbarList>
          <div className='flex items-center'>
            <h1 className='text-xl font-bold'>Logo</h1>
          </div>
          <NavbarList>
            <NavbarItem>
              <a href='#services'>Services</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#products'>Products</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#blog'>Blog</a>
            </NavbarItem>
          </NavbarList>
          <NavbarCollapseBtn />
          <NavbarCollapse>
            <NavbarItem>
              <a href='#home'>Home</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#about'>About</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#contact'>Contact</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#services'>Services</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#products'>Products</a>
            </NavbarItem>
            <NavbarItem>
              <a href='#blog'>Blog</a>
            </NavbarItem>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>

    </div>
  )
}

export default NavbarDemo

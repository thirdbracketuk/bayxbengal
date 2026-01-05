'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { SearchIcon } from 'lucide-react'

import type { Header } from '@/payload-types'

import {
  Bracket,
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from '@thirdbracket/bracketui'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Button } from '@payloadcms/ui'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    // <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
    //   <div className="py-8 flex justify-between">
    //     <Link href="/">
    //       <Logo loading="eager" priority="high" className="invert dark:invert-0" />
    //     </Link>
    //     <HeaderNav data={data} />
    //   </div>
    // </header>
    <header
      className="container relative z-20  bg-transparent "
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <Navbar
        theme={{
          background: 'bg-background',
          mobileMenu: 'bg-background',
        }}
      >
        <div className="flex items-center gap-6">
          <Navbrand>
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          </Navbrand>
          <Navlink className="hidden md:flex" href="./posts">
            Posts
          </Navlink>
          <Navlink className="hidden md:flex" href="./contact">
            Contact
          </Navlink>
        </div>
        <NavItem>
          <HeaderNav data={data} />
        </NavItem>
        <div className="md:hidden ">
          <HeaderNav data={data} />
        </div>
        <MobileNav>
          {/* <div className="space-y-2 py-1.5"> */}
          <Navlink href="./posts">Posts</Navlink>
          <Navlink href="./contact">Contact</Navlink>
          {/* <HeaderNav data={data} /> */}
          {/* </div> */}
        </MobileNav>
      </Navbar>
    </header>
  )
}

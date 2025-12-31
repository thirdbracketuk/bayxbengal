'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Button } from '@payloadcms/ui'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <>
      <nav className="flex gap-3 items-center">
        <Link href="/search">
          <span className="sr-only">Search</span>
          <SearchIcon className="w-5 text-primary" />
        </Link>
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="outline" size="sm" />
        })}
      </nav>
      {/* <nav className="md:hidden flex flex-col gap-3 ">
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="link" />
        })}
        
      </nav> */}
    </>
  )
}

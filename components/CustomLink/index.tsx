import Link from "next/link"
import { FC } from "react"

interface ICustomLinkProps {
  href: string,
  className?: string,
  children: React.ReactNode,
  rest?: any
}

export const CustomLink: FC<ICustomLinkProps> = ({ href, children, ...rest }) => {
  const isInternalLink = href && href.startsWith("/")
  const isAnchorLink = href && href.startsWith("#")

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className='text-gray-900' {...rest} >
          { children }
        </a>
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a className='text-gray-900' href={href} {...rest} >{ children }</a>
  }

  return <a className='text-gray-900' target="_blank" rel="noopener noreferrer" href={href} {...rest} >{ children }</a>
}

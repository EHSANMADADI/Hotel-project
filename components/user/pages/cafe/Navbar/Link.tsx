import Link from "next/link"
import { ReactNode } from "react"

const CustomLink = ({ href, children }: { href: string, children: ReactNode }) => {
    return <li className='text-white text-xl hover:border-b-2
     hover:border-amber-800 p-1 hover:text-neutral-400 border-transparent border-b-2
      duration-200 font-semibold'> <Link href={href}>{children}</Link></li>
}
export default CustomLink
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight: ['100', '200', '500', '400', '700'], subsets:['latin']})

export default function Home() {
  return (
    <header>
      Dashboard
    </header>
  )  
}

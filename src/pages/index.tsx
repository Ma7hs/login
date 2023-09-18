import { Poppins } from 'next/font/google'
import { useEffect } from 'react';
import { NextRequest } from '../../node_modules/next/server';
import NextApiResponse from 'next';
import { performApi } from '../utils/performApi';
import Link from '../../node_modules/next/link';

const poppins = Poppins({weight: ['100', '200', '500', '400', '700'], subsets:['latin']})


export default function Home() {

  const token = localStorage.getItem("token");
  
  if(!token){
    <Link href={"/login"}/>
  }

  return (
    <header>
      Dashboard
    </header>
  )  
}

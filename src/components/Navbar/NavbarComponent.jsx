'use client';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

export default function NavbarComponent() {
  return (
    <Navbar fluid className='bg-blue-800 py-5'>
      <Navbar.Brand href="/">
        <img src="https://istad.co/resources/img/CSTAD_120.png" alt="" style={{width: 60}}/>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white ms-2">CSTAD</span>
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Navbar.Link href="/" className='text-white font-bold'>Home</Navbar.Link>
        <Navbar.Link href="/enroll" className='text-white font-bold'>Enroll</Navbar.Link>
        <Navbar.Link href="/course" className='text-white font-bold'>Course</Navbar.Link>
        <Navbar.Link href="/it-news" className='text-white font-bold'>IT News</Navbar.Link>
        <Navbar.Link href="/job-opportunity" className='text-white font-bold'>Job Opportunity</Navbar.Link>
        <Navbar.Link href="/about-us" className='text-white font-bold'>About us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}


'use client';

import { Footer } from 'flowbite-react';

export default function FooterComponent() {
  return (
    <Footer container className='mt-20 bg-blue-800 rounded-none'>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand className='text-white'
            href="https://istad.co"
            src="https://istad.co/resources/img/CSTAD_120.png"
            alt="CSTAD Logo"
          />
          <Footer.LinkGroup>
            <Footer.Link className='text-white' href="#">Course</Footer.Link>
            <Footer.Link className='text-white' href="#">IT News</Footer.Link>
            <Footer.Link className='text-white' href="#">Job Opportunity</Footer.Link>
            <Footer.Link className='text-white' href="#">Privacy Policy</Footer.Link>
            <Footer.Link className='text-white' href="#">FAQ</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" className='text-white' by="Center of Science and Technology Advanced Development | All Rights Reserved" year={2024} />
      </div>
    </Footer>
  );
}

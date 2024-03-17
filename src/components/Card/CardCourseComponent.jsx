
'use client';

import { Card } from 'flowbite-react';

export default function CardCourseComponent() {
  return (
    <Card className="max-w-sm" imgSrc="https://beecrowd.io/wp-content/uploads/2023/01/Post-1_2-BKG.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        C++ Programming
      </h5>
      <p className="font-normal text-white">
        <span className='px-2 rounded-xl bg-red-600'>20% scholarship</span>
      </p>
      <p>
        C++ is one of the world most popular programming languages.
      </p>
    </Card>
  );
}

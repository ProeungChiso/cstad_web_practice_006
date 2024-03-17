
'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';

export default function CardContenComponent() {
  return (
    <Card
      className="max-w-sm"
      renderImage={() => <Image width={300} height={150} src="/images/contentImage.webp" alt="image 1" />}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        IT News
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet.
      </p>
    </Card>
  );
}

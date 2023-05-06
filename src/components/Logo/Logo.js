import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/data/img/logo.png"
      alt="logo"
      width={500}
      height={100}
      layout="responsive"
      objectFit="contain"
    />
  );
}

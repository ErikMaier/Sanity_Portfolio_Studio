import React from 'react';
import image from '../ErikMaierCVDesignDarker.jpg';

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Background Image"
        className="absolute object-cover w-full h-full"
      />
      <section>
        <h1>Hello. I'm Erik.</h1>
      </section>
    </main>
  );
}

import React from 'react';
import styles from '../heroSection/heroSection.module.css'
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return (
    <div className={`${styles.banner} container mx-auto border-2 border-white rounded-3xl mt-10 `}>
      <div className='pl-12 '>
      <h1 className='font-bold text-4xl   text-white' >Lorem ipsum dolor sit abet consectetur, adipisicing elit. Sed, repellat?</h1>
      <div>
        <Button variant='default'>Buy Now</Button>
        <Button variant='outline'>All Products</Button>
      </div>

      </div>
    </div>
  );
};

export default HeroSection;
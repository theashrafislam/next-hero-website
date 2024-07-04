import Meals from '@/components/Meals';
import React from 'react';
export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page",
};
const MealsPage = () => {
    return (
        <div className='m-12'>
            <h1 className='text-3xl text-red-500 font-semibold'>Choose Your Meals</h1>
            <p>Chose meals of you choice by searching.....</p>
            <Meals/>
        </div>
    );
};

export default MealsPage;
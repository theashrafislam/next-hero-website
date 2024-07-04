"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }
    const loadData = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await response.json();
        console.log(data.meals);
        setMeals(data.meals)
    }
    return (
        <div>
            <div className=''>
                <input onChange={handleInput} type="text" className='p-4 outline-none border-2 bg-gray-200 text-slate-900' placeholder='Enter Your Text' />
                <button onClick={() => loadData()} className='bg-red-400 p-4'>Search</button>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                {
                    meals.length == 0 ? <h3 className='my-5 text-center'>No Data Found</h3> : meals?.map((item, index) => (
                        <div key={index} className='border-2 p-4'>
                            {/* <img src={item.strMealThumb} alt="" /> */}
                            <Image src={item.strMealThumb} width={1000} height={700} alt='hello'/>
                            <h3><span className='font-bold'>Title:</span> {item.strMeal}</h3>
                            <h3><span className='font-bold'>Des:</span> {item.strInstructions.length > 20 ? item.strInstructions.slice(0, 200) : ""}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Meals;
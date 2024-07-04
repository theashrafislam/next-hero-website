import { Lato } from "next/font/google";

const font = Lato({weight: ['400', '700'], subsets: ['latin']});

const getTime = async() => {
    const time = await fetch('http://localhost:3000/time', {next: {revalidate: 5}});
    const data = await time.json();
    return data.currentTime;
}

export const metadata = {
    title: "About",
    description: "About Page of Powerful Website",
    keywords: ['about page', 'next hero about page']
};

const AboutPage = async() => {

    const currentTime = await getTime();
    console.log(currentTime);

    return (
        <div className={`${font.className} h-screen`}>
            <h1>Hello, I am About Page.</h1>
            <h1 className='text-2xl text-red-500 font-bold'>Time: {currentTime}</h1>
        </div>
    );
};

export default AboutPage;
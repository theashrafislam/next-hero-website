// import { getposts } from '@/services/postApi';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const getposts = async() => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
    const data = await response.json();
    // if(data){
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data;
}

const PostPage = async() => {
    const postsData = await getposts();
    return (
        <div>
            <h1 className='text-center text-2xl'>All Posts</h1>
            <div className='grid grid-cols-4 gap-10'>
                {
                    postsData?.slice(0, 20)?.map(({title, body, id}) => (
                        <div key={id} className='border-2 p-3'>
                            <p><span className='font-bold'>Title:</span> {title}</p>
                            <p><span className='font-bold'>Body:</span> {body}</p>
                            <button className='py-2 px-4 bg-red-400 text-white font-semibold'>
                                <Link href={`/posts/${id}`}>View Details</Link>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;
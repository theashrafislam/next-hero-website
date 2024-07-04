import React from 'react';

export const generateMetadata = async({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const postData = await res.json();
    return {
        title: postData.title,
        description: postData.body,
        keywords: postData.body.split(' ')
    }
}

const getpostData = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = response.json();
    return data;
}

const PostDetailsPage = async ({ params }) => {
    const { id, title, body } = await getpostData(params.id);
    return (
        <div>
            <div className='flex flex-col w-48 mx-auto text-left'>
                <h4>
                    <span className='font-bold'>ID Number:</span> {id}
                </h4>
                <h4>
                    <span className='font-bold'>Title:</span> {title}
                </h4>
                <h4>
                    <span className='font-bold'>Body:</span> {body}
                </h4>
            </div>
        </div>
    );
};

export default PostDetailsPage;
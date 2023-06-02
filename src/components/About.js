import React from 'react';

const About = () => {
    let url ="https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10211.jpg?w=996&t=st=1685700603~exp=1685701203~hmac=0b57023e398a759121b9f6c2dcb89d9ffa09db7197c0c22611c922e62c616601"
    return (
        <section class="w-4/5 mx-auto  bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">About Us</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={url} alt="mockup"/>
            </div>                
        </div>
    </section>
    );
};

export default About;
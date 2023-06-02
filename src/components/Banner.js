import React from 'react';

const Banner = () => {
    return (
        <section
        class="relative bg-[url(https://img.freepik.com/free-photo/medium-shot-girl-learning-math-school_23-2150470813.jpg?w=996&t=st=1685699373~exp=1685699973~hmac=2005467a65137b84c04155f3d87a3c3221db9488d3a8fe46260f9752124a3639)] bg-cover bg-center bg-no-repeat">
        <div
            class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
        </div>

        <div
            class="w-4/5 mx-auto relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
                <h3 class="text-sm text-white  font-bold sm:text-2xl">For The First Time</h3>
                <h1 class="text-3xl text-white font-bold sm:text-6xl">
                    Inter DU-7 Colleges
                    The Mega Tech Fest
                </h1>

                <p class="text-white mt-4 max-w-lg sm:text-xl/relaxed">
                    Shaheed Barakat Auditorium, Govt. Titumir College, Mohakhali, Dhaka
                </p>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                    <a href="#"
                        class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                    GET ADMISSION
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;
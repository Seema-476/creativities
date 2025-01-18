import React from 'react';

const FadeToReal = () => {

    return (
        <div className="py-12">
            <div className='container'>
                <div className='flex gap-2 justify-center flex-wrap'>
                    <img
                        src="/assets/images/png/tom-jerry.png"
                        alt="tom-jerry"
                        className="hover-effect max-w-[300px] w-full duration-700 scale-95 hover:scale-100 filter grayscale blur-sm brightness-50 hover:grayscale-0 hover:blur-0 hover:brightness-95 hover:shadow-2xl"
                    />
                    <img src="/assets/images/png/butterfly.jpg" alt="butterfly" className="hover-effect max-w-[300px] w-full duration-700 scale-95 hover:scale-100 filter grayscale blur-sm brightness-50 hover:grayscale-0 hover:blur-0 hover:brightness-95 hover:shadow-2xl" />
                    <img src="/assets/images/png/cap.jpg" alt="butterfly" className="hover-effect max-w-[300px] w-full duration-700 scale-95 hover:scale-100 filter grayscale blur-sm brightness-50 hover:grayscale-0 hover:blur-0 hover:brightness-95 hover:shadow-2xl" />
       </div>
            </div>
        </div>
    );
};

export default FadeToReal;

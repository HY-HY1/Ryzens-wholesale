import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 mt-20 min-h-[100px] text-white p-4 text-center">
                <div className='h-full bg-red-50 w-full'>

                </div>
                <div className='w-full h-10 border-t'>
                <p className='py-1 opacity-90'>&copy; {new Date().getFullYear()} Ryzenz Limited. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
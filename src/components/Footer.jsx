import React from 'react';

function Footer() {

    return (
        <div className="text-center">
            <h3 className="text-xl mt-16 font-semibold mb-4">Follow our work</h3>
            <div className="flex justify-center space-x-6 pb-16">
                <a href="#" className="text-blue-500 hover:text-red-600">LinkedIn</a>
                <a href="#" className="text-blue-500 hover:text-red-600">Instagram</a>
                <a href="#" className="text-blue-500 hover:text-red-600">Facebook</a>
                <a href="#" className="text-blue-500 hover:text-red-600">Dribbble</a>
                <a href="#" className="text-blue-500 hover:text-red-600">Twitter</a>
            </div>
        </div>
    )

}

export default Footer


import React from 'react';

function Footer() {

    return (
        <div className="text-center">
            <h3 className="text-xl mt-16 font-semibold mb-4">Follow our work</h3>
            <div className="flex justify-center space-x-6">
                <a href="#" className="text-link hover:text-hover-link">LinkedIn</a>
                <a href="#" className="text-link hover:text-hover-link">Instagram</a>
                <a href="#" className="text-link hover:text-hover-link">Facebook</a>
                <a href="#" className="text-link hover:text-hover-link">Dribbble</a>
                <a href="#" className="text-link hover:text-hover-link">Twitter</a>
            </div>
        </div>
    )

}

export default Footer


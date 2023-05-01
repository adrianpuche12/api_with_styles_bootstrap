import React from "react";

function Paginar({ prev, next, onPrevious, onNext }) {
    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }
    return (
        <nav className="my-5">
            <ul className='pagination justify-content-center'>
                {prev ?
                    <li className='page-item page-link'>
                        <button className="btn btn-warning" onClick={handlePrevious}>Previous</button>
                    </li>
                    : null
                }
                {next ?
                    <li className='page-item page-link'>
                        <button className="btn btn-primary" onClick={handleNext}>Next</button>
                    </li>
                    : null
                }
            </ul>
        </nav>
    );
}

export default Paginar;
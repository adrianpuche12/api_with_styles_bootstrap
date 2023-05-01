import React from "react";

const Characters = ({ characters = [] }) => {

    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col mb-4 border border-warning mx-1">
                    <div className="card">
                        <img src={item.image} alt="images" />
                        <div className="card-boby ">
                            <h5 className="card-title text-center text-light bg-danger">{item.name}</h5>
                            <hr />
                            <p className="text-center text-light bg-success">especies: {item.species}</p>
                            <p className="text-center text-light bg-primary">location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Characters;
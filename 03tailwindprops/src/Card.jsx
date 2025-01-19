import React from "react";

function Card() {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <h1 className="text-2xl bg-green-500 p-3 rounded">A card for photo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet molestias
        necessitatibus saepe earum nemo excepturi deserunt blanditiis vitae, est
        minima.
      </p>
    </div>
  );
}

export default Card;

import React, { useState } from "react";
import data from "./data";
import "./App.css";

function App() {
  const [count ,setCount]= useState(0);
  const [text, setText] = useState([]);

 const handleSubmit = (e) => {
   e.preventDefault();
   //console.log(count); typakay stringa aykain ba number
   let amount = parseInt(count);
  if(count <= 0){
    amount = 1;
  }
     if (count > 100) {
        amount = 100;
     }

     setText(data.slice(0, amount));

 }



  return (
    <div>
      <p className="text-3xl font-bold p-7 flex justify-center">
        Tired of boring lorem ipesum
      </p>

      <form action="" onSubmit={handleSubmit} className="mb-20">
        <div className="flex justify-center">
          <div className="">
            <label htmlFor="amount">paragraphs :</label>
            <input
              className="border-2 p-1  w-16 ml-2 rounded-lg "
              type="number"
              name="amount"
              id="amount"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-red-800 rounded-lg p-2 mx-5 flex items-center text-white uppercase"
          >
            generate{" "}
          </button>
        </div>

        <article className="grid grid-cols-1 mx-5  my-5 ">
          {text.map((item, index) => {
            return (
              <p className="text-sky-800 my-5" key={index}>
                <span className="text-red-700 font-bold">{index + 1} -</span>{" "}
                {item}
              </p>
            );
          })}
        </article>
      </form>
    </div>
  );
}

export default App;

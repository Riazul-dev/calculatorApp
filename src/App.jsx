import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.id));
  };

  const clear = () => setResult("");
  const del = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="max-w-96 min-h-screen px-2 mx-auto flex flex-col items-center justify-center gap-10">
      <div className="calculator">
        <input
          type="text"
          value={result}
          disabled
        />
        <div>
          <p className="bg-[rgb(217,217,217)] inline-block text-sm text-red-500 tracking-wider px-3 py-1 my-2 border border-slate-400 rounded-full"><span>Brand</span> Calculator</p>
        </div>

        <div className="buttons">
          <button className="operator" onClick={clear} type="button">
            AC
          </button>
          <button className="operator" onClick={del} type="button">
            DEL
          </button>
          <button className="operator" id="." onClick={handleClick} type="button">
            .
          </button>
          <button className="operator" id="/" onClick={handleClick} type="button">
            /
          </button>
          <button className="number" onClick={handleClick} id="7" type="button">
            7
          </button>
          <button className="number" onClick={handleClick} id="8" type="button">
            8
          </button>
          <button className="number" onClick={handleClick} id="9" type="button">
            9
          </button>
          <button className="operator" onClick={handleClick} id="*" type="button">
            *
          </button>
          <button className="number" onClick={handleClick} id="4" type="button">
            4
          </button>
          <button className="number" onClick={handleClick} id="5" type="button">
            5
          </button>
          <button className="number" onClick={handleClick} id="6" type="button">
            6
          </button>
          <button className="operator" onClick={handleClick} id="-" type="button">
            -
          </button>
          <button className="number" onClick={handleClick} id="1" type="button">
            1
          </button>
          <button className="number" onClick={handleClick} id="2" type="button">
            2
          </button>
          <button className="number" onClick={handleClick} id="3" type="button">
            3
          </button>
          <button className="operator" onClick={handleClick} id="+" type="button">
            +
          </button>
          <button className="number" onClick={handleClick} id="00" type="button">
            00
          </button>
          <button className="number" onClick={handleClick} id="0" type="button">
            0
          </button>
          <button className="number col-span-2" onClick={calculate} id="=" type="button">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

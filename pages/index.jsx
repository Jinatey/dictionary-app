import { useState } from "react";

import { FaBook } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { CiDark } from "react-icons/Ci";
import { CiSearch } from "react-icons/Ci";

export default function Home() {
  const [text, setText] = useState("");
  const [h1, setH1] = useState("Keyboard");

  return (
    <div className=" bg-white  mx-auto max-w-[500px]">
      <nav className=" my-10 ml-4 flex gap-3  justify-between">
        <div>
          <FaBook size={30} />{" "}
        </div>
        <div className=" flex gap-2 ">
          <p>serif</p>
          <button>t</button>
          <CiDark size={30} />
        </div>
      </nav>
      <div className=" flex my-4 ">
        <form
          onSubmit={(e) => {
            if (text.length < 1) {
              alert("No text to add");
            } else {
              e.preventDefault();
              setH1(text);
              setText("");
            }
          }}
        >
          <input
            className=" bg-slate-400 w-full rounded-sm p-2"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>

        <CiSearch size={40} />
      </div>

      <div>
        <div className="flex justify-between">
          <h1 className=" text-3xl ">{h1}</h1>
          <div>
            <button>
              <FaPlayCircle color="purple" size={60} />
            </button>
          </div>
        </div>
        <p className=" text-purple-700">/'kibdf/</p>

        <p className=" font-bold mt-4 mb-4">noun</p>
        <div>
          <p className=" mb-2 text-gray-500">meaning</p>
          <ul className=" list-disc ml-6">
            <li>Lorem, ipsum dolor.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, non!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi, harum?.
            </li>
          </ul>
          <div className=" flex gap-2 my-4">
            <p>sunonyms</p>
            <p className=" text-purple-600 font-bold">electronic keyboard</p>
          </div>
          <div>
            <p className=" font-bold mb-2">verb</p>
            <p className=" mb-2  text-gray-600">meaning</p>
            <ul className=" list-disc">
              <li className=" ml-2"> To type on a coumputer</li>
              <p>keyboarding ldsfhlkas</p>
            </ul>
            <div className="flex gap-3 my-4">
              <p className="  text-gray-500">source</p>
              <a className=" underline" href="#">
                https/dictionaryap
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

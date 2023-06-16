import React from "react";

export default function Home() {
  return (
    <div className="ml-10 bg-white ">
      <nav className="  ml-4 flex gap-3  ">
        <p>serif</p>
        <button>t</button>
        <p>icon</p>
      </nav>
      <div className=" m-4  ">
        <input type="text" />
      </div>

      <div>
        <h1 className=" text-3xl ">keyboard</h1>
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
          <div className=" flex gap-4 my-4">
            <p>sunonyms</p>
            <p className=" text-purple-600">electronic keyboard</p>
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
              <a className=" underline" href="#">https/dictionaryap</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

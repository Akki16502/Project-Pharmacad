"use client"

import { supabase } from "@/utils/supabase";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

function Modal() {
    const [isOpen, setIsOpen] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log(name, email, phone);
      const {data, error} = await supabase.from("posts").insert([{name, email, phone}]);
      setIsOpen(false)
      if(error) {
        console.log(error)
      }
      if(data) {
        console.log('Inserted data');
      }
    }

  return (
    <>
    { isOpen &&
    <>           
    <div className="w-full h-screen bg-lime-0 backdrop-blur-md fixed inset-0 z-30">
    </div>
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-2 max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">

                  <h3 className="text-3xl font=semibold">Sign Up</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right "
                    onClick={() => setIsOpen(false)}
                  >
                      X
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-[#EAFFD9] shadow-md rounded px-8 pt-6  w-full" onSubmit = {handleSubmit}>
                    <label className="block text-black text-sm font-bold mb-1">
                      Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" required id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label className="block text-black text-sm font-bold mb-1">
                      Contact No
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"required id="phone" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label className="block text-black text-sm font-bold mb-1">
                      Email Id
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"required id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <div><span className="note">*Do not worry your data is safe with us.</span></div>
                  <button
                    className="text-white bg-lime-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </>

    }

        </>

  );
}

export default Modal;
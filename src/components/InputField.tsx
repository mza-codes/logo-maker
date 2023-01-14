import {Icon} from "@iconify/react";
const inputClass:string = ``;

function InputField() {
  return (
    <div className='flex flex-col'>
        <label htmlFor="q"></label>
        <input type="text" id='q' className='p-2 outline-none border-2 border-gray-800' />
        
    </div>
  );
}

export default InputField;
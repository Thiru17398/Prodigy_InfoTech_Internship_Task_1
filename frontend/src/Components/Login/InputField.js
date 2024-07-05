import React , {useState} from 'react';


const InputField = ({PersonIcon , labelName , type , visibility , register , passwordMatch}) => {

    const inputStyle = "ml-2 border-2 border-black rounded pl-1 box-border";
    const[showPassword,setShowPassword] = useState(false);
    const toggleVisibilty = () => {
        setShowPassword(!showPassword);
    }

  return (
    <div className='flex box-border '> 
        <div className='w-[180px]'>
            {PersonIcon}
            <label className='ml-4 text-left '>{labelName}</label>
        </div>
        <div className={"flex gap-3 ml-4"} >
        <input type={type === "password" && showPassword ? "text" : type} {...register} className={type === "password" && !passwordMatch ? inputStyle +"m-10": inputStyle } required/>
        <div onClick={toggleVisibilty} className='cursor-pointer'>
            {
                visibility
            }
        </div>
        </div>
        
      </div>
  )
}

export default InputField;
'use client'
import {useRef, useState } from "react";
import { Button } from "@/components";
import { FiPlus } from "react-icons/fi";

// NEW STUDENT FORM COMPONENT
const NewStudentForm = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNewStudentForm = () => {
        setIsOpen(!isOpen);
    };
  
    const formRef = useRef<HTMLFormElement>(null);
  
    function handleClear() {
      formRef.current?.reset();
      console.log("clear")
    };
  
    function scrollTop() {
      window.scrollTo(0, 0)
    }
    
    return (
      <div>
        {/* NEW STUDENT BUTTON */}
        <Button variant={'small-circle'} className='z-[30] absolute top-4 right-[70px]' onClick={toggleNewStudentForm}>
          <FiPlus size={24} />
        </Button>
  
        {/* NEW EVENT FORM */}
        <div className={`${isOpen ? "" : "translate-y-full" } bottom-0 absolute rounded-t-2xl left-0 top-0 mt-[5vh] w-full bg-white z-[120] transition-all duration-300 flex flex-col justify-between`}>
  
          <div className='flex flex-row items-center p-1'>
          <h1 className='font-semibold text-lg p-5 absolute text-center w-full'>New Student</h1>
          <Button variant='close' className='ml-auto z-[120]' onClick={toggleNewStudentForm}></Button>
          </div>
  
          <form ref={formRef} action="" className='p-5 pt-0 flex flex-col gap-4 overflow-y-scroll h-full pb-[8rem]'>
  
            <div className='flex flex-col gap-1'>
              <label className='form__label' htmlFor="firstName">First Name</label>
              <input autoComplete='off' type="text" name="firstName" id="firstName" className={`form__input`} onBlur={scrollTop}  />
            </div>
  
            <div className='flex flex-col gap-1'>
              <label className='form__label' htmlFor="lastName">Last Name</label>
              <input autoComplete='off' type="text" name="lastName" id="lastName" className={`form__input`} onBlur={scrollTop}  />
            </div>
  
            <div className='flex flex-col gap-1'>
              <label className='form__label' htmlFor="middleName">Middle Initial</label>
              <input autoComplete='off' type="text" name="middleName" id="middleName" className={`form__input`} onBlur={scrollTop}  />
            </div>
  
            <div className='flex flex-col gap-1'>
              <label className='form__label' htmlFor="suffix">Suffix</label>
              <input autoComplete='off' type="text" name="suffix" id="suffix" className={`form__input`} onBlur={scrollTop} />
            </div>
  
            <div className='flex flex-col gap-1'>
              <label className='form__label' htmlFor="studentID">Student ID</label>
              <input autoComplete='off' type="text" name="studentID" id="studentID" className={`form__input`} onBlur={scrollTop} />
            </div>
  
            <div className='flex flex-col gap-1'>
              <label className='form__label' htmlFor="course">Course</label>
              <select name="" id="" className='form__input'>
                <option value="" selected></option>
                <option value="">BSCE</option>
                <option value="">BS INFO TECH</option>
                <option value="">BSIT</option>
                <option value="">BOT</option>
                <option value="">BSHM</option>
                <option value="">BSTM</option>
                <option value="">BSE</option>
                <option value="">BSBA</option>
                <option value="">BSAIS</option>
                <option value="">BAC</option>
                <option value="">BTVTED</option>
                <option value="">BSEd.</option>
                <option value="">BEED</option>
                <option value="">BSN</option>
                <option value="">BSCRIM</option>
              </select>
            </div>
  
            <div className='flex flex-col gap-1'>
              <label className='form__label' htmlFor="year">Year</label>
              <select name="" id="" className='form__input'>
                <option value="" selected></option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </div>
  
            <div className='flex flex-col gap-1'>
              <label className='form__label' htmlFor="studentID">Section</label>
              <input autoComplete='off' type="text" name="studentID" id="studentID" className={`form__input`} onBlur={scrollTop}  />
            </div>
  
          </form>
          <div className={`z-[120] flex gap-3 w-full p-5 pb-8 bg-white`}>
            <Button variant='secondary' onClick={() => {
              handleClear()
              toggleNewStudentForm()
            }}>Cancel</Button>
            <Button variant='primary' onClick={() => {
              handleClear()
              toggleNewStudentForm()
            }}>Post</Button>
          </div>
        </div>
  
  
        {/* BACKDROP */}
        <div className={`z-[110] bottom-0 left-0 absolute h-full w-full bg-black bg-opacity-70 ${isOpen ? "block" : "hidden" }`} onClick={toggleNewStudentForm}></div>
      </div>
    )
}

export default NewStudentForm
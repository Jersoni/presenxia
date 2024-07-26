'use client'
import styles from './styles.module.css';
import { useEffect, useRef, useState } from "react";
import { SearchBar, StudentCard, NewStudentForm, Filter } from "@/components";

interface Student {
  id: number
  firstName: string
  lastName: string
  course: string
  year: number
  section: string
}

const Page: React.FC = () => {

  const [ data, setData ] = useState<Student[]>([])
  const fetchRef = useRef(false)

  useEffect(() => {

    if(fetchRef.current) return;
    fetchRef.current = true;
    
    const getStudents = async () => {
      try {
        const res = await fetch('/api/students')
        const json = await res.json()

        if(!res.ok) {
          console.error('Error fetch students.')
          return
        }

        if(!data) {
          console.log('No student Found')
        }

        setData(json)
        return

      } catch (error) {
        console.error(error)
      }
    }

    getStudents()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(data)
  
  return (
    <div className={` max-h-[100vh] pt-[4.5rem]`}>
      <NewStudentForm /> {/* Scroll down to see component */}
      <Filter className='absolute right-5 top-4 z-[30]' />
      <div className={` ${styles.studentsList} pb-40 px-5 overflow-y-auto min-h-[calc(100vh-4.5rem)] max-h-[calc(100vh-4.5rem)]`}> 
        <SearchBar className='mb-6' />
        {data.length !== 0 && data.map(student => (
          <StudentCard key={student.id} studentData={student} />
        ))}
        {!data && <span>Could not fetch students forn the database.</span>}
      </div>
    </div>
  )
}

export default Page
'use client'
import React, { useRef } from "react";
import Container from "./Ui/Container";


export default function TaskForm({handleCreateTask}: {handleCreateTask:(formData: FormData) => void}) {
    const ref = useRef<HTMLFormElement>(null);
    return (
        <Container>
        <form className="mb-4 flex gap-x-2 items-center" action={(formData)=>{
            handleCreateTask(formData);
            ref.current?.reset();
            }} 
            ref={ref}>
            <div className="grow">
                <label htmlFor="name" className="text-sm mb-2 hidden" aria-label="New Task">New Task</label>
                <input name="name" type="text" id="name" className="shadow appearance-none border-2 border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent" placeholder="Create task"/>
                <button className="py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32">Submit</button>
            </div>
        </form>
        </Container>
    )
}
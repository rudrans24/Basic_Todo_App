import React, { useEffect, useRef, useState } from 'react';
import todoIcon from '../assets/todo_icon.png';
import Todoitems from './Todoitems';

const Todo = () => {
    const inputRef = useRef();

    const addTask = () => {
        const inputTask=inputRef.current.value.trim();

        if (inputTask===""){
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputTask,
            isComplete: false,
        }

        setTodoList((prev)=>[...prev, newTodo]);

        inputRef.current.value="";
    } 

    const [todoList, setTodoList]=useState([]);

    const deleteTodo=(id)=>{
        setTodoList((prev)=>{
            return prev.filter((todo)=>todo.id!=id)
        })
    }

    const toggle = (id) => {
        setTodoList((prev)=>{
            return prev.map((todo)=>{
                if(todo.id===id){
                    return {...todo, isComplete: !todo.isComplete}}
                return todo;
            })
        })
    }

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl overflow-y-scroll max-h-[650px]'>

            {/* ___________title goes here______________ */}

            <div className='flex items-center mt-7 gap-2'>
                <img src={todoIcon} alt='' className='w-8' />
                <h1 className="text-3xl font-semibold">To-Do List</h1>
            </div>

            {/* ___________input box goes here______________ */}
            
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref={inputRef} type='text' placeholder='Add your task.' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' />
                <button onClick={addTask} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add</button>
            </div>

            {/* ___________todo list goes here______________ */}

            <div>
                {todoList.map((task,index) => {
                    return <Todoitems toggle={toggle} key={index} task={task.text} id={task.id} isComplete={task.isComplete} deleteTodo={deleteTodo} />
                })}
            </div>
        </div>
    )
}

export default Todo
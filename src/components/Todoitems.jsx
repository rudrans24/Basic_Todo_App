import React from 'react'
import tick from '../assets/tick.png'
import notTick from '../assets/not_tick.png'
import trashBox from '../assets/delete.png'

const Todoitems = ({task, id, isComplete, deleteTodo, toggle}) => {
    return (
        <div className='relative flex items-center my-3 gap-2'>
            <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
                <img src={isComplete?tick:notTick} alt='' className='w-7'/>
                <p className='text-slate-700 ml-4 text-[17px]'>{task}</p>
            </div>

            <img src={trashBox} onClick={()=>{deleteTodo(id)}} alt='' className='w-3.5 cursor-pointer'/>
        </div>
    )
}

export default Todoitems

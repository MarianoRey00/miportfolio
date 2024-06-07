import React from 'react'
import { ProjectList } from './ProjectsList'

export function Preview() {
  return (
    <div className='w-[550px] flex justify-center h-screen fixed top-0  py-4 border-l-[1px] border-zinc-800 right-0'>
              <div className='border-[1px] border-orange-50 h-[454px] rounded-3xl mt-[110px]'>
                  <div className='bg-orange-50 w-60 h-[450px] border-[10px] border-neutral-900 rounded-3xl overflow-auto'>
                      <div className='relative h-full'>
                          <div className='absolute inset-0 overflow-auto p-4'>
                            <div className='flex justify-center mb-4'>
                              <div className='w-18 h-18 rounded-full bg-neutral-800 '>
                                <p className='p-6 font-sans text-xl'>MR</p>
                              </div>
                            </div>
                              <ProjectList/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  )
}

export default Preview
import React from 'react'

const Article = () => {
  return (

    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center space-y-2'>
            <h1 className='text-4xl font-bold text-[#013B52]'>Articles</h1>
            <div className='bg-[#013B52] w-[150px] h-1'></div>
        </div>
        <div class="p-10 grid grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-x-[70px]">  
            <div class="max-w-[400px] my-[15px] md:my-[30px] rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/mountain.jpg" alt="Mountain"/>
                <div class="px-6 py-4">
                    <div class="text-[#013B52] font-bold text-xl mb-2">Mountain</div>
                    <button className='bg-[#013B52] md:px-4 md:py-2 px-3 py-1 text-sm md:my-2 md:text-ls my-4 rounded-[5px] text-white'>Read</button>
                </div>
                
                <div class="px-6 pt-3 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#winter</span>
                </div>
            </div>
            <div class="max-w-[400px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[590px] my-[15px] md:my-[30px] rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/mountain.jpg" alt="Mountain"/>
                <div class="px-6 py-4">
                    <div class="text-[#013B52] font-bold text-xl mb-2">Mountain</div>                  
                    <button className='bg-[#013B52] md:px-4 md:py-2 px-3 py-1 text-sm md:my-2 md:text-ls my-4 rounded-[5px] text-white'>Read</button>
                </div>
                
                <div class="px-6 pt-3 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#winter</span>
                </div>
            </div>
            <div class="max-w-[400px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[590px] my-[15px] md:my-[30px] rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/mountain.jpg" alt="Mountain"/>
                <div class="px-6 py-4">
                    <div class="text-[#013B52] font-bold text-xl mb-2">Mountain</div>                   
                    <button className='bg-[#013B52] md:px-4 md:py-2 px-3 py-1 text-sm md:my-2 md:text-ls my-4 rounded-[5px] text-white'>Read</button>
                </div>
                
                <div class="px-6 pt-3 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#winter</span>
                </div>
            </div>
            <div class="max-w-[400px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[590px] my-[15px] md:my-[30px] rounded overflow-hidden shadow-lg">
                <img class="w-full" src="/mountain.jpg" alt="Mountain"/>
                <div class="px-6 py-4">
                    <div class="text-[#013B52] font-bold text-xl mb-2">Mountain</div>
                    <button className='bg-[#013B52] md:px-4 md:py-2 px-3 py-1 text-sm md:my-2 md:text-ls my-4 rounded-[5px] text-white'>Read</button>
                </div>
                
                <div class="px-6 pt-3 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">#winter</span>
                </div>
            </div>
           
        
        </div>
        <div>
        <button className='bg-[#013B52] px-6 py-3 text-ls my-4 rounded-[5px] text-white'>More Articles</button>
        </div>
        <div className='h-[1.5px] w-full bg-gray-300'></div>
    </div>
    
  )
}

export default Article

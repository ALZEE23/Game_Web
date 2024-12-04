
export default function Landing() {
   return (
      <>
         <section id='Navbar'>
            <div className='fixed w-screen sm:px-40'>
               <div className='sm:flex bg-[#21201F] px-5 py-4 justify-between hidden'>
                  <div className='flex gap-12 items-center'>
                     <h1 className='font-staatliches text-[#DFDFF2] text-4xl ' >pplg</h1>
                     <div className='flex gap-7'>
                        <button>
                           <h1 className='font-mono font-semibold text-[#DFDFF2]' >Games & News</h1>
                        </button>
                        <button>
                           <h1 className='font-mono font-semibold text-[#DFDFF2]' >About</h1>
                        </button>
                        <button>
                           <h1 className='font-mono font-semibold text-[#DFDFF2]' >Contact</h1>
                        </button>
                     </div>
                  </div>
                  <div className='flex justify-center pr-5'>
                     <button className='bg-[#DFDFF2] px-5'>
                        <h1 className='font-mono font-semibold text-[#21201F]' >Interested</h1>
                     </button>
                  </div>
               </div>
               <div className='sm:hidden bg-[#21201F] px-5 py-4 justify-between flex'>
                  <div className='flex gap-12 items-center'>
                     <h1 className='font-staatliches text-[#DFDFF2] text-4xl ' >pplg</h1>
                  </div>
                  <div className='flex justify-center'>
                     <button className='bg-[#DFDFF2] px-5'>
                        <h1 className='font-mono font-semibold text-[#21201F]' >=</h1>
                     </button>
                  </div>
               </div>
            </div>
         </section>

         <section className=''>
            <div className='items-center w-screen flex-col flex h-[85vh] justify-center pb-30 gap-5'>
               <h1 className='text-7xl  font-staatliches'>
                  PPLG
               </h1>
               <h1 className='w-96 font-mono font-semibold text-xl text-center'>
                  Makers of Barda, Rumble Academia, Rupapa Cooking, Expiation & The Dukuns
               </h1>
            </div>
         </section>
         <section>
            <div className='sm:grid-cols-2 gap-8 grid sm:px-40 px-5 w-screen mb-56 '>
               <div className='bg-white inline-block space-y-3 h-96 pb-10 sm:h-auto'>
                  <div className='w-full h-[15rem] sm:h-[26rem] bg-black'>
                  </div>
                  <div className=''>
                     <h1 className='font-mono font-semibold text-center'>Lorem</h1>
                     <h1 className='text-center font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus porro cupiditate.</h1>
                  </div>
               </div>
               <div className='bg-white inline-block space-y-3 h-96 pb-10 sm:h-auto'>
                  <div className='w-full h-[15rem] sm:h-[26rem] bg-black'>
                  </div>
                  <div className=''>
                     <h1 className='font-mono font-semibold text-center'>Lorem</h1>
                     <h1 className='text-center font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus porro cupiditate.</h1>
                  </div>
               </div><div className='bg-white inline-block space-y-3 h-96 pb-10 sm:h-auto'>
                  <div className='w-full h-[15rem] sm:h-[26rem] bg-black'>
                  </div>
                  <div className=''>
                     <h1 className='font-mono font-semibold text-center'>Lorem</h1>
                     <h1 className='text-center font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus porro cupiditate.</h1>
                  </div>
               </div><div className='bg-white inline-block space-y-3 h-96 pb-10 sm:h-auto'>
                  <div className='w-full h-[15rem] sm:h-[26rem] bg-black'>
                  </div>
                  <div className=''>
                     <h1 className='font-mono font-semibold text-center'>Lorem</h1>
                     <h1 className='text-center font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus porro cupiditate.</h1>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <div className='bg-[#21201F] h-96'></div>
         </section>
      </>
   )
}
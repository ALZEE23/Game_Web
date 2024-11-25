
export default function Landing() {
   return (
      <>
         <section id='Navbar'>
            <div className='fixed w-screen px-40'>
               <div className='flex bg-[#21201F] px-5 py-4 justify-between '>
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
            </div>

         </section>
         <section className='Header'>
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
            <div className='h-screen grid-cols-2 gap-8 grid px-40 w-screen '>
               <div className='bg-white '></div>
               <div className='bg-black'></div>
               <div className='bg-black '></div>
               <div className='bg-white '></div>
            </div>
         </section>
      </>
   )
}
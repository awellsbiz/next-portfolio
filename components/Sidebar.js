import Image from 'next/image'

export default function Sidebar() {
    return (
        
          <div className=' bg-neutral-500 p-8 mb-1 max-h-fit'>
              <Image
                src="/AnthonyWells.jpg"
                alt="Picture of the author"
                width={150}
                height={150}
                className="rounded-full mx-auto"  
              />
              <h1 className="text-6xl font-bold text-center">
               Anthony Wells
              </h1>
              <p className="mt-3 text-2xl text-center">
                Full Stack Software Engineer | Los Angeles, CA
              </p>
          
        
            </div>
            
    )
}
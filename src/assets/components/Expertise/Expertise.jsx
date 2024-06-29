import './expertise.css'
import expertise from './img/Rectangle.png'
function Expertise() {
  return (
    <section className="w-full my-32 h-auto max-[680px]:mb-14 mt-18 px-6" id="technologies">
        <div className="text-center my-7 mx-auto">
            <h2 className='text-[38px] font-semibold leading-none mb-2 pb-4'>
                Our Tech Expertise
            </h2>
            <p className='font-[400] text-[18px] opacity-[0.7] text-white'>
            We strive to add value to our clients' operative business. We solve complex problems by building fundamental and secure blockchain-based solutions for enterprises while applying the most advanced and efficient technologies available.
            </p>
            <img src={expertise} alt="" className='max-w-full h-auto mx-auto my-12' />
        </div>
    </section>
  )
}

export default Expertise
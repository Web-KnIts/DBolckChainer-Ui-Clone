import img1 from './img/1in4.svg'
import img2 from './img/2in4.svg'
import img3 from './img/3in4.svg'
import img4 from './img/4in4.svg'
import './whydblock.css'
function WhyDblock() {
  return (
    <section className="w-[80vw] mx-auto py-[3rem]"> 
        <div className="w-[50%] py-[3rem] max-[860px]:w-full" id="WhyDblock-heading">
            <h2 className="text-4xl py-[5px] font-bold mb-[1rem] max-[760px]:text-3xl ">Why dBlockchainers</h2>
            <p className="text-[18px] text-[#adb5bd] mb-[1rem] max-[760px]:text-[15px] max-[760px]:mb-0">We design, build, launch, and support digital products. Our team crafts solutions that power up your business, and also are flexible and scalable enough to meet future needs.</p>
        </div>
        <div className=" -mx-1">
            <div className="px-1 mt-2 flex flex-wrap gap-[6px]  w-full ">
              <div className="h-full p-[1.5rem] rounded-[28px_0px_0px_0px] bg-[#13131A] w-[48%] max-[860px]:min-h-[215px] max-[760px]:p-5">
                <img src={img1} alt="" className="mb-[1rem] max-w-[100%] h-auto"/>
                <h5 className='text-[18px] font-bold mb-4 gradient-head max-[760px]:text-[14px]'>flexible</h5>
                <p className='text-[16px] text-[#adb5bd] opacity-[0.7] max-[760px]:text-[12px]'>Customized solutions according to your business needs</p>
              </div>
              <div className="h-full p-[1.5rem] rounded-[0px_28px_0px_0px] bg-[#13131A] w-[48%] max-[860px]:min-h-[215px] max-[760px]:p-5">
                <img src={img2} alt="" className="mb-[1rem] max-w-[100%] h-auto"/>
                <h5 className='text-[18px] font-bold mb-4 gradient-head max-[760px]:text-[14px]'>Reliable</h5>
                <p className='text-[16px] text-[#adb5bd] opacity-[0.7] max-[760px]:text-[12px]'>Solutions your business can always rely on for all future needs</p>
              </div>
              <div className="h-full p-[1.5rem] rounded-[0px_0px_0px_28px] bg-[#13131A] w-[48%] max-[860px]:min-h-[215px] max-[760px]:p-5">
                <img src={img3} alt="" className="mb-[1rem] max-w-[100%] h-auto"/>
                <h5 className='text-[18px] font-bold mb-4 gradient-head max-[760px]:text-[14px]'>Accessible</h5>
                <p className='text-[16px] text-[#adb5bd] opacity-[0.7] max-[760px]:text-[12px]'>Easy to work with hands-on solutions to meet all your business needs </p>
              </div>
              <div className="h-full p-[1.5rem] rounded-[0px_0px_28px_0px] bg-[#13131A] w-[48%] max-[860px]:min-h-[215px] max-[760px]:p-5">
                <img src={img4} alt="" className="mb-[1rem] max-w-[100%] h-auto"/>
                <h5 className='text-[18px] font-bold mb-4 gradient-head max-[760px]:text-[14px]'>Scalable</h5>
                <p className='text-[16px] text-[#adb5bd] opacity-[0.7] max-[760px]:text-[12px]'>Upgrade and expand your custom solution as your business grows</p>
              </div> 
            </div>
        </div>
    </section>
  )
}

export default WhyDblock
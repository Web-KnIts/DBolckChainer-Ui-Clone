import {instagram,facebook,linkedin,logo,twitter} from './img/index.js'
import './footer.css'
function Footer() {

  return (
        <section className="bg-[#131319] mt-12 w-screen">
         <div className='w-[85vw] m-auto px-3 pt-[50px] pb-[150px] max-[767px]:m-auto max-[767px]:p-5'>
         <div className="py-40 flex max-[767px]:justify-center max-[767px]:m-auto  max-[767px]:text-center max-[767px]:pb-20 max-[767px]:pt-6"> 
                <img src={logo} alt="" className='w-[250px] max-[767px]:w-[170px]'/>
          </div>
          <div className='text-[rgba(255,255,255,0.89)] flex justify-between items-center pt-3 border-[rgba(255,255,255,0.15)] border-t-[1px] max-[767px]:pt-4 max-[767px]:flex-col-reverse max-[767px]:gap-[25px]'>
            <p className='text-[14px] font-[500] max-[767px]:text-[10px]'>&copy; 2021-2024 dBlockchainers. All Rights Reserved</p>
            <nav className='list-none flex justify-between items-center basis-[40%] max-[767px]:w-[70%] max-[600px]:w-[100%]  '>
              <li><a href="https://www.instagram.com/dblockchainers/?igshid=YmMyMTA2M2Y%3D" target='_blank'><img src={instagram} alt="" /></a></li>
              <li><a href="https://www.linkedin.com/company/dblockchainers/" target='_blank'><img src={linkedin} alt="" /></a></li>
              <li><a href="https://www.facebook.com/dblockchainers" target='_blank'><img src={facebook} alt="" /></a></li>
              <li><a href="https://twitter.com/DBlockchainers" target='_blank'><img src={twitter} alt="" /></a></li>
            </nav>
          </div>
         </div>
        </section>

  )
}

export default Footer
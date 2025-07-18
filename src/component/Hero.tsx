import FilledButton from "./FilledButton";
import computer from "../assets/hero/desktop.svg"
import star from "../assets/hero/Stars.svg"
import starMob from "../assets/hero/StarsMob.svg"

const Hero:React.FC = ()=>{
  return(
    <>

    <div className="md:flex md:flex-row  font-['Manrope'] items-center md:px-20 px-8 gap-10 justify-between md:mt-0 py-8 sm:py-28 md:py-0">
        <div className="flex flex-col gap-10">
            <div className="flex flex-row">
            <h1 className="md:text-[50px] text-[38px]  sm:text-[40px]  font-semibold md:w-[35rem]">Welcome to Gooziri, Where Data Meets Purpose.</h1>
             <img src={star} className="hidden md:block"/>
             <img src={starMob} className=" md:hidden"/>
            </div>
            <p className="md:w-[30rem] ">From Finance to Resource Management, every team gets a tailored view of what matters. Whether you're leading a project or managing people, Gooziri gives you real-time clarity, intelligent dashboards, and seamless collaboration all in one place.</p>

                <FilledButton text='Get Started' textColor='#FFFF' backgroundColor='#1355FF' img=""  pathname='/signIn' width="15rem"/>
          
        </div>

        <div className="hidden md:block">
            <img src={computer} />
        </div>
      
            
      
    </div>

    </>
  )
}
export default Hero;
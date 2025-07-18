import FilledButton from "../FilledButton";
import computer from "../../assets/hero/desktop.svg"
import star from "../../assets/hero/Stars.svg"
import starMob from "../../assets/hero/StarsMob.svg"
import style from "../hero/index.module.css"

const Hero: React.FC = () => {
  return (
    <>
      <div className={`flex flex-col md:flex-row font-['Manrope'] items-center justify-center md:justify-between xl:px-20 px-8 gap-10 py-20 ${style.hero}`}>
      <div className="flex flex-col gap-8 flex-1 max-w-none md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="flex flex-row items-start gap-4">
            <h1 className={`lg:text-[50px] md:text-[40px] font-semibold md:w-[35rem] !leading-[1.5] ${style.heroTxt}`}>Welcome to Gooziri, Where Data Meets Purpose.</h1>
            <img src={star} className="hidden xl:block object-contain flex-shrink-0"/>
            <img src={starMob} className=" xl:hidden flex-shrink-0"/>
          </div>
          <p className="md:w-[30rem] leading-relaxed">From Finance to Resource Management, every team gets a tailored view of what matters. Whether you're leading a project or managing people, Gooziri gives you real-time clarity, intelligent dashboards, and seamless collaboration all in one place.</p>
          
          <FilledButton text='Get Started' textColor='#FFFF' backgroundColor='#1355FF' img="" pathname='/signIn' width="15rem"/>
          
        </div>
        <div className="hidden md:block">
          <img src={computer} className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] h-auto object-contain" />
        </div>
      </div>
    </>
  )
}

export default Hero;
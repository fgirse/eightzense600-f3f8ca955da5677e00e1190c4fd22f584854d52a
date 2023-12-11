import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";
import Image from 'next/image';
import Gallery from'../components/Gallery';
import Pattern from '../../public/images/Pattern02.svg'
import Hero from "/images/sideboardobg.png"

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
             <SeoMeta />
      {/* ============================================== GRID A ====================================*/}
 
      <div className="grid grid-cols-12 grid-rows-18 gap-x-1 ">
    <div className="col-span-8 row-span-2">
    <p className="uppercase py-2 px-2 text-4xl  md:mb-10 md:w-8/12 md:py-6 md:text-[5rem] leading-1 font-bold text-stone-100 lg:px-7 lg:mt-7 lg:leading-77 lg:text-[5rem]">Timeless</p>
    </div>
    <div className="col-span-8 row-span-4 col-start-1 row-start-3">
    <p className="relative -top-6 uppercase px-2 text-6xl font-black  md:text-[9rem] text-[#d8cdab] lg:text-[13rem] mt-3">Design</p>
    </div>
    <div className="col-span-4 row-span-6 col-start-9 row-start-1"><p className="py-3 text-[.5rem] leading-1 text-right border-r-8  border-amber-600 text-stone-300 lg:mt-12"
                          dangerouslySetInnerHTML={markdownify(banner.content ?? "")}/>
                   <p className="relative left-20 py-1 font-phudu   lg:ml-5 text-[.59rem] w-9 h-8 bg-orange-500 leading-3 shadow-xl shadow-gray-500 rounded-full text-center font-medium font-phudu text-white md:w-12 lg:w-24 lg:text-xs">Carl<br/>Sagan</p>
            </div>
    <div className="col-span-12 row-span-4 row-start-7">
    <div className=" col-start-2 col-end-3 row-start-3 row-end-4 md:w-[66v] md:h-[50vh]">
           <Image
              src="/images/sideboardobg.png"

              height="550"
              width="550" 
              alt="Sideboard"
              className="">

              </Image>
              </div>
    </div>
      
    </div>
    <div className="col-span-5 row-span-5 col-start-4 row-start-11">
    <div className="">
           <Image
              src="/images/LogoEZ.png"

              height="166"
              width="166" 
              alt="Logo"
              className="mb-5 mx-auto rounded-xl shadow-xl shadow-white/50 ">

              </Image>
              </div>
    </div>
    <div className="col-span-4 row-span-2 col-start-5 row-start-16"> <div className=" flex justify-center col-start-2 col-end-3 row-start-2 row-end-3 md:col-start-2 md:col-end-4 md:row-start-2 md-row-end-3 md:text-[3rem] " >
{banner.button!.enable && (
          <a className=" bg-amber-500 rounded-xl btn btn-primary text-center w-36 h-10 text-1xl md:text-2xl" href={banner.button!.link}>
            {banner.button!.label}
          </a>
        )}
  </div>
  </div>












    {/* ==============================================  ENDE GRID A ====================================*/}
<section className="py-7">
<Gallery />
</section>
     

      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                  className=""
                  
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h1
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <a
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
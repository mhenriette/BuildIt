import Head from "next/head"
import Call from "../../components/call";
import Content from "../../components/content";
import Logos from "../../components/Logos";
import Profile from "../../components/profile";

function About(){
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
        <div className="mb-20">
            <div className=" grid grid-cols-2 place-content-center mb-20 py-10 mx-auto container items-start   md:px-32">
                <div><img src="/aboutpic.svg"/></div>
                <Content title={'About us'}
                subtitle={'Owner and investor with a reputation'}
                styles="space-y-10"
                paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.'}
                />
              
                
            </div>
            <div className="mx-auto container md:px-32 py-20">
                <Content title={'statistics'}
                subtitle={'Development in numbers'}
                paragraph=''
                styles="space-y-2 justify-center items-center"
                />
                <div className=""><img src="/statistics.svg"/></div>
                <Logos/>
            </div>
        </div>
        <div className="mx-auto container md:px-32 my-32 py-10 ">
            <Content 
            title={'our Team'}
            subtitle={'Let us meet'}
            styles={'space-y-2 justify-center items-center'}
            />
            {/* images  */}
            <div className="grid grid-cols-3 place-content-center place-items-center gap-5 ">
            <Profile
            url='/p1.svg'
            profile_name={'Name Surname'}
            profession={'Worker'}
            />
              <Profile
            url='/p2.svg'
            profile_name={'Name Surname'}
            profession={'Worker'}
            />
              <Profile
            url='/p3.svg'
            profile_name={'Name Surname'}
            profession={'Worker'}
            />
              <Profile
            url='/p4.svg'
            profile_name={'Name Surname'}
            profession={'Worker'}
            />
              <Profile
            url='/p5.svg'
            profile_name={'Name Surname'}
            profession={'Worker'}
            />
              <Profile
            url='/p6.svg'
            profile_name={'Name Surname'}
            profession={'Worker'}
            />
              <Profile
            url='/p7.svg'
            profile_name={'Name Surname'}
            profession={'Worker'}
            />
                <Profile
            url='/p8.svg'
            profile_name={'Name Surname'}
            profession={'Worker'}
            />
                <Profile
            url='/p9.svg'
            profile_name={'Name Surname'}
            profession={'Worker'}
            />
            </div>
           
            
        </div>
        <Call/>
        </>
    );
       
}
export default About
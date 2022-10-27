import Head from "next/head";
import Callsection from "../../components/call";
import Content from "../../components/content";
import Logos from "../../components/Logos";
import Navbar from "../../components/Navbar";
import Profile from "../../components/profile";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className="bg-gradient-to-tr from-indigo-100 to-indigo-50 ">
        <Navbar />
        <div className=" grid grid-cols-2 place-content-center mb-20 py-10 mx-auto container items-start   md:px-32">
          <div>
            <img src="/aboutpic.svg" alt="aboutintro" />
          </div>
          <Content
            title={"About us"}
            subtitle={"Owner and investor with a reputation"}
            styles="space-y-10"
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex."
            }
          />
        </div>
      </div>
      <div className="mx-auto container md:px-32 py-20">
        <Content
          title={"statistics"}
          subtitle={"Development in numbers"}
          paragraph=""
          styles="space-y-2 justify-center items-center"
        />
        <div className="">
          <img src="/statistics.svg" alt="statistics" />
        </div>
        <Logos />
      </div>
      <div className="bg-gradient-to-tr from-indigo-100 to-indigo-50 pb-10">
        <div className="mx-auto container md:px-32  py-10 ">
          <Content
            title={"our Team"}
            subtitle={"Let us meet"}
            styles={"space-y-2 justify-center items-center"}
          />
          {/* images  */}
          <div className="grid grid-cols-3 place-content-center place-items-center gap-5 ">
            <Profile
              url="/p1.svg"
              profileName={"Name Surname"}
              profession={"Worker"}
            />
            <Profile
              url="/p2.svg"
              profileName={"Name Surname"}
              profession={"Worker"}
            />
            <Profile
              url="/p3.svg"
              profileName={"Name Surname"}
              profession={"Worker"}
            />
            <Profile
              url="/p4.svg"
              profileName={"Name Surname"}
              profession={"Worker"}
            />
            <Profile
              url="/p5.svg"
              profileName={"Name Surname"}
              profession={"Worker"}
            />
            <Profile
              url="/p6.svg"
              profileName={"Name Surname"}
              profession={"Worker"}
            />
            <Profile
              url="/p7.svg"
              profileName={"Name Surname"}
              profession={"Worker"}
            />
            <Profile
              url="/p8.svg"
              profileName={"Name Surname"}
              profession={"Worker"}
            />
            <Profile
              url="/p9.svg"
              profileName={"Name Surname"}
              profession={"Worker"}
            />
          </div>
        </div>
        <Callsection />
      </div>
    </>
  );
}
export default About;

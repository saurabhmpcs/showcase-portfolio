import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import img from "./images/img.png";
import { AiFillCheckCircle, AiFillMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <>
      <header className=" py-3 lg:px-52  px-12 bg-white shadow sticky top-0 left-0 right-0">
        <div className="container-xxl">
          <div className="flex justify-between items-center">
            <div className="logo">
              <Avatar className="font-bold text-2xl items-center">
                S<span className=" text-blue-600 font-extrabold">S</span>
              </Avatar>
            </div>
            <div className="social-links space-x-14 hidden md:flex lg:flex">
              <Link className="text-xl uppercase" href={"#home"}>
                Home
              </Link>
              <Link className="text-xl uppercase" href={"#about"}>
                About
              </Link>
              <Link className="text-xl uppercase" href={"#projects"}>
                Projects
              </Link>
              <Link className="text-xl uppercase" href={"#contact"}>
                Contact
              </Link>
            </div>
            <div className="resume">
              <Link
                href="https://rxresu.me/saurabh.rgt/saurabh-singh"
                target="_blank"
              >
                <Button>Hire Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Separator />

      <section id="home" className=" items-center">
        <div className="container-xl">
          <Card className=" justify-center items-center text-center border-0 bg-gradient-to-b from-teal-200">
            <CardHeader>
              <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden my-14">
                <Image
                  src={img}
                  alt={"image"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardTitle>
                <h1 className="leading-8 font-bold text-4xl">
                  Saurabh <span className="text-blue-600">Singh</span>
                </h1>
              </CardTitle>
              <CardDescription>
                <p className="text-xl my-2">Front-End Developer</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-8 text-xl max-w-sm mx-auto">
                Create the best web application for your business with me.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center items-center text-3xl opacity-60 space-x-8">
              <Link
                className=" hover:text-blue-900"
                href="https://github.com/saurabhmpcs"
                target="_blank"
              >
                <BsGithub />
              </Link>
              <Link
                className=" hover:text-blue-900"
                href="https://www.linkedin.com/in/saurabh-singh-818886193/"
              >
                <BsLinkedin />
              </Link>
              <Link
                className=" hover:text-blue-900"
                href="https://twitter.com/home"
              >
                <BsTwitter />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section id="about" className="px-5 my-20">
        <div className="container-xl">
          <div className="lg:flex justify-around items-center">
            <Card className="my-3">
              <CardHeader>
                <CardTitle className="text-center">
                  <h1 className="uppercase text-3xl">Who am I?</h1>
                </CardTitle>
                <CardDescription>
                  <p className="text-xl mx-auto max-w-md text-center">
                    I am Saurabh Singh a front-end Developer
                  </p>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Tabs
                  defaultValue="education"
                  className="w-[250px] lg:w-[300px] p-10"
                >
                  <TabsList className="lg:flex justify-evenly">
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                  </TabsList>
                  <TabsContent defaultValue={"education"} value="education">
                    <p className="leading-8 max-w-lg mx-auto">
                      {" "}
                      <span className="text-blue-700">
                        I have completed my engineering in electronics and
                        communication from NIET greater noida with a score of
                        72.3%.
                      </span>
                    </p>
                  </TabsContent>
                  <TabsContent defaultValue={"skills"} value="skills">
                    <p className="leading-8 max-w-lg mx-auto">
                      <span className="text-red-600">
                        I am proficient in making front-end part of web
                        application using technologies like Html, CSS(tailwind),
                        JavaScript, ReactJs, Redux.
                      </span>
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="https://rxresu.me/saurabh.rgt/saurabh-singh">
                  <Button>Download Cv</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="my-3">
              <CardHeader>
                <CardTitle className="text-center">
                  <h1 className="uppercase text-3xl">About me</h1>
                </CardTitle>
                <CardDescription>
                  <p className="text-xl text-center max-w-lg mx-auto">
                    Get to know more about me
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-10 mx-auto max-w-xl">
                  As a web developer, I am a well-disposed, open-minded, and
                  sociable individual, passionate about creating dynamic and
                  engaging digital experiences. My expertise lies in{" "}
                  <span className="text-blue-600">
                    HTML, CSS(TailwindCss), JavaScript, React, Next.js
                  </span>
                  , and <span className="text-blue-600">Redux</span>, allowing
                  me to build modern and interactive web applications. With a
                  strong foundation in web development, I have acquired
                  proficiency in crafting responsive layouts, implementing
                  intuitive user interfaces, and optimizing performance for
                  seamless user experiences, enabling me to work on diverse
                  projects with versatility and adaptability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 my-20 bg-slate-200">
        <div className="conatiner-xl">
          <div className="text-center">
            <h1 className="text-bold text-3xl font-bold p-3 uppercase">
              Projects
            </h1>
            <p className="text-muted-foreground mb-2">
              All the projects I have managed to complete.
            </p>
          </div>
          <div className="lg:flex justify-around flex-wrap">
            <Card className="mb-3">
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> ChatOn</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  ChatOn Is A Messaging Platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={img2}
                  className="h-48 w-96 mb-3 object-cover"
                  alt={""}
                />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex space-x-5 my-2 text-blue-600">
                  <p>Next-Js</p>
                  <p>React</p>
                  <p>Material-UI</p>
                  <p>Firebase</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link href={"https://chaton-c2955.web.app/"} target="_blank">
                  <Button variant={"outline"}>Live Demo</Button>
                </Link>
                <Link
                  href={"https://github.com/saurabhmpcs/ChatOn-App"}
                  target="_blank"
                >
                  <Button variant={"outline"}>Code</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="mb-3">
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> JSM Headphones</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  JSM Headphones Is An eccomerce website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={img3}
                  className="h-48 w-96 mb-3 object-cover"
                  alt={""}
                />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex space-x-5 my-2 text-blue-600">
                  <p>Next-Js</p>
                  <p>React</p>
                  <p>Vanilla Css</p>
                  <p>Sanity</p>
                  <p>Stripe</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link
                  href={"https://ecommerce-lime-pi.vercel.app//"}
                  target="_blank"
                >
                  <Button variant={"outline"}>Live Demo</Button>
                </Link>
                <Link
                  href={"https://github.com/saurabhmpcs/ecommerce"}
                  target="_blank"
                >
                  <Button variant={"outline"}>Code</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="mb-3">
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> FoodVilla</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  FoodVIlla Is A Food Ordering website.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={img4}
                  className="h-48 w-96 mb-3 object-cover"
                  alt={""}
                />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex space-x-5 my-2 text-blue-600">
                  <p>Parcel</p>
                  <p>React</p>
                  <p>TailwindCss</p>
                  <p>Redux ToolKit</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link
                  href={"https://foo-d-villa-app.vercel.app/"}
                  target="_blank"
                >
                  <Button variant={"outline"}>Live Demo</Button>
                </Link>
                <Link
                  href={"https://github.com/saurabhmpcs/FooDVilla-App"}
                  target="_blank"
                >
                  <Button variant={"outline"}>Code</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="mb-3">
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> NetflixGPT</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  NetfliXGPT is a netlfix clone with GPT search bar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={img6}
                  className="h-48 w-96 mb-3 object-cover"
                  alt={""}
                />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex flex-wrap  my-2 w-80 text-blue-600">
                  <p className="">React</p>
                  <p className="ml-5">TailwindCss</p>
                  <p className="ml-5">Redux ToolKit</p>
                  <p className="ml-3">OpenAi</p>
                  <p className="">Firebase</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link
                  href={"https://netflix-gpt-mr4p.vercel.app/"}
                  target="_blank"
                >
                  <Button variant={"outline"}>Live Demo</Button>
                </Link>
                <Link
                  href={"https://github.com/saurabhmpcs/netflix-gpt"}
                  target="_blank"
                >
                  <Button variant={"outline"}>Code</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="mb-3   ">
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> StackOverFlow Clone</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  This a full stack StackOverFlow clone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={img5}
                  className="h-48 w-96 mb-3 object-cover"
                  alt={""}
                />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex flex-wrap w-80 my-2 text-blue-600">
                  <p className="">React</p>
                  <p className="ml-5">Vanilla Css</p>
                  <p className="ml-5">Redux ToolKit</p>
                  <p className="ml-3">Firebase</p>
                  <p className="">NodeJs</p>
                  <p className="ml-5">MongoDb</p>
                  <p className="ml-5">Express Js</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link
                  href={"https://glistening-profiterole-e5e772.netlify.app/"}
                  target="_blank"
                >
                  <Button variant={"outline"}>Live Demo</Button>
                </Link>
                <Link
                  href={"https://github.com/saurabhmpcs/user"}
                  target="_blank"
                >
                  <Button variant={"outline"}>Code</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="p-5 my-20 bg-slate-300">
        <div className="container-xl">
          <div className="text-center">
            <h1 className="text-3xl my-3 font-semi-bold">Leave Me A Message</h1>
          </div>
          <div className="flex items-center justify-center">
            <Card className=" w-[600px] p-4">
              <CardContent>
                <h2 className="text-xl my-3">Email</h2>
                <Input placeholder="Enter email" />
                <h2 className="text-xl my-3">Message</h2>
                <Textarea placeholder="Input your message" />
                <Button className="my-3">Send</Button>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-around mt-4">
                <h2>Send me an Email Instead</h2>
                <a href="mailto:saurabhmpcs1998@gmail.com">
                  <AiFillMail className="text-2xl text-red-700" />
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      <footer className="p-5 shadow">
        <div className="container-xl">
          <div className="flex justify-around items-center text-center">
            <h1>
              Developed by:{" "}
              <span className="text-blue-700 text-xl">Saurabh Singh</span>
              &nbsp;&copy;2023
            </h1>
            <a href="tel:+123456789" className="flex items-center">
              <BiPhoneCall />
              &nbsp;<span className="text-blue-600">7701916720</span>
            </a>
            <a href="tel:+123456789" className="flex items-center">
              <BiPhoneCall />
              &nbsp;<span className="text-blue-600">7701916720</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

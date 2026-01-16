"use client";

import { Contact } from "@components/contact";
import avatar from "@public/ranks.jpeg";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:pt-24 pt-4">
      <div className="card lg:card-side bg-base-100 shadow-xl lg:w-[80%] w-full h-[600px] ">
        <Contact />
        <div className="card-body flex-1">
          <div className="contact-info">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={avatar.src}
                    alt="AVATAR"
                    width={20}
                    height={20}
                    className="lg:flex hidden rounded-full overflow-hidden shadow-md shadow-slate-50"
                  />
                </div>
              </div>
              <div className="chat-header">
                Shammah
                <time className="text-xs opacity-50 pl-1">15:20</time>
              </div>
              <div className="chat-bubble chat-bubble-accent">
                {" "}
                Hey, you can email me shammahsteve.o@gmail.com
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <FaUser className="text-2xl" />
                </div>
              </div>
              <div className="chat-header">
                Anonymous
                <time className="text-xs opacity-50 pl-1">
                  {new Date().getHours()}
                  {":"}
                  {new Date().getMinutes()}
                </time>
              </div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>

            {/* <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={avatar.src}
                    alt="AVATAR"
                    width={20}
                    height={20}
                    className="lg:flex hidden rounded-full overflow-hidden shadow-md shadow-slate-50"
                  />
                </div>
              </div>
              <div className="chat-header">
                Shammah
                <time className="text-xs opacity-50 pl-1">
                  {new Date().getHours()}
                  {":"}
                  {new Date().getMinutes()}
                </time>
              </div>
              <div className="chat-bubble chat-bubble-accent">
                {" "}
                <span className="">
                  Here's a
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={
                      "https://impala-rugby.vercel.app/squads/members/steve-shammah"
                    }
                    className="mx-2 underline font-semibold"
                  >
                    Fun fact
                  </Link>
                </span>
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div> */}
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={avatar.src}
                    alt="AVATAR"
                    width={20}
                    height={20}
                    className="lg:flex hidden rounded-full overflow-hidden shadow-md shadow-slate-50"
                  />
                </div>
              </div>
              <div className="chat-header">
                Shammah
                <time className="text-xs opacity-50 pl-1">
                  {new Date().getHours()}
                  {":"}
                  {new Date().getMinutes()}
                </time>
              </div>
              <div className="chat-bubble chat-bubble-accent">
                {" "}
                <span className="animate-ping">...</span>
              </div>
              <div className="chat-footer opacity-50">typing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

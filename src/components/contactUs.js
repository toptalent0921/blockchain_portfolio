import React from "react";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div>
            <div className=" bg-gradient-to-r from-pink-300 via-green-300 to-yellow-200 max-w-7xl h-1 rounded-xl m-auto mt-16 mb-20"></div>

            <footer className="bg-gradient-to-b from-black via-gray-800 to-black ">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="flex items-center justify-center">
                        <div className="flex  mt-4 space-x-6 justify-center sm:mt-0 ">
                            {/* <a
                                href="https://www.linkedin.com/in/diwakar-kashyap-317a5223b/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500  hover:text-white"
                            >
                                <BsLinkedin className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a> */}
                            <a
                                href="mailto:toptalent0921@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500   hover:text-white"
                            >
                                <ImMail4 className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="https://github.com/toptalent0921"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500   hover:text-white"
                            >
                                <BsGithub className="w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                            <a
                                href="https://t.me/toptalent921"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-500   hover:text-white"
                            >
                                <BsTelegram className=" w-10 h-10 lg:w-14 lg:h-14" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;

import React, { useState } from "react";
import Footer from "./footer";
import Head from "./Nav";
import sallyA from "../assets/Saly14.svg";
import Saly29 from "../assets/Saly29.svg";
import Saly27 from "../assets/Saly27.png";
import Saly12 from "../assets/Saly12.svg";
import Saly45 from "../assets/Saly45.svg";

import icon from "../assets/icon.png";

import './affiliate.css';
import './blog.css';
import './Faq.css';
import Supportcomp from "./Supportcomp";
import FaqSection from "./FaqSection";
import FaqSectionGiftcard from "./FaqSectionGiftcard";
import FaqSectionAcc from "./FaqSectionAcc";
import FaqSectionOrd from "./FaqSectionOrd";
import FaqSectionSec from "./FaqSectionSec";

function Faq (){
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isGiftcardClicked, setIsGiftcardClicked] = useState(false);
    const [isAccClicked, setIsAccClicked] = useState(false);
    const [isOrderClicked, setIsOrderClicked] = useState(false);
    const [isSecClicked, setIsSecClicked] = useState(false);


    const handleGiftcardClick = () => {
        setSelectedCategory('giftcard');
        setIsGiftcardClicked(true);
        setIsAccClicked(false);
        setIsOrderClicked(false);
        setIsSecClicked(false);

    };
    
    const handleAccClick = () => {
        setSelectedCategory('acc');
        setIsAccClicked(true);
        setIsGiftcardClicked(false);
        setIsOrderClicked(false);
        setIsSecClicked(false);
    };
    const handleOrderClick = () => {
        setSelectedCategory('Order');
        setIsAccClicked(false);
        setIsGiftcardClicked(false);
        setIsOrderClicked(true);
        setIsSecClicked(false);

    };
    const handleSecClick = () => {
        setSelectedCategory('Sec');
        setIsAccClicked(false);
        setIsGiftcardClicked(false);
        setIsOrderClicked(false);
        setIsSecClicked(true);

    };

    return (
        <>
        <Head /> 

        <div className="justify-center w-full flex items-center flex-col">
            <div className="relative flex justify-center items-center">
                <img className='w-full' src={sallyA} alt="" />
                <h1 className='absolute top-[20px] flex text-gray-700 font-bold text-5xl'>How might we <h2 className="text-orange-300">&nbsp; help you?</h2></h1>
                <div className='inputt'>
                    <div className="therelative relative flex items-center bg-white flex rounded-lg items-center justify-around px-4 py-2 gap-2">
                        <img className="h-4 w-auto absolute left-4 top-2.2" src={icon} alt="Logo" />
                        <input type="text" className="focus:outline-none ml-6 w-full" placeholder="Enter your question here" />
                        <button className="bg-blue-600 h-8 pl-3 pr-3 text-white rounded-lg">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="conta flex justify-center flex-col items-center">
            <div className="flex justify-center z-10 mt-[-90px] items-center gap-14 flex-wrap py-10 w-[70%]">
                <div className={`flex pointer flex-col justify-center items-center bg-white shadow-lg rounded-md p-12 ${isGiftcardClicked ? 'bg-blue-100' : ''}`} onClick={handleGiftcardClick}>
                    <img className="w-[200px] h-[150px]" src={Saly29} alt="" />
                    <h3 className="font-semibold">Giftcards</h3>
                </div>
                <div className={`flex pointer flex-col justify-center items-center bg-white shadow-lg rounded-md p-12 ${isAccClicked ? 'bg-blue-100' : ''}`} onClick={handleAccClick}>
                    <img className="w-[200px] h-[150px]" src={Saly12} alt="" />
                    <h3 className="font-semibold">Accounts and Login</h3>
                </div>
                <div className={`flex pointer flex-col justify-center items-center bg-white shadow-lg rounded-md p-12 ${isOrderClicked ? 'bg-blue-100' : ''}`} onClick={handleOrderClick}>
                    <img className="w-[200px] h-[150px]" src={Saly45} alt="" />
                    <h3 className="font-semibold">Ordering and Payment</h3>
                </div>
                <div className={`flex pointer flex-col justify-center items-center bg-white shadow-lg rounded-md p-12 ${isSecClicked ? 'bg-blue-100' : ''}`} onClick={handleSecClick}>
                    <img className="w-[200px] h-[150px]" src={Saly27} alt="" />
                    <h3 className="font-semibold">2FA and Security</h3>
                </div>
            </div>
            <h3 className="font-bold asked">Frequently Asked Questions.</h3>
            <div className="w-[100%] h-[550px] flex flex-col justify-center items-center gap-4  my-8">

                {!selectedCategory && <FaqSection />}
                {selectedCategory === 'giftcard' && <FadeInSection><FaqSectionGiftcard /></FadeInSection>}
                {selectedCategory === 'acc' && <FadeInSection><FaqSectionAcc /></FadeInSection>}
                {selectedCategory === 'Order' && <FadeInSection><FaqSectionOrd /></FadeInSection>}
                {selectedCategory === 'Sec' && <FadeInSection><FaqSectionSec /></FadeInSection>}

            </div>
        </div>
        <Supportcomp />
        <Footer/>
        </>
    );
};

const FadeInSection = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    React.useEffect(() => {
        setVisible(true);
    }, []);
    return (
        <div className={isVisible ? 'fade-in' : 'hidden'}>
            {children}
        </div>
    );
};

export default Faq;

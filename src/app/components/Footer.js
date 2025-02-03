// import React from 'react';
// import footerStyles from '@/app/styles/footer.module.css'
// import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
// import Link from "next/link";


// export const metadata = {
//     url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
// }

// const Footer = () => {
//     return (
//         <>

//             <footer className={footerStyles.footer}>
//                 <div className={footerStyles.content}>
//                     <div className={footerStyles.top}>
//                         <div className={footerStyles['logo-details']}>
//                             {/*<i className={footerStyles.fab fa-slack]></i>*/}
//                             <span className={footerStyles.logo_name}>Punit Goyal</span>
//                         </div>
//                         <div className={footerStyles[`media-icons`]}>
//                             <Link href="https://www.facebook.com/punit.goyal.904/"><i > <FaFacebookF/> </i></Link>
//                             <Link href="#"><i > <FaTwitter/> </i> </Link>
//                             <Link href="https://www.instagram.com/goyal_punit2417/" target="_blank"><i > <FaInstagram/>  </i></Link>
//                             <Link href="https://www.linkedin.com/in/punit-goyal-643553237"><i > <FaLinkedinIn /> </i></Link>
//                             <Link href="#"><i > <FaYoutube />  </i></Link>
//                         </div>
//                     </div>
//                     <div className={footerStyles['link-boxes']}>
//                         <ul className={footerStyles.box}>
//                             <li className={footerStyles.link_name}>Company</li>
//                             <li><a href="#">Home</a></li>
//                             <li><a href="#">Contact us</a></li>
//                             <li><a href="#">About us</a></li>
//                             <li><a href="#">Get started</a></li>
//                         </ul>
//                         <ul className={footerStyles.box}>
//                             <li className={footerStyles.link_name}>Services</li>
//                             <li><a href="#">App design</a></li>
//                             <li><a href="#">Web design</a></li>
//                             <li><a href="#">Logo design</a></li>
//                             <li><a href="#">Banner design</a></li>
//                         </ul>
//                         <ul className={footerStyles.box}>
//                             <li className={footerStyles.link_name}>Account</li>
//                             <li><a href="#">Profile</a></li>
//                             <li><a href="#">My account</a></li>
//                             <li><a href="#">Preferences</a></li>
//                             <li><a href="#">Purchase</a></li>
//                         </ul>
//                         <ul className={footerStyles.box}>
//                             <li className={footerStyles.link_name}>Courses</li>
//                             <li><a href="#">HTML & CSS</a></li>
//                             <li><a href="#">JavaScript</a></li>
//                             <li><a href="#">Photography</a></li>
//                             <li><a href="#">Photoshop</a></li>
//                         </ul>
//                         <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
//                             <li className={footerStyles.link_name}>Subscribe</li>
//                             <li><input type="text" placeholder="Enter your email" /></li>
//                             <li><input type="button" value="Subscribe" /></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className={footerStyles['bottom-details']}>
//                     <div className={footerStyles.bottom_text}>
//                         <span className={footerStyles.copyright_text}> Copyright © 2023
//                             <Link href="/>"> Punit Goyal.</Link>All rights reserved </span>
//                         <span className={footerStyles.policy_terms}>
//                           <Link href="/">Privacy policy</Link>
//                           <Link href="/">Terms & condition</Link>
//                         </span>
//                     </div>
//                 </div>
//             </footer>

//         </>
//     );
// }

// export default Footer;
'use client'
import React, { useState } from 'react';
import footerStyles from '@/app/styles/footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = async () => {
        // if (email.trim() === "") {
        //     toast.error("Please enter a valid email address!", { position: "top-center" });
        //     return;
        // }
        // toast.success(`You have subscribed successfully with ${email}!`, { position: "top-center" });
        // setEmail(""); // Clear input after subscribing

        if (!email) {
            toast.error("Please enter an email address");
            return;
        }

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success(data.message);
                setEmail(""); // Clear input after successful subscription
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <footer className={footerStyles.footer}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            <span className={footerStyles.logo_name}>Punit Goyal</span>
                        </div>
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="https://www.facebook.com/punit.goyal.904/"><FaFacebookF /></Link>
                            <Link href="#"><FaTwitter /></Link>
                            <Link href="https://www.instagram.com/goyal_punit2417/" target="_blank"><FaInstagram /></Link>
                            <Link href="https://www.linkedin.com/in/punit-goyal-643553237"><FaLinkedinIn /></Link>
                            <Link href="#"><FaYoutube /></Link>
                        </div>
                    </div>
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Company</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Get started</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Services</li>
                            <li><a href="#">App design</a></li>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Logo design</a></li>
                            <li><a href="#">Banner design</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Preferences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Courses</li>
                            <li><a href="#">HTML & CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Photoshop</a></li>
                        </ul>
                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <li className={footerStyles.link_name}>Subscribe</li>
                            <li>
                                <input 
                                    type="text" 
                                    placeholder="Enter your email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </li>
                            <li>
                                <input 
                                    type="button" 
                                    value="Subscribe" 
                                    onClick={handleSubscribe} 
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>
                        <span className={footerStyles.copyright_text}> Copyright © 2023
                            <Link href="/"> Punit Goyal.</Link> All rights reserved 
                        </span>
                        <span className={footerStyles.policy_terms}>
                            <Link href="/">Privacy policy</Link>
                            <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

            {/* Toast Container for Notifications */}
            <ToastContainer />
        </>
    );
};

export default Footer;

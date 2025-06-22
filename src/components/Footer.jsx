import React from 'react';
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-[#e4e2dd]">
            <div className="max-w-[1240px] mx-auto py-16 px-4 text-black">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">

                    {/* Left Section */}
                    <div className="mb-10 lg:mb-0">
                        <h1 className="text-3xl font-bold text-[#ba0707] mb-4">Nimblefin Proworksz</h1>
                        <p className="mb-6">
                            Our mission is to be a valued and competent organization for improving efficiency of operations, cash flow and enhance affordability in healthcare sector.</p>
                        <div className="flex space-x-6 md:w-[75%]">
                            <FaFacebookSquare size={30} className="hover:text-[#ba0707] cursor-pointer" />
                            <FaInstagram size={30} className="hover:text-[#ba0707] cursor-pointer" />
                            <FaTwitterSquare size={30} className="hover:text-[#ba0707] cursor-pointer" />
                            <FaLinkedin size={30} className="hover:text-[#ba0707] cursor-pointer" />
                        </div>
                    </div>

                    {/* Right Sections */}
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-neutral-700">
                        <div>
                            <h6 className="font-semibold text-lg text-black mb-4 uppercase">Services</h6>
                            <ul className="space-y-2">
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Revenue Cycle Management</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Self-Fund & Affinity Programs</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Staffing Services</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Health Financing</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Business Consulting</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-semibold text-lg text-black mb-4 uppercase">Solutions</h6>
                            <ul className="space-y-2">
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Tech-enabled data management</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Insurance desk & reconciliation</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Cashless & Reimbursement claims process</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">MIS & Reports</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Insurance Empanelment Services</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-semibold text-lg text-black mb-4 uppercase">Company</h6>
                            <ul className="space-y-2">
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">About Us</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Leadership</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Strategic Partnership</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Referrals</li>
                                <li className="hover:text-[#ba0707] transition-colors cursor-pointer">Careers</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-semibold text-lg text-black mb-4 uppercase">Contact</h6>
                            <ul className="space-y-2">
                                <li><a href="tel:+919449223939" className="hover:text-[#ba0707] transition-colors">+91 9449 22 3939</a></li>
                                <li><a href="https://www.nimblefin.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ba0707] transition-colors">www.nimblefin.in</a></li>
                                <li><a href="mailto:connect@nimblefin.in" className="hover:text-[#ba0707] transition-colors">connect@nimblefin.in</a></li>
                                <li>Bengaluru, Karnataka, India</li>
                                <li className='sm:whitespace-nowrap'>CIN: U70200KA2025PTC198583</li>
                                <li>GSTIN: 29AAKCN20731ZN</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;

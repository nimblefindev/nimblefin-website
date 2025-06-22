import React from 'react';
import { Link } from 'react-router-dom';
import Laptop from '../assets/analysislaptop.png';

const Analytics = () => {
    return (
        <div className='w-full bg-[#e4e2dd] py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='Nimblefin Services Illustration' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#ba0707] font-bold'>END-TO-END INSURANCE DESK AND REVENUE CYCLE MANAGEMENT</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Empowering Hospitals with cost efficient & faster Claims, Revenue & Operations
                    </h1>
                    <p>
                        Nimblefin partners with hospitals, TPAs and insurers to streamline the entire revenue cycle - from patient registration and insurance verification to claims filing, denial resolution, and payment reconciliation. Our technology-enabled services reduce manual workload, accelerate reimbursements, and optimize both private and government insurance operations.
                    </p>
                    <p className='mt-4'>
                        We also support empanelment, staffing, MIS reporting, and health financial solutions to improve margins and simplify the overall healthcare operations for a hospital.
                    </p>
                    <Link
                        to="/services"
                        className="w-[200px] border border-[#ba0707] text-[#ba0707] rounded-md font-medium my-6 mx-auto md:mx-0 py-2.5 hover:bg-[#ba0707] hover:text-white transition-all duration-300 flex justify-center items-center text-center"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Analytics;

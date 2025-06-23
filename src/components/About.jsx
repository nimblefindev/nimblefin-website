import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import teamIcon from '../assets/abtlogos/team.png';
import taskIcon from '../assets/abtlogos/task.png';
import timeIcon from '../assets/abtlogos/time.png';
import budgetIcon from '../assets/abtlogos/budget.jpg';
import coreImage from '../assets/abtlogos/core-competencies.png';
import panIndiaImage from '../assets/abtlogos/panindiamap.png';

const About = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' }); // ← force scroll
        }
        }
    }, [location]);

    return (
        <div className="w-full bg-white py-10 text-gray-800">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* WHO WE ARE */}
                <section className="space-y-4" id="top">
                    <p className="text-[#ba0707] font-bold text-xs sm:text-sm uppercase">Who We Are</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">25+ Years of Transforming Healthcare Operations</h2>
                    <div className="space-y-2 text-sm sm:text-base leading-relaxed">
                        <p>
                            Nimblefin Proworksz Private Limited is built by industry veterans with decades of experience across Insurance, Healthcare, Finance and Technology sectors. Our team includes certified professionals, doctors, and veterans from India’s top insurers, TPAs, and hospitals.
                        </p>
                        <p>
                            With digitally enabled systems and customer-first SLAs, we partner with hospitals to reduce claim & payment delays, increase ARPOB, and save on costs.
                        </p>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold pt-4">Our Mission is simple...</h3>
                    <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4">
                        “To be a valued and competent organization that enhances operational efficiency, boosts cash flow, and improves affordability in the healthcare sector.”
                    </blockquote>
                </section>

                {/* MISSION & VALUES */}
                <section className="space-y-4">
                    <p className="text-[#ba0707] font-bold text-xs sm:text-sm uppercase">Our Core Values - The T<sup>4</sup> Framework</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Team. Task. Time. budgeT - “T to the power of 4”</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        <li className="flex items-start gap-4">
                            <img src={teamIcon} alt="Team" className="w-12 h-12 object-contain" />
                            <div>
                                <strong>Team</strong>: <i>Our experienced team use their trained skills and technology to handle Insurance desk & process cashless claims seamlessly. Our professlonal staff include Doctors, Certified Process Associates & Industry veterans</i>.
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <img src={taskIcon} alt="Task" className="w-12 h-12 object-contain" />
                            <div>
                                <strong>Task</strong>: <i>‘Zero Tolerance’ to process deviations make our efforts unique and reports flawless. We use skilled manpower, identify technology, training & processes to take our service offerings to the next level</i>.
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <img src={timeIcon} alt="Time" className="w-12 h-12 object-contain" />
                            <div>
                                <strong>Time</strong>: <i>Time is money for our clients, so is for our us! TATs are part of strict compliance for the leadership team. Once we have the official buy-in, our experts oversee the execution from start to finish within desired timelines</i>.
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <img src={budgetIcon} alt="Budget" className="w-12 h-12 object-contain" />
                            <div>
                                <strong>budgeT</strong>: <i>We are in the business to save expenses for our clients through improving process efficiencies. Key Indicators are monitored at specified intervals, capture milestones, adjusting strategies to deliver budgets</i>.
                            </div>
                        </li>
                    </ul>
                </section>

                {/* LEADERSHIP TEAM */}
                <section className="space-y-4" id='leadership'>
                    <p className="text-[#ba0707] font-bold text-xs sm:text-sm uppercase">Our Leadership</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Led by Industry Veterans</h2>
                    <div className="space-y-2 text-sm sm:text-base leading-relaxed">
                        <p>
                            Founders who ideated the concept have established leadership and collective acumen over 100 years in Business Development and Distribution, Strategic initiatives & Process Optimizations, Client Retention & Insurer relations. Leadership team has hands-on experience with leading brands such as Aviva, ICICI, MetLife, Kotak, Toyota, TTK Healthcare, FHPL, MD India, SREI Infra, Prudent, etc.
                        </p>
                        <p>
                            From insurance adjudication to public health schemes, our leadership ensures your hospital processes are handled with precision and insight.
                        </p>
                    </div>
                </section>


                <section className="space-y-8 lg:space-y-0 lg:flex lg:gap-8">

                    {/* CORE COMPETENCIES */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <p className="text-[#ba0707] font-bold text-xs sm:text-sm uppercase">Core Competencies</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                                Performance. Compliance. Cost Efficiency.
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed mt-4">
                                <li>End-to-end Revenue Cycle Management & Claims Services</li>
                                <li>Health Financing and Working Capital Optimization</li>
                                <li>Strategic Partnerships to improve revenue per bed</li>
                                <li>Staffing solutions and on-site support desks</li>
                                <li>SLA-driven performance tracking with bonus-linked savings</li>
                            </ul>
                        </div>
                        <img src={coreImage} alt="Core Competencies" className="w-full max-w-sm mt-6 lg:mt-8 self-center" />
                    </div>

                    {/* PAN-INDIA PRESENCE */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <p className="text-[#ba0707] font-bold text-xs sm:text-sm uppercase">Pan India Presence</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mt-2">Serving Hospitals Across India</h2>
                            <div className="space-y-2 text-sm sm:text-base leading-relaxed mt-4">
                                <p>We’re headquartered in Bengaluru, Karnataka, and our services span across:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>South India</strong>: Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh</li>
                                    <li><strong>North India</strong>: Delhi NCR, Haryana, Chandigarh, Uttar Pradesh</li>
                                    <li><strong>West India</strong>: Maharashtra, Gujarat, Goa</li>
                                    <li><strong>East India</strong>: West Bengal, Odisha</li>
                                </ul>
                                <p>
                                    With ongoing expansion, we’re building one of the most trusted healthcare process networks in India.
                                </p>
                            </div>
                        </div>
                        <img src={panIndiaImage} alt="Pan India Presence" className="w-full max-w-sm mt-6 lg:mt-8 self-center" />
                    </div>

                </section>


            </div>
        </div>
    );
};

export default About;

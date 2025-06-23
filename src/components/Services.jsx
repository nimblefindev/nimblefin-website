import logo1 from "../assets/servicelogos/yellow.png";
import logo2 from "../assets/servicelogos/orange.png";
import logo3 from "../assets/servicelogos/red.png";
import logo4 from "../assets/servicelogos/lightblue.png";
import logo5 from "../assets/servicelogos/darkgreen.png";
import logo6 from "../assets/servicelogos/lightgreen.png";
import desktopImage from "../assets/servicesnew.jpg";

const services = [
  {
    title: "Insurance Empanelment",
    color: "text-blue-700",
    logo: logo4,
    points: [
      "Document checklist & MOU",
      "Requirements mapping",
      "Query Management",
      "Tariff Negotiation",
      "Agreement & Implementation",
    ],
  },
  {
    title: "Insurance Desk & Claims",
    color: "text-teal-700",
    logo: logo5,
    points: [
      "Policy Query & Estimations",
      "Pre-auth/Discharge process",
      "Claim file collation & submission",
      "Approval/Query/Denial Management",
      "Health Financing Solutions",
      "Payments & Reconciliation",
      "MIS & Reporting",
    ],
  },
  {
    title: "Reimbursement Claims Management",
    color: "text-green-700",
    logo: logo6,
    points: [
      "Claim collation & submission",
      "Approval/Query/Denial Management",
      "Payments & Reconciliation",
      "Health Financing Solutions",
    ],
  },
  {
    title: "Business Consulting Services",
    color: "text-yellow-700",
    logo: logo1,
    points: [
      "Network Optimization",
      "On-site & Online Campaigns",
      "Startup & Compliances",
      "Marketing services",
    ],
  },
  {
    title: "Self Fund Management",
    color: "text-orange-700",
    logo: logo2,
    points: [
      "Design & Execution",
      "Claim file collation & submission",
      "Claims process and reimbursement",
      "Float Management",
      "Payments and Reconciliation",
      "MIS & Reporting",
    ],
  },
  {
    title: "National Health Schemes",
    color: "text-red-700",
    logo: logo3,
    points: [
      "Scheme Management",
      "Empanelment & Implementation",
      "Claim file collation & submission",
      "Payments & Reconciliation",
      "MIS & Reporting",
    ],
  },
];

// const positions = [
//   { top: "5%", left: "52%", transform: "-translate-x-1/2 -translate-y-full" },
//   { top: "25%", left: "65%", transform: "-translate-x-1/2 -translate-y-1/2" },
//   { top: "52%", left: "70%", transform: "-translate-x-1/2 -translate-y-1/2" },
//   { top: "52%", left: "14%", transform: "-translate-x-1/2 -translate-y-1/2" },
//   { top: "25%", left: "17%", transform: "-translate-x-1/2 -translate-y-1/2" },
//   { top: "5%", left: "25%", transform: "-translate-x-1/2 -translate-y-full rotate-0" },
// ];

const ServiceArc = () => {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center text-[#ba0707] mb-4">
        Comprehensive Healthcare and Insurance Services 
      </h1>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-sm sm:text-base leading-relaxed mb-7">
        <div className="max-w-md mx-auto sm:max-w-xl lg:max-w-xl">
          <p className="text-center italic text-gray-600">
            At Nimblefin Proworksz, we offer solutions, tailored for the healthcare industry.
          </p>
        </div>
      </div>

      {/* Desktop View: Image Only */}
      <div className="hidden sm:flex justify-center items-center w-full px-4 py-8 -mt-8">
        <img
          src={desktopImage}
          alt="Desktop Services Illustration"
          className="max-w-[1150px] w-full h-auto object-contain"
        />
      </div>

      {/* Mobile view */}
      <div className="sm:hidden flex flex-col px-4 space-y-6">
        {services.map((service, index) => (
          <div key={index}>
            <div className="flex items-start gap-6">
              <img
                src={service.logo}
                alt="icon"
                className="w-10 h-10 mt-1 flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className={`text-base font-bold mb-2 ${service.color}`}>
                  {service.title}
                </h3>
                <div className="space-y-1 text-sm text-gray-700">
                  {service.points.map((point, i) => (
                    <div key={i}>{point}</div>
                  ))}
                </div>
              </div>
            </div>
            <hr className="mt-4 border-t border-gray-300" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceArc;

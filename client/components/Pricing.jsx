import { FaUser } from "react-icons/fa";



const Pricing = () => {
  const plans = [
    {
      name: "Personal Plan",
      for: "For you",
      people: "Indivisual",
      desc: "Billed monthly or annually. Cancel anytime.",
      price: "Starting at ₹850 per month", 
      btn:"Start Subscription",
      isMostPop: true,
      features: [
        "Access to 11,000+ top courses",
        " Certification prep",
        " Goal-focused recommendations",
        "AI-powered coding exercises",
      ],
    },
    {
      name: "Team Plan",
      for: "For your team",
      people: "2 to 20 people",
      desc: "Billed annually. Cancel anytime.",
      price: "₹1,167 a month per user",
      btn:"Start Subscription",
      isMostPop: false,
      features: [
        " Access to 11,000+ top courses",
        "Certification prep",
        " Goal-focused recommendations",
        " AI-powered coding exercises",
        " Analytics and adoption reports",
      ],
    },
    {
      name: "Enterprise Plan",
      for: "For your whole organization",
      people: "More than 20 people",
      desc: "",
      price: "Contact sales for pricing",
      btn:"Request a demo",
      isMostPop: false,
      features: [
        "Access to 25,000+ top courses",
        "Certification prep",
        " Goal-focused recommendations",
        "  AI-powered coding exercises",
        " Advanced analytics and insights",
        " Dedicated customer success team",
        "International course collection featuring 15 languages",
        " Customizable content",
        "Hands-on tech training with add-on",
        " Strategic implementation services with add-on",
      ],
    },
  ];

  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Choose a plan for success
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
            Don't want to buy courses one by one? Pick a plan to help you, your team, or your organization achieve outcomes faster.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className=" border-b flex flex-col">
                <div className=" pt-6 px-8 pb-4 flex flex-col bg-gray-100">
                  <span className="text-gray-700 text-xl font-bold ">
                    {item.name}
                  </span>
                  <span className="text-xs">{item.for}</span>
                  <span className="text-md mt-2 flex gap-2 items-center text-gray-500">
                    <FaUser />
                    {item.people}
                  </span>
                </div>
                <div className=" pt-8 px-8 pb-4 flex flex-col">
                  <div className="text-gray-800 text-lg font-bold">
                    {item.price}
                  </div>
                  <p className="text-xs">{item.desc}</p>
                </div>
                <a
                  className=" mx-7 mb-1 inline-flex items-center justify-center gap-2 rounded border border-black bg-black bg-opacity-80 px-8 py-3 text-white hover:bg-opacity-70 hover:text-white focus:outline-none focus:ring active:text-white"
                  href="#"
                >
                  <span className="text-sm font-medium"> {item.btn}</span>

                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
              <ul className="p-8 space-y-2 text-sm">
                
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing

import React from 'react'



const Footer = () => {

    const footerNavs = [
        {
            label: "EduPrime Business",
            items: [
                {
                    href: '#',
                    name: 'Teach on EduPrime'
                },
                {
                    href: '#',
                    name: 'Get the app'
                },
                {
                    href: '#',
                    name: 'About us'
                },
                {
                    href: '#',
                    name: 'Contact us'
                },
            ],
        },
        {
            label: "Careers",
            items: [
                {
                    href: '#',
                    name: 'Blog'
                },
                {
                    href: '#',
                    name: 'Help and Support'
                },
                {
                    href: '#',
                    name: 'Affiliate'
                },
                {
                    href: '#',
                    name: 'Investors'
                },
            ],
        },
        {
            label: "Terms",
            items: [
                {
                    href: '#',
                    name: 'Privacy Policy'
                },
                {
                    href: '#',
                    name: 'Cookie settings'
                },
                {
                    href: '#',
                    name: 'Sitemap'
                },
                {
                    href: '#',
                    name: 'Accessibility statement'
                },
            ]
        }
    ]

    return (
        <footer className="text-gray-500  px-4 py-5  mx-auto md:px-8"  style={{backgroundColor: "#F8FBF9"}}>
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                    <img
                src="/images/eduprime2.gif"
                width={200}
                height={70}
                alt="logo"
              />
                        <p className="leading-relaxed mt-2 text-xl">
                        Top companies choose <span className="text-blue-500 hover:underline cursor-pointer">EduPrime Business</span> to build in-demand career skills.
                        </p>
                    </div>
                    
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-gray-800 font-medium">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:underline hover:text-indigo-600"
                                            
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 EduPrime All rights reserved.
                </div>
                
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}

export default Footer

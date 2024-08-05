

import Skills from "./Skills";


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//     { name: 'Product', href: '#' },
//     { name: 'Features', href: '#' },
//     { name: 'Resources', href: '#' },
//     { name: 'Company', href: '#' },
// ]



const timeline = [
    {
        name: 'B.S. in Mechanical Engineering',
        description:
            'Completed 2 years of C++ and Matlab during my undergradute major. Mechanical engineer is a mix of multiple engineering specialities (mechanical, electrical, industrial, civil, and computer programming)',
        date: 'May 2017',
        dateTime: '2017-05',
        school: 'Clemson University'
    },
    {
        name: 'MBA with specialization in finance and startup companies',
        description:
            'Learned everything about how a business functions and I started my first software business during this program. Launching my financial software business at the end of graduate school.',
        date: 'August 2019',
        dateTime: '2019-08',
        school: 'Clemson University, Graduate School of Business'
    },
    {
        name: 'Full Stack Coding Bootcamp',
        description:
            'Flatiron program was heavily focused on learning Javascript and Python. And how to build real world full stack applications using Flask, SQL, and React.js',
        date: 'May 2024',
        dateTime: '2024-05',
        school: 'Flatiron School'
    }
]
const jobOpenings = [
    {
        id: 3,
        role: 'Full Stack Software Engineer - Freelance Role',
        company: 'MyPrice.Best',
        timeline: 'May 2024 - Present',
        description:
            'Working with a start-up company in the healthcare industry, to develop and build their software web application. Building out a full stack application with React.js, Flask, Postgresql database, and hosted on a PaaS. Using React.js and Flask to handle user authentication and authorization. Using React front-end to control what pages and actions are visible to a user based on the type of user logged in. Healthcare company, so client information is extremely confidential. I use Bcrypt library as a encryption to protect all sensitive information ',
    },
    {
        id: 1,
        role: 'Algorithm Developer / Trader',
        company: 'FTMO Hedge Fund',
        timeline: 'Mar 2022 - Present',
        description:
            'I developed trading indicators and algorithms using Python, PineScript, and MQL5 programming languages for professional traders. The algorithms trade fully automated on the ForEx market, trading $165k in total of the hedge fund\'s capital. I built out the program logic for all algorithms and worked with a developmental team half of the time. Together we built out fully functional algorithms that successfully generated profit for the hedge fund and users.',

    },
    // {
    //     id: 4,
    //     role: 'Outsourced CFO',
    //     company: 'Western Trio',
    //     timeline: 'May 2024 - Present',
    //     href: '/',
    //     description:
    //         'Work as a part time CFO and Financial advisor for companies. Most companies are technology or construction related businesses. My goal is to grow revenue, increase net income, and improve cash flow.',

    // },
    {
        id: 5,
        role: 'Sales Engineer',
        company: 'Quail Systems',
        timeline: 'Dec 2022 - Jan 2024',

        description:
            'I worked with many industries (restaurants, hospitals, hotels, cruise lines, etc.) to sell our disinfection technology into their business. Small company with industry disrupting technology, which I sold and worked with government agencies to bring a deeper understanding on the product. ',

    },
    {
        id: 2,
        role: 'Full Stack - Power BI & Javascript Developer',
        company: 'Founder/Owner of Trinitas Accounting, LLC',
        timeline: 'Feb 2019 - Feb 2022',

        description:
            'Designed financial software analytics using Power BI, Javascript, and Tableau, that I launched to small business owners. Queried data directly from their accounting software, to present real time financial information to the users (via mobile and desktop). Worked directly with a Quickbooks API and pulled data into a relational database, so Power BI could properly map it. Building our analytic visualizations for the database data overall. Developed and successfully updated & maintained this software for business owners until 2022.',
    },
]
const footerNavigation = {

    social: [

        {
            name: 'GitHub',
            href: 'https://github.com/TrinitasAccounting',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },

    ],
}














export default function AboutPage() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">


            <main className="isolate">

                {/* Education section */}
                <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-7">
                    <div
                        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                        aria-hidden="true"
                    />
                    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-20 lg:px-8">
                        <div className=" mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="  text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                                More About Myself
                            </h1>
                            <div className="mt-6 lg:mt-0 xl:col-end-2 xl:row-start-2">
                                {/* <p className="text-lg leading-8 text-gray-600">
                                    I grew up in a small town in Williamston, South Carolina, raised on a 49 acre farm. Being taught the value of hard work at a young age, I pursue everything with a complete determination to be highly successful. Blessed with the oppurtunity to attend Clemson University and play Mens Volleyball while in undergrad. I graduated and set out to pursue my adventure of playing professional beach volleyball. Moving everything I owned to a random apartment in California, I was going to work for my dream. After playing a year on a professional east coast volleyball tour and then playing a year competing to make it in the AVP. I gave up my dream of professional beach volleyball and went back to school. Studing business in graduate school and starting my first software company....if you can call it that. I developed a real time financial dashboard for contractors and small business owners. My dashboard was built using Power BI and quired the users data directly from Quickbooks. Was successful at building, maintaining, and selling this software solution for 3 years. I realized my passion was not in sells or accounting, I wanted to continue programming. So the next stop on my journey was algorithmic trading on the financial markets. What does that even mean??? Well I used my mathematics background and began programming in Pinescript/MQL5 languages. Building trading algorithms that woudl read the market and enter/exit real time trades based on a certain set of criteria. I was fairly successful at this, as I still have some of these running in the background today. Begin working for a hedge fund in which I used my developed algorithms to trade about $165k+ of their client's funds. From their I dsicovered my passion for software and wanted to pursue this dream full time. I pursued and completed a software bootcamp, in which I learned an indepth knowledge of fullstack development. Focused on python as my backend (Flask) and javascript (React) for my frontend. Beyond building small and medium projects shown on my projects page, I am building a real world application for the healthcare industry.
                                </p> */}
                                {/* <p className="text-lg leading-8 text-gray-600">
                                    Experienced in Python with Flask and JavaScript based programming with a background in finance and analytics. Possess a strong ability to self-learn, work with a team, and solve real world programming problems. Also has an extensive background in (small-medium) technology and emerging software companies. I began self learning 6 years ago and attended Flatiron bootcamp to expand on my knowledge and love of developing software programs to solve everyday problems. My skills/experience can benefit any company looking for someone who can see how a software offering generates revenue for a company and understands how to drive positive impact to the product and company overall.
                                </p> */}
                                <p className="text-lg leading-8 text-gray-600">
                                    I was raised on a small farm in Williamston, South Carolina. I played indoor Men’s Volleyball at Clemson University, and pursued my dream playing professional beach volleyball for two years after my undergrad. I am a full stack software engineer experienced in React.js, Flask, SQL, etc. Having 3 years of experience in fintech as a full stack engineer and experience starting in March 2024 working as a full stack engineer in the healthcare industry. Quick learner, with the majority of my experience building full stack software using a React frontend, Flask backend, Postgresql database, and hosted on a PaaS. I also have a deep background in finance and analytics, with experience in multiple Saas businesses. I pride myself on my strong ability to self-learn, work with a team, and solve real world programming problems. Also, I have an extensive background in (small-medium) technology and emerging software companies. I attended Flatiron bootcamp to gain structure and expand on my knowledge and love of developing software programs to solve everyday problems. My skills/experience can benefit any company looking for someone who can see how a software offering generates revenue for a company and understands how to drive positive impact to the product and company overall.
                                </p>
                            </div>
                            {/* <img
                                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                                alt=""
                                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                            /> */}
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                </div>

                {/* Sklls Section */}
                <div className="mx-auto mt-12 max-w-7xl px-2 sm:mt-12 lg:px-2">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Skills
                        </h2>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            List of skills that I have learned over my 6+ years of programming. Starting with collegiate courses, through my bootcamp, and then to me building two software businesses as a founder.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                        <Skills />

                    </div>
                </div>



                {/* Work Experience Section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                        <div className="w-full lg:max-w-lg lg:flex-auto">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Work Experience
                            </h2>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                Job positions I have worked in and gained experience from over the years.
                            </p>
                            <img
                                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                                alt=""
                                className="mt-8 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[1130px]"
                            />
                        </div>
                        <div className="w-full lg:max-w-xl lg:flex-auto">
                            <h3 className="sr-only">Job openings</h3>
                            <ul className="-my-8 divide-y divide-gray-100">
                                {jobOpenings.map((opening) => (
                                    <li key={opening.id} className="py-8">
                                        <dl className="relative flex flex-wrap gap-x-3">
                                            <dt className="sr-only">Role</dt>
                                            <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                                                <h5>
                                                    {opening.role}
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                </h5>
                                            </dd>
                                            <dt className="sr-only">Company</dt>
                                            <dd className="mt-1 text-base font-base leading-7 text-gray-900">{opening.company}</dd>
                                            <dt className="sr-only">Timeline</dt>
                                            <dd className="mt-1 flex items-center gap-x-5 text-base leading-7 text-gray-500">
                                                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                                                    <circle cx={1} cy={1} r={1} />
                                                </svg>
                                                {opening.timeline}
                                            </dd>
                                            <dt className="sr-only">Description</dt>
                                            <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{opening.description}</dd>
                                            {/* <dt className="sr-only">Salary</dt>
                                            <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">{opening.salary}</dd>
                                            <dt className="sr-only">Location</dt>
                                            <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                                                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                                                    <circle cx={1} cy={1} r={1} />
                                                </svg>
                                                {opening.location}
                                            </dd> */}
                                        </dl>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>



                {/* Education section */}
                <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-7">
                    <div
                        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                        aria-hidden="true"
                    />
                    <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                                Education
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-2 xl:row-start-2">
                                <p className="text-lg leading-8 text-gray-600">
                                    How I moved from learning programming during my undergradute degree, to building a software business during graduate school, and then refinning and deeping my skills specifically related to software engineering.
                                </p>
                            </div>
                            {/* <img
                                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                                alt=""
                                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                            /> */}
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                </div>

                {/* Timeline section */}
                <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {timeline.map((item) => (
                            <div key={item.name} className="">
                                <time
                                    dateTime={item.dateTime}
                                    className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                                >
                                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx={2} cy={2} r={2} fill="currentColor" />
                                    </svg>
                                    {item.date}
                                    <div
                                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                        aria-hidden="true"
                                    />
                                </time>
                                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                                <p className="mt-6 text-md font-semibold leading-8 tracking-tight text-gray-900">{item.school}</p>
                                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </main>

            {/* Footer */}
            <footer className="mt-32 sm:mt-40" aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">

                    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
                        <div className="flex space-x-6 md:order-2">
                            {footerNavigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
                            &copy; 2022 John Clayton Mangum III, All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}


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
            'Flatiron program was heavily focused on learning javascript and python. And how to build real world full stack applications using Flask, SQL, and React.js',
        date: 'May 2024',
        dateTime: '2024-05',
        school: 'Flatiron School'
    }
]
const jobOpenings = [
    {
        id: 1,
        role: 'Algorithm Developer ',
        company: 'FTMO Hege Fund',
        timeline: 'Mar 2022 - Present',
        description:
            'I developed trading indicators and algorithms using PineScript or MQL5 programming languages for professional traders. The algorithms trade fully automated on the ForEx market, trading $155k in total of the hedge fund\'s capital. I built out the program logic for all algorithms and worked with a developmental team half of the time. Together we built out fully functional algorithms that successfully generated profit for the hedge fund and users.',

    },
    {
        id: 3,
        role: 'Junior Software Developer Internship',
        company: 'MyPrice.Best',
        timeline: 'May 2024 - Present',
        description:
            'Working with a start up company in the healthcare industry, to develop and build their software web application. Developing using a stack of Flask backend, Postgresql, Bcrpyt for password authorization, React.js, Tailwind, and Material UI.  ',

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
        role: 'Founder & Power BI Developer / Analyst',
        company: 'Trinitas Accounting',
        timeline: 'Feb 2019 - Feb 2022',

        description:
            'Designed financial software analytics using Power BI and Tableau, that I launched to small business owners. Queried data directly from their accounting software, to present real time financial information to the users (via mobile and desktop). Worked directly with a Quickbooks API and pulled data into a relational database, so Power BI could properly map it. Building our analytic visualizations for the database data overall.Developed and successfully updated & maintained this software for business owners until 2022. Then shifted fully into an outsourced CFO role helping businesses gain funding and/or improve their business’s financial situation.',

    },
]
const footerNavigation = {

    social: [
        // {
        //     name: 'Blog',
        //     href: '/',
        //     icon: (props) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path
        //                 fillRule="evenodd"
        //                 d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        //                 clipRule="evenodd"
        //             />
        //         </svg>
        //     ),
        // },
        // {
        //     name: 'Instagram',
        //     href: '/',
        //     icon: (props) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path
        //                 fillRule="evenodd"
        //                 d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
        //                 clipRule="evenodd"
        //             />
        //         </svg>
        //     ),
        // },
        // {
        //     name: 'X',
        //     href: '/',
        //     icon: (props) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        //         </svg>
        //     ),
        // },
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
        // {
        //     name: 'YouTube',
        //     href: '/',
        //     icon: (props) => (
        //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        //             <path
        //                 fillRule="evenodd"
        //                 d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
        //                 clipRule="evenodd"
        //             />
        //         </svg>
        //     ),
        // },
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
                                    I was raised on a small farm in Williamston, South Carolina. I played indoor Mens Volleyball at Clemson University, and pursued my dream playing professional beach volleyball for two years after my undergrad. I am experienced in Python with Flask and JavaScript based programming with a background in finance and analytics. Possess a strong ability to self-learn, work with a team, and solve real world programming problems. Also I have an extensive background in (small-medium) technology and emerging software companies. I began self learning 6 years ago and attended Flatiron bootcamp to expand on my knowledge and love of developing software programs to solve everyday problems. My skills/experience can benefit any company looking for someone who can see how a software offering generates revenue for a company and understands how to drive positive impact to the product and company overall.
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
                            List of skills that I have learned over my 6 years of programming. Starting with collegiate courses, through my bootcamp, and then to me building two software businesses as a founder.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                        <Skills />

                    </div>
                </div>



                {/* Education Section */}
                {/* <div className="mx-auto mt-12 max-w-7xl px-2 sm:mt-24 lg:px-2">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Education
                        </h2>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu.
                            Cras purus nibh cursus sit eu in id. Integer vel nibh.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                        
                        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-200 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                            <p className="flex-none text-3xl font-bold tracking-tight text-black">B.S. in Mechanical Engineering</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-black">
                                    Completed 2 years of C++ and Matlab during my undergradute major
                                </p>
                                <p className="mt-2 text-base leading-7 text-gray-700">
                                    Clemson University
                                </p>
                                <p className="text-base leading-7 text-gray-700">
                                    Graduated in 2017
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">Masters in Business Administration</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">
                                    We’re proud that our customers have made over $8 billion in total revenue.
                                </p>
                                <p className="mt-2 text-base leading-7 text-gray-400">
                                    Eu duis porta aliquam ornare. Elementum eget magna egestas.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">Software Engineering Bootcamp</p>
                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">
                                    We’re proud that our customers have made over $8 billion in total revenue.
                                </p>
                                <p className="mt-2 text-base leading-7 text-gray-400">
                                    Eu duis porta aliquam ornare. Elementum eget magna egestas.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div> */}


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
                                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[1100px]"
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
                                    How I moved from learning programming as an undergradute, to building a software business during graduate school, and then refinning and deeping my skills specifically related to software engineering.
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
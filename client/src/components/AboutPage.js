

import Skills from "./Skills";




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
        name: 'MBA with specialization in Finance and startup companies',
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
        date: 'May 2023',
        dateTime: '2023-05',
        school: 'Flatiron School'
    }
]

const jobExperience = [
    {
        id: 3,
        role: 'Lead Sales Engineer and Software Engineer',
        company: 'MyPrice.Best',
        timeline: 'May 2024 - Present',
        description:
            `Building out a full stack SaaS application in the Healthcare and Medical Sales industry using a customer first focused approach. The software stack utilizes React.js for frontend (also Redux, React Query, Tailwind, Material UI, Twilio, AG Grid, and Dromo), Python and C#/.Net for backend, Azure SQL database, and hosted on a PaaS using CI/CD methods. Weekly I am speaking to new and existing customers, understanding their problems and how we could solve their needs. My team and I, would then implement each new feature into the software, working closely with the customers to make sure it solved their problem and functioned accordingly. 
            Leading collaborations with client IT departments to architect and implement secure API integrations, ensuring seamless compatibility between our software platform and existing enterprise cloud infrastructures
            The software application is built to help health care providers save money on their medical supply expenses (veterinarians and dental offices as well). We do this by connecting them with and sharing their product list with medical supply distributors. Each distributor is able to input custom pricing for each product varying by customer. The distributor can easily adjust the pricing daily or weekly (to stay competitive against other distributors pricing that customers products), in turn saving the healthcare facility well over 30%+ on their medical supply cost per year.`,
    },
    // {
    //     id: 1,
    //     role: 'Quantitative Trading Developer',
    //     company: 'FTMO Hedge Fund',
    //     timeline: 'Mar 2022 - Mar 2024',
    //     description:
    //         'Focused on quantitative machine learning and RNN, to design long term profitable strategies for various financial markets. Used Python, NumPy, and Quant Connect, to develop fully automated trading algorithms for large client portfolios. Designed, implemented, and maintained program logic for key algorithms, working closely with the development team to create fully operational solutions that increased profitability for the hedge fund and its clients.',

    // },
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
        timeline: 'Dec 2022 - May 2024',

        description:
            `Transformed a startup with under $100k revenue into an industry leader by securing contracts with major restaurant chains and hospitals, generating $42 million in sales revenue over the upcoming five years through compelling C-Suite presentations with a 35% advancement rate and 90% operational team buy-in
            Led international sales to the operations teams across 10+ countries, managing product delivery, installation, training, and trial periods while collaborating with key opinion leaders to complete product resting and establish industry leadership
            Managed enterprise-level relationships with 10+ high-value clients (each exceeding $100M in revenue), customizing technology solutions to specific needs, educating stakeholders on innovative applications, and maintaining partnerships that drove continued expansion
            Collaborated with biology labs, restaurants, hospitals, animal farms, etc., communicating and installing our technology/equipment inside of their facilities. Working closely with labs/customers to design and complete proper research/testing and data science protocols`,

    },
    {
        id: 2,
        role: 'Sales Engineer and Full Stack Developer',
        company: 'Founder/Owner of Trinitas Accounting, LLC',
        timeline: 'Feb 2019 - Feb 2022',

        description:
            `Founded a Saas Fintech business that automated small business accounting and cash flow tracking using Javascript, Python, and Power BI, providing real-time financial dashboards for contractors. Used secured API's to pull data from thrid party software like Quickbooks. Our primary customer base was small to medium sized contractors. 
            Generated initial client base through proactive cold calling and on-site visits to local businesses, while conducting product demonstrations to hundreds of contractor with a 45% conversion rate on warm leads
            Implemented innovative “connect-share-partner” sales strategies that drove 50% revenue growth and significantly expanded the company`,
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
                                    My name is Clay Mangum, holder of a B.S. in Engineering from Clemson University. After graduation, I pursued professional beach volleyball while simultaneously taking business courses at UCLA. I later earned my M.B.A from Clemson with a specialization in Finance.

                                    My career began as an outsourced CFO/Accountant for small-to-medium businesses before launching an early-stage Fintech SaaS company. I was lead developer and head of sales for a Fintech software app with a real-time financial dashboard using Python, Power BI, React, HTML/JavaScript, and Tableau. This solution queried data from QuickBooks APIs, giving business owners visibility into their financial health. As lead sales generator, I presented to C-suite executives, converting 45% of warm leads to long-term clients.

                                    I then transitioned from Fintech sales and development, into a sales engineering role at an early-stage startup in an innovative technology sector. My responsibilities included managing enterprise-level clients, leading sales to operations and finance teams for domestic and international customers, maintaining customer relationships, and guiding customers through product implementation. These efforts helped transform a sub-$100K revenue startup into an industry leader by securing contracts with major restaurant chains and hospitals, generating $42 million in sales revenue over five years.

                                    Currently, I'm a lead developer and customer liaison in Full Stack Software Engineering for a healthcare and medical sales startup. Using React, Python, C#/.NET, and Azure SQL for software development, I prioritize ongoing communication with customers to understand their needs and implement targeted software solutions. Lead the development team in building a scalable, industry-optimized application that reduces medical supply costs by over 50% for users.

                                    I'm passionate about sales engineering and driving growth for organizations of all sizes. Leveraging my background in SaaS and software development, I thrive on helping clients solve complex challenges through innovative technology solutions that enhance their operational efficiency. Throughout my career, I've embraced fast-paced learning opportunities in the sales engineering field, and I'm grateful for the experiences that have shaped my journey. With my faith in God guiding my path, I look forward to continued success and making meaningful contributions in the years ahead.
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
                                className="mt-8 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[1400px]"
                            />
                        </div>
                        <div className="w-full lg:max-w-xl lg:flex-auto">
                            <h3 className="sr-only">Job Experience</h3>
                            <ul className="-my-8 divide-y divide-gray-100">
                                {jobExperience.map((opening) => (
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
                                    How I moved from learning programming during my undergradute degree, to building and selling a software business during graduate school, and then refinning and deeping my skills specifically related to sales engineering and software development.
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
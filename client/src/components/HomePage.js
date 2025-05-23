

// import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Headshot from '../images/HeadshotZoomed.png'
import FinancialExpenseTrackerDashboardScreenshot from '../images/FinancialExpenseTrackerDashboardScreenshot.png'


export default function HomePage() {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
            </svg>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-1">
                    <a href="/aboutpage" className="group block flex-shrink-0">
                        <div className="flex items-center">
                            <div>
                                <img
                                    className="inline-block h-[80px] w-[80px] rounded-full"
                                    src={Headshot}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-md font-medium text-gray-700 group-hover:text-gray-900">Clay Mangum</p>
                                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">About Me</p>
                            </div>
                        </div>
                    </a>
                    <div className="mt-24 sm:mt-32 lg:mt-16">

                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Sales Engineer, Part Time Programmer, and SaaS business enthusiast
                    </h1>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                        Former professional beach volleyball player.
                    </p> */}
                    <p className="mt-6 text-lg leading-8 text-gray-700">
                        Sales Engineer and Developer with expertise using Javascript, Typescript, Python, C#, React, ASP.Net, Django, Flask, and SQL
                    </p>
                    {/* <p className="mt-4 text-md leading-8 text-gray-700">
                        Additionally, multiple years of experience as a Python focused quantitative trading developer. With expertise in Python, Pandas, Numpy, and QuantConnect.
                    </p> */}
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="/projects"
                            className="rounded-md bg-orange-700 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Clay's Projects
                        </a>
                        <a href="/aboutpage" className="text-sm font-semibold leading-6 text-gray-900">
                            Learn more about me<span aria-hidden="true">→</span>
                        </a>
                    </div>
                    {/* <div>
                        <h3>Contact Info:</h3>
                        <h5>Phone:</h5>
                        <h5>Email:</h5>
                    </div> */}
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img
                                src={FinancialExpenseTrackerDashboardScreenshot}
                                alt="App screenshot"
                                width={2432}
                                height={1442}
                                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
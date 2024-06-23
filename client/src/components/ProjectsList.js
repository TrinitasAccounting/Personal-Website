
import FinancialExpenseTrackerDashboardScreenshot from '../images/FinancialExpenseTrackerDashboardScreenshot.png'
import NBAStatsTracker from '../images/NBAStatsTracker.png';
import ConstuctASaveDistributorPageScreenshot from '../images/ConstuctASaveDistributorPageScreenshot.png';
import TriviaGameScreenshot from '../images/TriviaGameScreenshot.png';
import CryptoDashboardScreenshot from '../images/CryptoDashboardScreenshot.png';
import FrankensteinPhoneBookScreenshot from '../images/FrankensteinPhoneBookScreenshot.png';

const posts = [
    {
        id: 1,
        title: 'Financial Expense Tracker',
        href: '#',
        smallDescription: 'App allowing users to visualize and check their financial health on one simple dashboard.',
        description:
            'Utilizing Flask backend with SQLAlchemy ORM, and a Postgresql database. Users can import or enter bank transactions into their transactions list. The React frontend uses algorithms to calculate total expenses, COGS, and revenue values, plotting it on the dashboard using Tailwindcss and Material UI charting. This app allows the user to import transactions every month so they can immediately see their financial picture for the current month and their estimated tax liability',
        imageUrl:
            FinancialExpenseTrackerDashboardScreenshot,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        demo: 'https://www.loom.com/share/1a45404952714e6493277eda672cf8dc?sid=391b318c-1dc9-495c-99f2-3234bf4ca87e',
        buildType: { title: 'Full Stack', stack: 'React, Flask, Postgresql, Tailwind, Material-UI', href: '/' },
        author: {
            name: 'Clay Mangum',
            role: 'Co-Founder / CTO',
            href: '/',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            github: 'https://github.com/TrinitasAccounting/Financial-Expense-Tracker-Deployed',
            deployed: 'https://financial-tracker-3ac5.onrender.com/'
        },
    },
    {
        id: 2,
        title: 'Construct-a-save',
        href: '/',
        smallDescription: 'This app allows a contractor to receive customized pricing from multiple different suppliers. Giving the ability to price shop his supplies from each supplier in turn saving money. ',
        description:
            'Utilizes Flask, Bcrypt Encryption Library, and Postgresql to allow users to sign up and login to the platform. Storing their user data in a cookie session. Using a React.js and Tailwindcss user interface, a contractor can add a distributor to their partnerships, and only those distributors are allowed to see that contractors proprietary list of productsThis project is still ongoing, but will result in a contractor being able to save money on their project expenses by giving them the ability to easily see who offers the lowest priced product at the time of purchase. ',
        imageUrl:
            ConstuctASaveDistributorPageScreenshot,
        datetime: '2020-03-16',
        buildType: { title: 'Full Stack', stack: 'React, Flask, SQLite, Tailwind', href: '/' },
        demo: 'https://www.loom.com/share/37fcfda399304113b1d83ab5bd5e86b6?sid=a28ff3e2-ab29-49c6-a1a9-3d1f5e0c1c8b',
        author: {
            name: 'Clay Mangum',
            role: 'Co-Founder / CTO',
            href: '/',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            github: 'https://github.com/TrinitasAccounting/Construct-a-save',
            deployed: 'website.com'
        },
    },
    {
        id: 3,
        title: 'NBA Stats Database',
        href: '/',
        smallDescription: 'test test test',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            NBAStatsTracker,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        buildType: { title: 'Full Stack', stack: 'React, Flask, SQLite, CSS', href: '/' },
        demo: 'https://www.loom.com/share/2cda6a60f00f4b3fb0175c39ca7117bd?sid=d33463e7-ad5f-4a88-8958-b35f1e453de1',
        author: {
            name: 'Clay Mangum',
            role: 'Co-Founder / CTO',
            href: '/',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            github: 'https://github.com/TrinitasAccounting/python-p4-project-template',
            deployed: 'website.com'
        },
    },
    {
        id: 4,
        title: 'Trivia Game',
        href: '/',
        smallDescription: 'test test test',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            TriviaGameScreenshot,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        demo: 'https://www.loom.com/share/fb8d1db6b7de42e3958a93acb259810f?sid=99bc1700-7f31-4c23-9237-5ac9e83e2921',
        buildType: { title: 'CLI', stack: 'Python, CLI', href: '/' },
        author: {
            name: 'Clay Mangum',
            role: 'Co-Founder / CTO',
            href: '/',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            github: 'https://github.com/TrinitasAccounting/python-p3-v2-final-project-template',
            deployed: 'website.com'
        },
    },
    {
        id: 5,
        title: 'Frenkenstein Phonebook',
        href: '/',
        smallDescription: 'test test test',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            FrankensteinPhoneBookScreenshot,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        demo: 'https://___',
        buildType: { title: 'Frontend', stack: 'React, CSS', href: '/' },
        author: {
            name: 'Clay Mangum',
            role: 'Co-Founder / CTO',
            href: '/',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            github: 'https://github.com/TrinitasAccounting/Frankenstein-Phonebook',
            deployed: 'website.com'
        },
    },
    {
        id: 6,
        title: 'Crypto Dashboard',
        href: '/',
        smallDescription: 'test test test',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
            CryptoDashboardScreenshot,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        demo: 'https://www.loom.com/share/c649d26093e64c5f96898001b83a0768?sid=1e5ab4be-e628-40a0-b88a-1c158300f736',
        buildType: { title: 'Vanilla Javascript', stack: 'Javascript', href: '/' },
        author: {
            name: 'Clay Mangum',
            role: 'Co-Founder / CTO',
            href: '/',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            github: 'https://github.com/TrinitasAccounting/Crypto-Dashboard',
            deployed: 'website.com'
        },
    },




]

export default function ProjectsList() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto  max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Software Projects</h2>
                    {/* <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p> */}
                    <div className="mt-16 m-4 grid grid-cols-1  space-y-20 lg:mt-20 lg:space-y-20">
                        {posts.map((post) => (
                            <article key={post.id} className="relative isolate  flex flex-col gap-8 lg:flex-row">
                                <div className="relative aspect-[16/9] border-solid border-8 rounded-2xl border-gray-200 sm:aspect-[2/1] lg:aspect-square lg:w-80 lg:shrink-0">
                                    <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="absolute h-full w-full  bg-gray-50 object-cover "
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        {/* <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time> */}
                                        {post.buildType.title === 'Full Stack' ?
                                            <h5
                                                // href={post.demo}
                                                className="relative z-10 rounded-full bg-green-100 px-3 py-1.5 font-medium text-green-800"
                                            >
                                                {post.buildType.title}
                                            </h5>

                                            :
                                            <h5
                                                // href={post.demo}
                                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                                            >
                                                {post.buildType.title}
                                            </h5>

                                        }
                                        <h5>{post.buildType.stack}</h5>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-3 text-md leading-6 text-gray-600">{post.smallDescription}</p>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>
                                    <div className="mt-2 flex border-t border-gray-900/5 pt-2">
                                        <div className="relative flex items-center gap-x-4 grid-cols-3">
                                            {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-blue-600">
                                                    <a href={post.author.github}>

                                                        Github
                                                    </a>
                                                </p>
                                            </div>

                                            <div>
                                                <p className="font-semibold text-blue-600">
                                                    <a href={post.demo}>

                                                        Demo
                                                    </a>
                                                </p>

                                            </div>

                                            <div>
                                                {post.title === 'Financial Expense Tracker' ?
                                                    <p className="font-semibold text-blue-600">
                                                        <a href={post.author.deployed}>

                                                            Deployment
                                                        </a>
                                                    </p>
                                                    :
                                                    <></>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
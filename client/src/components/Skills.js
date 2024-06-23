

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const projects = [
    { name: 'Javascript', initials: 'JS', bgColor: 'bg-gray-300' },
    { name: 'Python', initials: 'Py', bgColor: 'bg-gray-300' },
    { name: 'Flask', initials: 'Fl', bgColor: 'bg-gray-300' },
    { name: 'SQL', initials: 'SQL', bgColor: 'bg-gray-300' },
    { name: 'React.js', initials: 'R', bgColor: 'bg-gray-300' },
    { name: 'Node.js', initials: 'N', bgColor: 'bg-gray-300' },
    { name: 'Postgresql', initials: 'Ps', bgColor: 'bg-gray-300' },
    { name: 'Tailwindcss', initials: 'T', bgColor: 'bg-gray-300' },
    { name: 'Material UI', initials: 'MUI', bgColor: 'bg-gray-300' },
    { name: 'Microsoft Power BI', initials: 'BI', bgColor: 'bg-gray-300' },
    { name: 'Tableau', initials: 'Ta', bgColor: 'bg-gray-300' },
    { name: 'Pinescript', initials: 'PS', bgColor: 'bg-gray-300' },
    { name: 'OOP', initials: 'OOP', bgColor: 'bg-gray-300' },
    { name: 'REST-API', initials: 'RA', bgColor: 'bg-gray-300' },
    { name: 'CSS', initials: 'CSS', bgColor: 'bg-gray-300' },
    { name: 'C++', initials: 'C', bgColor: 'bg-gray-300' },
    { name: 'Matlab', initials: 'ML', bgColor: 'bg-gray-300' },
    { name: 'MQL5', initials: 'MQ', bgColor: 'bg-gray-300' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Skills() {
    return (
        <div>
            {/* <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2> */}
            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-12 lg:grid-cols-5">
                {projects.map((project) => (
                    <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
                        <div
                            className={classNames(
                                project.bgColor,
                                'flex w-10 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-semibold text-white',
                            )}
                        >
                            {project.initials}
                        </div>
                        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                            <div className="flex-1 truncate px-4 py-2 text-sm">
                                {/* <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                                    {project.name}
                                </a> */}
                                <h4 className="font-medium text-gray-900 hover:text-gray-600">
                                    {project.name}
                                </h4>
                                {/* <p className="text-gray-500">{project.members} Members</p> */}
                            </div>
                            {/* <div className="flex-shrink-0 pr-2">
                                <button
                                    type="button"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">Open options</span>
                                    <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div> */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
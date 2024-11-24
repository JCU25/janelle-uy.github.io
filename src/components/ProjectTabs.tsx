import { TabGroup, TabList, Tab, TabPanel, TabPanels } from '@headlessui/react'
import { useState, useEffect } from 'react'

export default function ProjectTabs() {

    const [projects, setProjects] = useState<Record<string, Record<string, Record<string, any>>> | null>(null)

    useEffect(() => {
        const getProjects = async () => {
            try {

                await fetch("/api/projects-default.json").then(async (response) => {
                    const data = await response.json()
                    setProjects(data)
                })
            } catch (error) {
                console.log(error)
            }
        }

        getProjects()
    }, [])


    return (
        <>
            <TabGroup
                className={"flex flex-col  items-center h-full"}>
                <TabList className="flex flex-row gap-6">

                    {
                        (projects) && (Object.keys(projects!).map((category) => (
                            <Tab
                                key={category}
                                className={"px-6 py-1 rounded-lg data-[selected]:bg-gradient-to-r from-dark-magenta to-navy-blue data-[selected]:border data-[selected]:font-bold focus:outline-none data-[hover]:bg-dark-gray duration-75 "}

                            >{category[0].toUpperCase() + category.slice(1)}</Tab>
                        )))
                    }
                </TabList>
                <TabPanels
                    className={"mt-3 bg-gradient-to-b from-dark-magenta/20 to-magenta-black/20 p-4 rounded-md w-full grid"}
                >

                    {
                        (!projects) ? (
                            <p className='text-center'>Loading...</p>
                        ) : (
                            Object.entries(projects).map(([category, projects]) => (
                                <TabPanel
                                    className={`grid gap-3`}
                                    key={category}>
                                    {
                                        Object.entries(projects).map(([projectName, details]) => (

                                            < div
                                                className="bg-top bg-center bg-black group bg-opacity-0 hover:bg-opacity-80 transition-all duration-250
                                                    p-8 md:p-12 lg:p-20 bg-no-repeat bg-cover"

                                                style={{
                                                    backgroundImage: `url(${details.img})`,
                                                    backgroundBlendMode: "multiply",
                                                    height: "700px",
                                                    borderRadius: "10px"
                                                }}
                                            >
                                                <div
                                                    className='h-full opacity-0 group-hover:opacity-100 text-light-gray flex flex-col gap-7'>
                                                    <h3
                                                        className='text-off-white font-bold text-2xl'
                                                    >{projectName}</h3>

                                                    <div className='flex flex-col gap-0 font-semibold text-off-white '>

                                                        {
                                                            // ensure details.roles is an array and is not empty
                                                            Array.isArray(details.roles) && (details.roles.length > 0) ? (
                                                                details.roles.map((role, index) => (
                                                                    <h4 className='text-sm md:text-base' key={index}>{role}</h4>
                                                                ))
                                                            ) : (
                                                                <h4>no roles</h4>
                                                            )
                                                        }
                                                    </div>

                                                    <div
                                                        className='flex flex-col gap-2'>
                                                        <h4 className='font-semibold text-off-white text-xl'>About the project</h4>
                                                        <p className='text-sm md:text-base'>
                                                            {details.description}
                                                        </p>
                                                    </div>


                                                    <div
                                                        className='flex flex-col gap-2 overflow-hidden'>
                                                        <h4 className='font-semibold text-off-white text-xl'>Contributions</h4>
                                                        <ul className='list-disc list-inside overflow-y-scroll text-sm md:text-base'>
                                                            {Array.isArray(details.details) && (details.details.length > 0) && (
                                                                details.details.map((contribution) => (
                                                                    <li >{contribution}</li>
                                                                ))
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </TabPanel>
                            ))
                        )
                    }
                </TabPanels>
            </TabGroup >
        </>
    )
} 
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
                <TabPanels className={"mt-3 bg-gradient-to-b from-dark-magenta/20 to-magenta-black/20 p-4 rounded-md w-full"}>

                    {

                        (!projects) ? (
                            <div>Loading...</div>
                        ) :
                            Object.entries(projects).map(([projectType, projects]) => (
                                Object.entries(projects).map(([projectName, details]) => (

                                    < TabPanel
                                        className="bg-top bg-center bg-black group bg-opacity-0 hover:bg-opacity-80 transition-all duration-250"

                                        style={{
                                            backgroundImage: `url(${details.img})`,
                                            backgroundBlendMode: "multiply",

                                            minWidth: "400px",
                                            maxWidth: "850px",
                                            minHeight: "300px",
                                            height: "740px",
                                            borderRadius: "10px"
                                        }}
                                        as='div'
                                        key={projectType}
                                    >
                                        <div
                                            className='opacity-0 group-hover:opacity-100 text-light-gray'>
                                            <h3>{projectName}</h3>
                                            <p>
                                                {details.description}
                                                {details.img}
                                            </p>
                                        </div>

                                        {/* <img src={details.img} alt={projectName} /> */}
                                    </TabPanel>
                                ))
                            ))
                    }
                </TabPanels>
            </TabGroup >
        </>
    )
} 
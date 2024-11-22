import { TabGroup, TabList, Tab, TabPanel, TabPanels } from '@headlessui/react'
import { useState, useEffect } from 'react'

export default function ProjectTabs() {

    const [projects, setProjects] = useState<Record<string, Record<string, Record<string, string>>> | null>(null)

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

    if (!projects) {
        console.log('none pa')
    } else {
        console.log(projects)
    }


    return (
        <>
            <TabGroup
                className={"flex flex-col  items-center "}>
                <TabList className="flex flex-row gap-6">

                    {
                        (!projects) ? (
                            <div>
                                Loading...
                            </div>

                        ) : (Object.keys(projects!).map((category) => (
                            <Tab
                                key={category}
                                className={"px-6 py-1 rounded-lg data-[selected]:bg-gradient-to-r from-dark-magenta to-navy-blue data-[selected]:border data-[selected]:font-bold focus:outline-none data-[hover]:bg-dark-gray duration-75 "}

                            >{category[0].toUpperCase() + category.slice(1)}</Tab>
                        )))
                    }
                </TabList>
                <TabPanels className={"mt-3"}>

                    {

                        (!projects) ? (
                            <div>Loading...</div>
                        ) :
                            Object.entries(projects).map(([projectType, projects]) => (
                                Object.entries(projects).map(([projectName, details]) => (

                                    < TabPanel
                                        key={projectType}
                                    >
                                        <h3>{projectName}</h3>
                                        <p>
                                            {details.description}
                                            {details.img}
                                        </p>
                                    </TabPanel>
                                ))
                            ))
                    }
                </TabPanels>
            </TabGroup >
        </>
    )
} 
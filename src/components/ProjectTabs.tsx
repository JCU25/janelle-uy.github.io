import { TabGroup, TabList, Tab, TabPanel, TabPanels, Button, Dialog, DialogPanel, DialogBackdrop, DialogTitle } from '@headlessui/react'
import { useState, useEffect } from 'react'

export default function ProjectTabs() {

    const [projects, setProjects] = useState<Record<string, Record<string, Record<string, any>>> | null>(null)
    const [openDialog, setOpenDialog] = useState("")
    const [isMd, setIsMd] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMd(window.innerWidth >= 768)
        }
        handleResize();
    }, [])

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

    useEffect(() => {
        if (openDialog) {
            window.history.pushState({ openDialog: true }, "", window.location.href);
        }

        const handlePopState = (event: PopStateEvent) => {
            if (event.state?.openDialog) {
                setOpenDialog("");
            }
        }

        window.addEventListener("popstate", handlePopState)
    }, [openDialog])


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
                                        Object.entries(projects).map(([projectName, project]) => (

                                            <>
                                                < Button
                                                    onClick={() => setOpenDialog(projectName)}
                                                    as='div'
                                                    className="bg-top bg-center bg-black group bg-opacity-0 md:hover:bg-opacity-80 transition-all duration-250
                                                    p-8 md:p-12 lg:p-20 bg-no-repeat bg-cover h-96 "

                                                    style={{
                                                        backgroundImage: `url(${project.img})`,
                                                        backgroundBlendMode: "multiply",
                                                        height: isMd ? "600px" : "384px",
                                                        borderRadius: "10px"
                                                    }}
                                                >
                                                    <div
                                                        className='h-full opacity-0 md:group-hover:opacity-100 text-light-gray flex flex-col gap-7'>
                                                        <h3
                                                            className='text-off-white font-bold text-2xl'
                                                        >{projectName}</h3>

                                                        <div className='flex flex-col gap-0 font-semibold text-off-white '>

                                                            {
                                                                // ensure project.roles is an array and is not empty
                                                                Array.isArray(project.roles) && (project.roles.length > 0) ? (
                                                                    project.roles.map((role, index) => (
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
                                                                {project.description}
                                                            </p>
                                                        </div>


                                                        <div
                                                            className='flex flex-col gap-2 overflow-hidden'>
                                                            <h4 className='font-semibold text-off-white text-xl'>Contributions</h4>
                                                            <ul className='list-disc list-inside overflow-y-scroll text-sm md:text-base'>
                                                                {Array.isArray(project.details) && (project.details.length > 0) && (
                                                                    project.details.map((contribution) => (
                                                                        <li >{contribution}</li>
                                                                    ))
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Button>

                                                <Dialog open={openDialog === projectName} onClose={() => setOpenDialog("")} className={` z-50`}>
                                                    <DialogBackdrop className="fixed inset-0 bg-pure-black/65" />

                                                    <div className='fixed inset-0 flex md:m-16 py-4 md:py-8 text-light-gray bg-pure-black/90 rounded-3xl overflow-hidden overflow-y-scroll'>

                                                        <DialogPanel className={`relative w-full h-full flex flex-col gap-12 pb-8 px-8 md:px-16`}>
                                                            <button className=' fixed right-8 md:right-28 p-4 w-min bg-white/10 rounded-md' onClick={() => setOpenDialog("")}>
                                                                &#x2715;
                                                            </button>

                                                            <img src={project.img} alt={`a screenshot of ${projectName}`} className='w-full md:w-auto max-h-96 rounded mx-auto mt-16 md:mt-10' />

                                                            <div className='flex flex-col gap-12 pb-16'>

                                                                <div className='flex flex-col gap-3'>
                                                                    {/* project name */}
                                                                    <DialogTitle className={`text-2xl font-bold text-off-white`}>{projectName}</DialogTitle>

                                                                    {/* project roles */}
                                                                    {Array.isArray(project.roles) && (project.roles.length > 0) && (
                                                                        <ul className='flex flex-col gap-1 font-semibold'>
                                                                            {
                                                                                project.roles.map(role => (
                                                                                    <li>{role}</li>
                                                                                ))}
                                                                        </ul>
                                                                    )}
                                                                </div>

                                                                {/* project description and tools*/}
                                                                <div className='flex flex-col gap-5'>
                                                                    <div className='flex flex-col gap-3'>
                                                                        <h4 className='text-xl font-semibold text-off-white'>Project Description</h4>
                                                                        {project.description}
                                                                    </div>

                                                                    <div className='flex flex-col gap-3'>
                                                                        <h4 className='text-xl font-semibold text-off-white'>Tools</h4>
                                                                        {Array.isArray(project.tools) && (project.tools.length > 0) && (

                                                                            <ul className='flex flex-col md:flex-row gap-2 list-disc list-inside'>
                                                                                {
                                                                                    project.tools.map((tool) => (
                                                                                        < li > {tool.name}</li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                            // <p>
                                                                            //     {project.tools.map(tool => tool.name).join(", ")}
                                                                            // </p>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* contributions */}
                                                                <div>
                                                                    <h4 className='text-xl font-semibold text-off-white'>Contributions</h4>
                                                                    {Array.isArray(project.details) && (project.details.length > 0) && (
                                                                        <ul className='list-disc list-inside'>
                                                                            {project.details.map(contribution => (
                                                                                <li>{contribution}</li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </DialogPanel>
                                                    </div >
                                                </Dialog>
                                            </>

                                        ))
                                    }

                                </TabPanel>
                            ))
                        )
                    }
                </TabPanels >
            </TabGroup >
        </>
    )
} 
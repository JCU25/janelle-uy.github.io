import type { APIContext } from "astro";

const projects = {
    "coding": {
        "OPED Website": {
            description: "A website developed for the Office for Corporate Partnerships (OCP) of the Mapua Malayan Colleges Mindanao (MMCM) to track and monitor corporate partnerships and students internship data.",
            img: "/assets/projects/oped.png",
            details: [
                // details shall be the "contributions" for the coding projects section
                "In charge of server-side logic",
                "Designed and implemented MySQL database",
                "REST API development",
                "Writing scripts to export information into downloadable excel files",
                "Created complex database queries for all data (with multiple joined tables)",
                "Participated in planning, and communicating with the administrators and staffs, and other teams and members to effectively carry out tasks, and implement new features on time.",
                "Streamlined office operations by creating automated and scheduled tasks for email sending, contract expiration checking, etc.",
                "Contributed to site deployment and maintenance with Vultr Object Storage, Linux VPS"
            ],
            roles: [
                "Lead Back End Developer (June 2022- August 2024)",
                "Back End Developer (March 2022- June 2022)"
            ],
            tools: [
                {
                    name: "NodeJS",
                    src: ""
                },
                {
                    name: "MySQL",
                    src: ""
                },
                {
                    name: "ReactJS",
                    src: ""
                },
                {
                    name: "Ubuntu-based Virtual Private Server",
                    src: ""
                }
            ]
        },
        "something": {
            description: "A website developed for the Office for Corporate Partnerships (OCP) of the Mapua Malayan Colleges Mindanao (MMCM) to track and monitor corporate partnerships and students internship data.",
            img: "/assets/projects/ecd-dsa.png",
            details: [
                // details shall be the "contributions" for the coding projects section
                "In charge of server-side logic",
                "Designed and implemented MySQL database",
                "REST API development",
                "Writing scripts to export information into downloadable excel files",
                "Created complex database queries for all data (with multiple joined tables)",
                "Participated in planning, and communicating with the administrators and staffs, and other teams and members to effectively carry out tasks, and implement new features on time.",
                "Streamlined office operations by creating automated and scheduled tasks for email sending, contract expiration checking, etc.",
                "Contributed to site deployment and maintenance with Vultr Object Storage, Linux VPS"
            ],
            roles: [
                "Lead Back End Developer (June 2022- August 2024)",
                "Back End Developer (March 2022- June 2022)"
            ],
            tools: [
                {
                    name: "NodeJS",
                    src: ""
                },
                {
                    name: "MySQL",
                    src: ""
                },
                {
                    name: "ReactJS",
                    src: ""
                },
                {
                    name: "Ubuntu-based Virtual Private Server",
                    src: ""
                }
            ]
        }
    },
    "design": {
        "Shelf Gleam": {
            description: "A website developed for the Office for Corporate Partnerships (OCP) of the Mapua Malayan Colleges Mindanao (MMCM) to track and monitor corporate partnerships and students internship data.",
            img: "/assets/projects/ccis-website.png",
            details: [
                // details shall be the "features list" for the coding projects section
            ],
            tools: [
                {
                    name: "Figma",
                    src: "Figma"
                }
            ]

        }
    }
}


export async function GET({ params }: APIContext) {
    const category = params.category
    if (category == "default") {
        return new Response(
            JSON.stringify(projects),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }


    if (!projects[category as keyof typeof projects]) {
        return new Response(
            JSON.stringify({ error: "Category not found" }),
            { status: 404 }
        );
    }


    return new Response(
        JSON.stringify(projects[category as keyof typeof projects]),
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}

export function getStaticPaths() {
    return [
        { params: { category: "default" } },
        { params: { category: "coding" } },
        { params: { category: "design" } },
    ]
}
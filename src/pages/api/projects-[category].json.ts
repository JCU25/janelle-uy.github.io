import type { APIContext } from "astro";

const projects = {
    coding: {
        "OPED Website": {
            description:
                "A website developed for the Office for Corporate Partnerships (OCP) of the Mapua Malayan Colleges Mindanao (MMCM) to track and monitor corporate partnerships and students internship data.",
            img: "/assets/projects/oped.png",
            projectLink: "https://mmcm-ocp.com/",
            details: [
                // details shall be the "contributions" for the coding projects section
                "In charge of server-side logic",
                "Designed and implemented MySQL database",
                "REST API development",
                "Writing scripts to export information into downloadable excel files",
                "Created complex database queries for all data (with multiple joined tables)",
                "Participated in planning, and communicating with the administrators and staffs, and other teams and members to effectively carry out tasks, and implement new features on time.",
                "Streamlined office operations by creating automated and scheduled tasks for email sending, contract expiration checking, etc.",
                "Contributed to site deployment and maintenance with Vultr Object Storage, Linux VPS",
            ],
            roles: ["Lead Back End Developer (June 2022- August 2024)", "Back End Developer (March 2022- June 2022)"],
            tools: [
                {
                    name: "Node.js",
                    src: "",
                },
                {
                    name: "React",
                    src: "",
                },
                {
                    name: "MySQL",
                    src: "",
                },
                {
                    name: "React",
                    src: "",
                },
                {
                    name: "Ubuntu-based Virtual Private Server",
                    src: "",
                },
            ],
            displaySize: {
                cols: 2,
                rows: 2,
            },
        },
        "ECD-DSA": {
            description:
                '"ECD-DSA: Estimating Crowd Density to Detect Sparse Areas" is an undergraduate thesis project created to help monitor crowd density and detect sparse areas from connected cameras; and generate alerts for rising crowd density, and overcrowding. Alerts generated are forwarded to other computers to alert other officers.',
            img: "/assets/projects/ecd-dsa-mockup.png",
            details: [
                // details shall be the "contributions" for the coding projects section
                "Created and planned server-side logic, and system",
                "Proposed main methodology for estimating crowd density.",
                "Created an alarm and notification system using event-driven architecture (Socket.IO) for informing personnel in-charge of emergency situations real-time.",
                "Trained artificial intelligence models, specifically YOLOv8 models, to improve model accuracy and performance in detecting humans real-time to estimate the crowd density.",
                "Deployed the server to Render (web service) for the network socket communication used by the alarm system",
            ],
            roles: ["Full Stack Developer  (Oct 2023 - Feb 2024)", "Model Trainer (Nov 2023 - Jan 2024)"],
            tools: [
                {
                    name: "Python",
                    src: "",
                },
                {
                    name: "PyQt5",
                    src: "",
                },
                {
                    name: "YOLOv8",
                    src: "",
                },
                {
                    name: "Render",
                    src: "",
                },
            ],
            displaySize: {
                cols: 2,
                rows: 1,
            },
        },
        "MMCM CCIS Website": {
            description:
                "This is a project made by the Mapua Malayan Colleges Mindanao (MMCM) Computing Students Society (CSS) to allow students to compile their portfolio, and to get updates on school events.",
            img: "/assets/projects/ccis-website-mockup.png",
            details: [
                // details shall be the "contributions" for the coding projects section
                "Created functionality for viewing, adding and editing faculties and student officers record per school year using",
                "Created pages using EJS for viewing information on faculties and student officers per school year",
            ],
            roles: ["Back End Developer  (Oct 2023 - Feb 2024)"],
            tools: [
                {
                    name: "Node.js",
                    src: "",
                },
                {
                    name: "Express",
                    src: "",
                },
                {
                    name: "React",
                    src: "",
                },
            ],
            displaySize: {
                cols: 2,
                rows: 1,
            },
        },
        "MMCM CCIS Discord Bot": {
            description:
                "This discord bot was made to verify the enrollment status of students, and to assign roles and permissions to each student based on their year levels in the discord server of Mapua Malayan Colleges Mindanao, College of Computer and Information Science (CCIS).",
            img: "/assets/projects/mmcm-ccis-discord-bot.png",
            details: [
                // details shall be the "contributions" for the coding projects section
                "Created function to parse excel file for information on enrolled students for the academic year using NodeJS, and xlsx library.",
                "Created database schema to store the students’ information for verifying discord registration status.",
                "Created custom discord command to register enrolled members and automatically assign roles to their respective year levels based on the information from the excel file.",
            ],
            roles: ["Lead Developer (June 2022)"],
            tools: [
                {
                    name: "Node.js",
                    src: "",
                },
                {
                    name: "MongoDB",
                    src: "",
                },
                {
                    name: "Discord",
                    src: "",
                },
            ],
            displaySize: {
                cols: 2,
                rows: 1,
            },
        },
        "MCM Cup 2022 Mobile Legends Discord Bot": {
            description:
                "This discord bot was made to verify, register, and grant roles and permissions to the participants of the MCM Cup 2022 Mobile Legends Competition based on their teams.",
            img: "/assets/projects/mcm-cup-discord-bot.png",
            details: [
                // details shall be the "contributions" for the coding projects section
                "Created a discord command to encode participants’ data into the database to allow multiple people to help encode hand-written registration forms for the event.",
                "Encoded participants’ data into the database with the help of other Computing Students Society officers (2021-2022).",
                "Created database schema to store the participants’ information to verify registration into the Discord Server during the competition.",
                "Created custom discord command to allow participants to register themselves, and automatically assign roles to their respective schools and teams based on the information stored in the database.",
                "Troubleshooted problems that arose with regards to the Discord registration process during the event (i.e. participants unable to register due to typos from manual encoding, participants needing help registering, registering those who replaced some participants due to various reasons and were not included in the database).",
            ],
            roles: ["Lead Developer (March 2022)"],
            tools: [
                {
                    name: "Node.js",
                    src: "",
                },
                {
                    name: "MongoDB",
                    src: "",
                },
                {
                    name: "Discord",
                    src: "",
                },
            ],
            displaySize: {
                cols: 2,
                rows: 1,
            },
        },
        "Face Mask Detection": {
            description:
                "This machine learning model was trained using YOLOv8 using a face mask dataset with 3 classes: (1) with mask, (2) without mask, (3) mask weared incorrect. This project was made in fulfillment of our machine learning course.",
            projectLink: "https://github.com/JCU25/Face-Mask-Detection-and-Counting",
            img: "/assets/projects/mask-det-proj.png",
            details: [
                // details shall be the "contributions" for the coding projects section
                "Researched datasets for training the model to detect people with and without masks, and those with masks worn incorrectly.",
                "Trained dataset on YOLOv8 models.",
                "Tested model detection capabilities through random images in Jupyter notebook",
            ],
            roles: ["Model Trainer (November 2023)"],
            tools: [
                {
                    name: "Python",
                    src: "",
                },
                {
                    name: "YOLOv8",
                    src: "",
                },
                {
                    name: "Jupyter Notebook",
                    src: "",
                },
            ],
            displaySize: {
                cols: 2,
                rows: 1,
            },
        },
        "Waste Classification": {
            description:
                "This machine learning model was trained using YOLOv8 using the EE297_Project.v4i.yolov8 dataset from Roboflow Universe. This project was made in fulfillment of our machine learning course.",
            projectLink: "https://github.com/JCU25/Waste-Classification-Model",
            img: "/assets/projects/waste-classification-proj.png",
            details: [
                // details shall be the "contributions" for the coding projects section
                "Researched datasets for training the model to detect different types of wastes",
                "Trained dataset on YOLOv8 models.",
                "Tested model detection capabilities through random images in Jupyter notebook",
            ],
            roles: ["Model Trainer (November 2023)"],
            tools: [
                {
                    name: "Python",
                    src: "",
                },
                {
                    name: "YOLOv8",
                    src: "",
                },
                {
                    name: "Jupyter Notebook",
                    src: "",
                },
            ],
            displaySize: {
                cols: 2,
                rows: 1,
            },
        },
        "COMING SOON": {
            description: "Project undergoing planning and construction.",
            img: "/assets/projects/coming-soon-coding-projects.png",
            details: [
                // details shall be the "features list" for the coding projects section
            ],
            tools: [
                {
                    name: "Figma",
                    src: "",
                },
            ],
            displaySize: {
                cols: 2,
                rows: 1,
            },
        },
    },
    design: {
        "COMING SOON": {
            description: "This project is currently being polished.",
            img: "/assets/projects/coming-soon-design-projects.png",
            details: [
                // details shall be the "features list" for the coding projects section
            ],
            tools: [
                {
                    name: "Figma",
                    src: "",
                },
            ],
            displaySize: {
                cols: 2,
                rows: 1,
            },
        },
    },
};

export async function GET({ params }: APIContext) {
    const category = params.category;
    if (category == "default") {
        return new Response(JSON.stringify(projects), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    if (!projects[category as keyof typeof projects]) {
        return new Response(JSON.stringify({ error: "Category not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(projects[category as keyof typeof projects]), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export function getStaticPaths() {
    return [
        { params: { category: "default" } },
        { params: { category: "coding" } },
        { params: { category: "design" } },
    ];
}

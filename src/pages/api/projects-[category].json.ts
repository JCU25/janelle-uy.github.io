import type { APIContext } from "astro";

const projects = {
    "coding": {
        "Project OCP": {
            description: "coding project",
            img: "code img"
        }
    },
    "design": {
        "Shelf Gleam": {
            description: "design proj",
            img: "design img"
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
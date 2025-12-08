import { Client } from "@gradio/client";

function isPythonRequest(text) {
    const lower = text.toLowerCase();

    const otherLangs = [
        "java",
        "c\\+\\+",
        "c#",
        "rust",
        "cpp",
        "\\bgo\\b",
        "javascript",
        "typescript",
        "php",
        "ruby",
        "swift",
        "kotlin",
        "scala",
        "perl",
        "r language",
        "matlab",
        "fortran",
        "haskell",
        "lua",
        "dart",
    ];

    if (lower.includes("python")) {
        return true;
    }

    for (const lang of otherLangs) {
        const regex = new RegExp(lang, "i");
        if (regex.test(lower)) {
            return false;
        }
    }

    return true;
}

export async function POST(request) {
    try {
        const { prompt } = await request.json();
        // console.log(prompt)

        if (!isPythonRequest(prompt)) {
            return Response.json({
                response: "Neuralpy can generate only Python code snippets.",
            });
        }

        const client = await Client.connect("rahul-shrivastav/neuralpy-demo");
        const result = await client.predict("/predict", { prompt });
        // console.log(result.data[0].response);
        if (!result.data[0].response.split("<|assistant|>")[1]) {
            return Response.json({ response: "Enter valid prompt." });
        }
        return Response.json({
            response: result.data[0].response.split("<|assistant|>")[1],
        });
    } catch (error) {
        console.error("Prediction error:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

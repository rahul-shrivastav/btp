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
        const { prompts, api } = await request.json();
        console.log("api called now");
        console.log(prompts, api);
        // return Response.json({
        //     response: "rrr".repeat(300),
        // });
        if (!isPythonRequest(prompts)) {
            return Response.json({
                response: "Neuralpy can generate only Python code snippets.",
            });
        }

        if (api === "2" || api === "3") {
            if (api === "2") {
                console.log("llama api called in backend");
                const client = await Client.connect("rahul-shrivastav/btp-api");
                const result = await client.predict("/generate_response", {
                    prompt: prompts,
                });
                console.log(result);
                console.log(
                    result.data[0].response.split("<|assistant|>").at(-1)
                );
                if (!result.data[0].response.split("<|assistant|>").at(-1)) {
                    return Response.json({ response: "Enter valid prompt." });
                }
                return Response.json({
                    response: result.data[0].response
                        .split("<|assistant|>")
                        .at(-1),
                });
            } else {
                console.log("phi api called in backend");
                const client = await Client.connect(
                    "notfakeanshu/anshu_phi_series_space"
                );
                const result = await client.predict("/generate_response", {
                    prompt: prompts,
                });
                if (!result.data[0].response.split("<|assistant|>").at(-1)) {
                    return Response.json({ response: "Enter valid prompt." });
                }
                return Response.json({
                    response: result.data[0].response
                        .split("<|assistant|>")
                        .at(-1),
                });
            }
        } else {
            console.log("Gemmo server api called");
            const client = await Client.connect(
                "yashasvi1009/api-gemma-finetuned-medqa"
            );
            const result = await client.predict("/generate_response", {
                prompt: prompts,
            });
            if (!result.data[0].response.split("### Response:\n")[1]) {
                return Response.json({ response: "Enter valid prompt." });
            }
            return Response.json({
                response: result.data[0].response.split("### Response:\n")[1],
            });
        }

        // console.log(result.data[0].response);
    } catch (error) {
        console.error("Prediction error:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

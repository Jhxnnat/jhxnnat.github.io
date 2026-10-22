// 11ty config

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("static/fonts/terminal-grotesque.ttf");
};

// This named export is optional
export const config = {
    dir: {
        //input: ".",
        output: "_site"
    }
};

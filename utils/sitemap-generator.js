require("babel-register")({
    presets: ["es2015", "react"]
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {

    const paramsConfig = {
        "/de/anmeldung/:teams?": [{0: "2vs2"}, {1: "3vs3"}],
        "/en/registration/:teams?": [{0: "2vs2"}, {1: "3vs3"}]
    };

    return (
        new Sitemap(router)
            .applyParams(paramsConfig)
            .build("https://www.battleground-bulls.de")
            .save("./public/sitemap.xml")
    );
}

generateSitemap();
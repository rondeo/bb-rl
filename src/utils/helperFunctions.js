export function searchToObject(search = "") {
    let result = {};
    if (search !== "") {
        if (search[0] === "?") {
            search = search.substring(1);
        }
        let searchParts = search.split("&");
        searchParts.forEach(function (part) {
            part = part.split("=");
            result[part[0]] = part[1];
        });
    }
    return result;
}
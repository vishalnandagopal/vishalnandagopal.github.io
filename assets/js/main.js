// Append the href to the github repo with the exact file path, to take anyone who clicks it to the exact file on github.
let path_name = window.location.pathname;
if (path_name.length > 1) {
    if (!path_name.endsWith(".html") && !path_name.endsWith("/")) {
        path_name = path_name.concat(".html");
    }
    document.getElementById("pagelink").href += "/blob/master" + path_name;
}

// Add rel no opener to all anchor tags ("<a>").
document.querySelectorAll("a").forEach((a_tag) => {
    a_tag.rel = "noopener";
});

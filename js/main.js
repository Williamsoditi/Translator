const fromText = document.querySelector(".from-text"),
    toText = document.querySelector(".to-text"),
    selectTag = document.querySelectorAll("select"),
    exchange = document.querySelector(".exchange"),
    translate = document.querySelector("button")
    icons = document.querySelector("i")

selectTag.forEach((tag,id) => {
    for(const langCode in languages){
        //console.log(languages[langCode]);
        let selected;

        if (id == 0 && langCode == "en-UK") {
            selected = "selected"
        }
        else if (id == 1 && langCode == "tr-TR") {
            selected = "selected"
        }

        let option = `<option value = "${langCode}" ${selected}> ${languages[langCode]}</option>`

        tag.insertAdjacentHTML("beforeend", option)
    }
});
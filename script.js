class Tabs {
    constructor(container) { 
        this.container = container; //takes container that is passed in. below, the div in tabs class
        this.tabs = container.querySelectorAll(".trigger"); //selects all .trigger elemtns in tabs class
    }
    init() {
        this.tabs.forEach(tab => { //goes through all trigger elements in tabs class
            tab.addEventListener("click", e => {
                this.toggleTabs(e); //does the two functions below, passing in the clicked tab (e)
                this.toggleContent(e);
            });
        });
    }
    toggleTabs(e) {
        this.tabs.forEach(tab => tab.classList.remove("active"));//removes active from all tabs
        e.target.classList.add("active"); //adds active to clicked tab (e)
    }
    toggleContent(e) {
        this.container.querySelectorAll(".content").forEach(content => {
            content.classList.remove("active"); //removes active from all contents
        });
        const selector = e.target.getAttribute("data-target"); //gets class of needed content div from clicked tab
        const content = this.container.querySelector(selector); //selects content div based on above
        content.classList.add("active");//adds active to selected content div
    }
}

const tabs = new Tabs(document.querySelector(".tabs")); //creates tabs object, passing in .tabs div
tabs.init(); //initializes the object, activating the click event listener
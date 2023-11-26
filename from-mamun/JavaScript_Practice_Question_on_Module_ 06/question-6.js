// Define a constructor function for a "Slider" object with properties for name, pagination, and columns count

function Slider(name, pagination, columns) {
    this.name = name;
    this.pagination = pagination;
    this.columns = columns;
}

const homePageSlider = new Slider("Homepage Slider", true, 4);

console.log("Slider name: ", homePageSlider.name);
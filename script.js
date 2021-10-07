window.console.log("wortk")


let section2 = document.querySelector(".section2");
let photo1 = document.querySelector(".summaryPhoto");




window.addEventListener("scroll", function () {

    let sec2Position = section2.offsetTop; // pobieram pozycje elemntu na stronie od góry 
    let posScrolll = this.scrollY;
    let secHight = section2.offsetHeight;
    let windowHight = this.window.outerHeight;



    if (posScrolll > sec2Position + secHight - windowHight) {
        section2.classList.add("active")

        console.log("w zasiegu scrolla")


    }
    if (sec2Position - windowHight > posScrolll) {
        section2.classList.remove("active")
    }

    let photoPosition = photo1.offsetTop; // pobieram pozycje elemntu na stronie od góry 
    let photoHight = photo1.offsetHeight;
    if (posScrolll > photoPosition + photoHight - windowHight) {
        photo1.classList.add("show")
        console.log("????")

       


    }






})
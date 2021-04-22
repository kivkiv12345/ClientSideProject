function MakeTopNavBar() {
    $("#TopNavigationBar").load("navbar.html");

    var CurrentPage;

    try {
        CurrentPage = document.location.href.match(/[^\/]+$/)[0];
    }
    catch (err) {
        CurrentPage = "index.html";
    }

    setTimeout(function () {

        // Gets the <li> tags inside the <ul> tag which is inside the <nav> tag inside the "TopNavigationBar" <div>...
        listelements = document.getElementById("TopNavigationBar").children[0].children[0].children;

        Array.prototype.forEach.call(listelements, function (li, index) {
            if (li.children[0].getAttribute("href") == CurrentPage)
                li.style.backgroundColor = "limegreen";
        })

        // JQuery solution.
        /*$("#TopNavigationBar").find('a').each(function () {
            if ($(this).attr('href') == CurrentPage) {
                $(this)[0].parentElement.style.backgroundColor = "limegreen";
            }
        })*/
    }, 50);
}

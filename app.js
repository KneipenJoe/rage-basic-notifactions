let area = document.getElementsByClassName("notification_area")[0];

function createAlert(type, title, message, displaySeconds) {
    let element = document.createElement("div");
    element.classList.add("notification");

    let titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.innerHTML = `<img src="img/${type}.png" /> ${title}`;


    let fillerElement = document.createElement("div");
    fillerElement.classList.add("filler");

    let fillElement = document.createElement("div");
    fillElement.classList.add("fill");

    fillerElement.append(
        fillElement
    );

    element.append(
        titleElement,
        fillerElement,
        message
    );

    area.prepend(element);

    let count = 0;
    let interval = setInterval(function() {
        count++;
        console.log(count);
        fillElement.style.height = `${count*100/displaySeconds}%`;
        if(count >= displaySeconds) {
            setTimeout(function() {
                element.remove();
                clearInterval(interval);
            }, 800);
        }
    }, 1000);
}
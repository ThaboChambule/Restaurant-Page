export function LoadInitialContent(){

    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.innerHTML = `Thabo's Breakfast Bar`;

    const description = document.createElement("p");
    description.textContent = 
    `Thabo's has the best porridge! The atmosphere and customer <br> 
      service makes you feel like you are sitting in the middle of <br>
    the woods, eating like a bear! This is exactly the kind of place <br>
    that I like to return to again and again.`

    const hours = document.createElement("p");
    hours.innerHTML =
    ` <strong>Hours</strong>
    <ul>
        <li>Sunday: 8am - 8pm</li>
        <li>Monday: 6am - 6pm</li>
        <li>Tuesday: 6am - 6pm</li>
        <li>Wednesday: 6am - 6pm</li>
        <li>Thursday: 6am - 10pm</li>
        <li>Friday: 6am - 10pm</li>
        <li>Saturday: 8am - 10pm</li>
    </ul>
    `
    const location = document.createElement("p");
    location.innerHTML = 
    `
    <strong>Location</strong> <br>
      134 Forest Drive, Forestville, Maine
    `
    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(hours);
    content.appendChild(location)
}
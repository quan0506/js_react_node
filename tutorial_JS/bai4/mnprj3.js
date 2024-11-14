const prompt = require("prompt-sync")();

function printInfo(){
    console.log("Contact Management System");
    console.log("-----------");
    console.log("1 Add contact");
    console.log("2 delete ");
    console.log("3 view");
    console.log("4 search");
    console.log("5 exit");
}

function addContact(){
    const name = prompt("Name : --");
    const email = prompt("Email : --");
    const contact = {
        name: name,
        email: email
    };
    contacts.push(contact);
    console.log("Nice");
}

function deleteContact(){
    console.log("Contact Ids");
    for (let i = 0; i < contacts.length; i++){
        const contact = contacts[i];
        console.log((i+1).toString() + ":", contact.name);
    }
    const number = parseInt(prompt("Enter ID:"));
    if (number > contacts.length || number < 1){
        console.log("Invalid");
        return;
    }
    contacts.splice(number - 1, 1);
    console.log("Remove success");
}

function searchContact(){
    const searchString = prompt("Search: ").toLowerCase();
    const results = [];

    for (let contact of contacts){
        if (contact.name.toLowerCase().includes(searchString)) 
            results.push(contact);
        
    }

    listContacts(results);
}

function listContacts(contactsToDisplay = contacts){
    for (let contact of contactsToDisplay){
        console.log("=======");
        console.log("Name: ", contact.name);
        console.log("Email: ", contact.email);
    }
}

const contacts = [];
printInfo();

let keepGoing = true;
while (keepGoing) {
    const number = prompt("Enter a feature (1-5): ");
    switch (number) {
        case "1":
            addContact();
            break;
        case "2":
            deleteContact();
            break;
        case "3":
            listContacts();
            break;
        case "4":
            searchContact();
            break;
        case "5":
            keepGoing = false;
            break;
        default:
            console.log("Unknown");
            break;
    }
}

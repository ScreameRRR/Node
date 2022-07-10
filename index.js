const contactListOperations = require("./contact.js");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
        const allContacts = await contactListOperations.listContacts();
        console.log(allContacts)

          break;

    // case "get":
    //   // ... id
    //   break;

    // case "add":
    //   // ... name email phone
    //   break;

    // case "remove":
    //   // ... id
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
invokeAction(argv);


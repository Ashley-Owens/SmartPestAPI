const ds = require("../datastore.js");
const gstore = require("../config/database.js");
// gstore.connect(datastore);
const RoachModel = require("../roach/roach.model");

// In a Controller request:
var data = req.body; // {name: 'John'}; // ---> email is missing

var roach = new RoachModel(data);
roach.save().catch((err) => {
	// --> ValidatorError
});
//  OR
const { entityKey } = await roach.save();
const user = new User({ name: "John", roach: entityKey });
await user.save();

// Or Could be used like this

const User = require("./user.model");
const Address = require("./address.model");

const user = new User({ name: "John", address: Adress.key(123) });

// Or first by saving a new address an then create a User with its Key

const address = new Addresss({ country: "Belgium" });
const { entityKey } = await address.save();
const user = new User({ name: "John", address: entityKey });
await user.save();

const BlogPost = require("./blog-post.model");

// id can be an integer or a string
BlogPost.get(123).then((entity) => {
	console.log(entity.plain());
});

// Array of ids
BlogPost.get([1, 2, 3]).then((entities) => {
	entities = entities.map((entity) => entity.plain());
});

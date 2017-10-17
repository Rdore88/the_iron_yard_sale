# README

## To use the API
Reminder: When using postman all requests that require a body should use the raw input, change the type from text to JSON and all keys should have quotes around them. Look at How to log in for more info.

#### How to log in
Make a post fetch to `/api/users`
The body will need the user's input sent as an object with the keys "name" and "password". For example:

  Call to database
 `{name: "input1", password: "input2"}`

  Practice with postman (keep in mind this is for all API calls with a body)
  `{"name": "input1", "password": "input2"}`


#### Make a call to create an item
Make a post fetch to `/api/items`
The body needs to have a key of item which is an object of all the attributes. Also there must be a current user to send the ID of that user. Created a file uploader field so the user can upload a file for the item.
Here is an example body, be mindful of what is a string and what isn't:

`{
  user_id: 2,
  item:
  {
    title: "desk",
    description: "The best desk, everybody says so",
    price: 20.99,
    category: "furniture",
    quantity: 50,
    image: uploaded_file_from_user
  }
}`

#### Make a call to get all items
Make a get call to `/api/items`
This will return an array of objects, each object will have all of the attributes like the post call above but it will also have a unique ID, a created_at timestamp and updated_at timestamp.

#### To see a specific item
Make a get call to `/api/items/:id`
the :id will be the actual unique ID of the item that you want to see. For example `/api/items/4`

#### subtract quantity of an item
Make a put call to `/api/subtract_quantity/:id`
the :id will be the actual unique ID of the item that you want to subtract from. In the body you will put the number to subtract from the item's quantity. Also, the user ID will need to be passed in with the body. This will probably only be called when a new order is created for this item and the database needs to reflect those changes. For the below example this will subtract 10 from the items quantity in the database.

`{user_id: 4, item: {quantity: 10}}`

#### add quantity of an item
Make a put call to `/api/add_quantity/:id`
the :id will be the actual unique ID of the item that you want to add from. In the body you will put the number to add from the item's quantity. Also, the user ID will need to be passed in with the body. This will probably only be called when an order is rejected for this item and the database needs to reflect those changes. For the below example this will add 10 from the items quantity in the database.

`{user_id: 4, item: {quantity: 10}}`

#### Delete an item
Make a delete call to `/api/items/:id`
The :id will be the actual ID of the item you want to delete. You will need to send the user ID in the body of the request also.

#### Create an order
Make a post call to `/api/orders`
To create an order your must have the original item's ID to send as part of the body. You will also need to send the buyer's info. Pay attention to what is sent as a string and what is not. Here is an example:

`{
  order:
  {
    name_of_buyer: "John",
    email_of_buyer: "john@gmail.com",
    phone_of_buyer: "404-384-9483",
    quantity: 10,
    item_id: 2
  }
}`

#### To get all orders
Make a get call to `/orders` You must have someone logged in to see the orders so the user ID must be sent in the body of the call. For example:

`{user_id: 4}`

#### To see a specific order
Make a get call to `/api/orders/:id`
the :id will be the actual unique ID of the item that you want to see. For example `/api/orders/4` You also must send the user ID in the bottom, please see above section for that information.

#### To confirm an order
Make a get call to `/api/confirm_order/:id`
The :id will be the actual ID of the order you want to complete. The order must have a date set before you can confirm an order. 

#### Update an order/set a date
Make a put call to `/api/orders/:id`
The :id will be the actual ID of the order you want to update. The body you send will be set up the same way as the post call. The main reason to call this would be to set up the date of pickup. Any part of the schema that is sent through this call will be updated, so if that attribute is empty then it will make it empty in the database. For the below example the only things to change was the quantity and date so only those were sent back.

`{user_id: 3, order: {date: "Nov 3rd at 10am", quantity: 25}}`


#### Delete an order
Make a delete call to `/api/orders/:id`
The :id will be the actual ID of the order you want to delete. You will need to send the user ID in the body of the request also.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

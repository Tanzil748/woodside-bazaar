# Woodside Bazaar

Woodside Bazaar is an online grocery store that allows users to shop the freshest of ingredients! This mock application is meant to serve as a template for local mom/pop stores, and further customizations can be made based on the client's request.

## Tech Stack

`Next JS`, `Typescript`, `React`, `Tailwind/Daisy UI`, `Redux Toolkit`, `Stripe`

## Demo

Here's a walkthrough of how the app functions:

- User loads into the home page & looks at the website promo banner. Then scroll to product section and add items to cart.
  ![](https://github.com/Tanzil748/woodside_bazaar/blob/main/gifs/bazaarIntro.gif)
  <br/>

- User can toggle the quantity of their selected products in cart as well as remove them. All data is reflected in cart summary menu.
  ![](https://github.com/Tanzil748/woodside_bazaar/blob/main/gifs/bazaarCart.gif)
  <br/>

- Login, Register & order page current design. Will be worked on in future updates.
  ![](https://github.com/Tanzil748/woodside_bazaar/blob/main/gifs/bazaarCart.gif)
  <br/>

## Deployment

Clone this repository and install npm packages.

```bash
  npm install
```

Then, to deploy this project run the following on client & server terminal:

```bash
  npm run dev
```

#### Users

- All order information is stored in stripe dashboard.
  ![](https://github.com/Tanzil748/woodside_bazaar/blob/main/gifs/bazaarUsermodel.gif)
  <br/>

## Future Features

In future versions, I plan on implementing a variety of features:

- Adding order history to dedicated order page
- Making all product filters functional
- Adding a search bar to header
- Redirect next auth to my custom login/register page
- Connecting to a database

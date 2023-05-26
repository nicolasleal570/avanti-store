# Avanti Store

Technical test for the purpose of applying for the position of **Senior Frontend Developer** at [Galería Avanti](http://www.galeriaavanti.com/en/).

It was developed using [Next.js](https://nextjs.org/) 13 with [Typescript](https://www.typescriptlang.org/) and consisted of creating an e-commerce application using the Shopify API [https://mock.shop/](https://mock.shop/). This is a GraphQL API so I made use of [graphql-request](https://www.npmjs.com/package/graphql-request) to do all the requests.

Also, I used [TailwindCSS](https://tailwindcss.com/) to beautify the application.

The project demo is available at [https://avanti-store-murex.vercel.app/](https://avanti-store-murex.vercel.app/)

## Application modules

- Landing page
- Product detail page
- Products Search page (Paginated)
- Products list by collections (Paginated)

## Testing

I used [Cypress](https://www.cypress.io/) to implement some unit and end-to-end tests. Although I missed some components and views to test, I did what I needed to demonstrate my skills in this technology. I tested:

- Search page
- Landing page
- Navbar component

## Start project in development mode

    git clone https://github.com/nicolasleal570/avanti-store
    cd avanti-store
    yarn install
    yarn dev

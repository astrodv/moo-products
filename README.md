# Documentation

The project is built per recommendation/specification with create-react-app. 
You compile it with  `npm run start`

Some notes:

###Stack used:
React, Typescript, Styled Components

###Project structure:
All the components are under the `/components/` folder.

`src/components/Core` contain a custom created modular first styled-components/types library I've built a while ago 
that I use it to bootstrap projects when I do not wish to use third-party-libraries. It is not fully complete but
it should be fine for this task.

`src/components/Product` contains the core rendering logic of the product-configufator. I've added comments above each
function to explain better what they do. Product component is built entirely from the `/components/Core` library.

`/src/data` contains some hardcoded data needed for the product. (Json file and the theme styling module)


###Some extra notes:
I didn't had time to focus on Storybook and Testing, at least within the time-limit. I've relied on type checking at the
moment since the data is hardcoded and we don't have an api/external data.



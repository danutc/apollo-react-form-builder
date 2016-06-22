# apollo-react-form-builder
<<<<<<< HEAD
=======
extends [mantra-react-form-builder](https://github.com/apollo-forms/mantra-react-form-builder) to handle forms linked to multiple datasources over [apollostack](https://github.com/apollostack/apollo)
>>>>>>> 8e169aa3531735ac102722b51db6b1b379994003

One form instance is linked to multiple datasources:
- n x mongodb documents (in one or several collections)
- m x SQL tables
- k x REST endpoints

For example some fields on a form are loaded / posted to a mongodb document and the rest are loaded / posted to a REST endpoint.

<<<<<<< HEAD
Technology:
- form engine: [Mozilla Services react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form)
- schemas: [IETF JSON Schema Internet Draft Version 4](http://json-schema.org/documentation.html)
- data access: [apollostack](https://github.com/apollostack/apollo)
- front end achitecture: [Mantra](https://github.com/kadirahq/mantra), [React](https://facebook.github.io/react/)
- Framework: [meteor](www.meteor.com)
- widgets: [Draft.js](https://facebook.github.io/draft-js/), [Ace Editor](https://github.com/securingsincity/react-ace)
- sample form builder: [Kinto formbuilder](https://github.com/Kinto/formbuilder)

=======
>>>>>>> 8e169aa3531735ac102722b51db6b1b379994003
##How does it work?
Each datasource has schema describing data objects. At design time JSONSchema formData fields are mapped to datasource schemas.

At design time form builder generates and saves in mongodb **FormDefinitions** collection:
- JSONSchema (**what** to render on the form)
- UISchema (**how** to render on the form)
- n x mongodb document formData mapping schemas (mongodb datasources)
- m x SQL table formData mapping schemas (SQL datasources)
- k x REST endpoint formData mapping schemas (REST datasources)

Each form type is identified by a **formKey** so the schemas can be found and loaded from **FormDefinitions** collection.

At runtime:
- form engine loads **JSONSchema** and **UISchema** to present the form to user
- user submits the form: **formData** is generated and submited to datasources over **apollostack**
- **apollostack** loads mongodb / SQL / REST schemas by **formKey**
- using schemas apollostack splits **formData** and sends the relevant fields to appropriate **datasource**.

##How to run?
- Clone the repository
- `meteor npm install`
- `meteor` 
- Go to [http://localhost:3000/form](http://localhost:3000/form) to see the result 
- Happy hacking !!!

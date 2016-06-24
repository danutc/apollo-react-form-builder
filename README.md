# apollo-react-form-builder
extends [mantra-react-form-builder](https://github.com/apollo-forms/mantra-react-form-builder) to handle forms linked to multiple datasources over [apollostack](https://github.com/apollostack/apollo)

One form instance is linked to multiple datasources:
- n x mongodb documents (in one or several collections)
- m x SQL tables
- k x REST endpoints

For example some fields on a form are loaded / posted to a mongodb document and the rest are loaded / posted to a REST endpoint.

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

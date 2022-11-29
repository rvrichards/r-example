# ChildParent

This is a working example for a react application using child -> parent component communication.

App.js  <-- Person.js <-- PersonForm.js

The data we have on a "person" is simply name and age. The PersonForm component will allow entering that data, and passes it up to the Person component.

Person component then will take that, add a random number to it, and pass all three up to App.js

App.js will display in console what info it has, as well as both sub components.

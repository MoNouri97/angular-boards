# Boards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.
A task tracking app using Angular . inspired by sites like Trello

- [Boards](#boards)
  - [UI](#ui)
    - [Home](#home)
  - [Features](#features)
  - [Challenges & Solutions](#challenges--solutions)
  - [Development server](#development-server)

## UI

- Designed using Bulma CSS framework **with some customization**,
  [Modified Bulma Styles are here](./src/main-styles.scss)
- And Angular Animation for the the animations

### Home

Current UI
![screenshot](<screenshots/Screenshot from 2020-04-17 23-30-10.png> "main ui")

## Features

- adding tasks
- drag & drop to move tasks between lists
- adding lists
- managing lists ( rename and remove)
- PWA : this app can be installed to run offline

**To Add**

- removing tasks
- multiple boards

this app is using the angular CDK for drag & drop

The app is using local storage to save tasks

```ts
updateStorage() {
    localStorage.setItem("boards", JSON.stringify(this.boards));
  }
```

## Challenges & Solutions

- **Drag & Drop for tasks :** From the start i wanted the user to be able to drag & drop tasks to reorder them and move them between different lists (columns)

  - solution was simple and it is to implement **angular CDK** for drag&drop which is thankfully well-documented and supports moving element between lists

- **'Add Animation' Problem:** adding a simple scale animation to tasks when they are added resulted in braking the drag & drop animation(the object was destroyed and then added by the drag and drop so the animation was triggered every time the user drops a task)

  - to combat this i added a bool in the service to check if there is a new task to be added and only triggered the animation then. (**using state**) the trigger for the animation is now ("toAdd => added") rather than (void => \*) , the bool is reset using `.done` event

- **Nesting Drag & Drop :** adding the same attributes to the list of columns (lists) that i used for the list of tasks to make them drag-able didn't work ad intended and resulted in some weird behaviour
  - after another visit to the documentation and some googling i found out that i couldn't have `cdkDropListGroup` and `cdkDropList` on the same element so simply **creating a wrapper** around the `cdkDropListGroup` worked fine

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

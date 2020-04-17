# Boards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

---

A task tracking app using Angular .

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

**To Add**

- removing tasks
- multiple boards
- PWA

this app is using the angular CDK for drag & drop

The app is using local storage to save tasks

```ts
updateStorage() {
    localStorage.setItem("boards", JSON.stringify(this.boards));
  }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

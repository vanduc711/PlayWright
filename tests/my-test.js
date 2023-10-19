const base = require('@playwright/test');
const { TodoPage } = require('../todo-page/todo-page');
// const { SettingsPage } = require('./settings-page');

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
exports.test = base.test.extend({
  todoPage: async ({ page }, use) => {
    // Set up the fixture.
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');

    // Use the fixture value in the test.
    await use(todoPage);

    // Clean up the fixture.
    await todoPage.removeAll();
  },

//   settingsPage: async ({ page }, use) => {
//     await use(new SettingsPage(page));
//   },
});
exports.expect = base.expect;
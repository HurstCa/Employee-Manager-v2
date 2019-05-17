let testData = require('../dataAssets/testData')
let employeePage = {}
module.exports = {
    beforeEach: browser => {
        employeePage = browser.page.pageObjects()
        employeePage.navigate()
    },
    'add, modify, cancel, save, and delete employee': browser => {
        employeePage
            .addEmp(testData)
    }
}
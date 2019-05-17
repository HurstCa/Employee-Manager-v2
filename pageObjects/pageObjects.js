var employeecommands = {
    addEmp: function (testData) {
        testData.forEach(test => {
            this
                .waitForElementVisible('@newemp', 25000)
                .click('@newemp')
                .verify.containsText('@card', "New Employee")
                .click('@card')
                .waitForElementVisible('@id')
                .clearValue('@name')
                .setValue('@name', test.name)
                .clearValue('@phone')
                .setValue('@phone', test.phone)
                .clearValue('@email')
                .setValue('@email', test.email)
                .clearValue('@title')
                .setValue('@title', test.title)
                .click('@cancel')
                .waitForElementVisible('@name')
                .verify.value('@name', "New Employee")
                .clearValue('@name')
                .setValue('@name', test.name)
                .clearValue('@phone')
                .setValue('@phone', test.phone)
                .clearValue('@email')
                .setValue('@email', test.email)
                .clearValue('@title')
                .setValue('@title', test.title)
                .click('@save')
                .useXpath()
                .click('//li[3]')
                .useCss()
                .click('@card')
                .verify.value('@name', test.name)
                .verify.value('@phone', test.phone)
                .verify.value('@email', test.email)
                .verify.value('@title', test.title)
                .click('@delete')
                this.api.acceptAlert()
                .pause(500)
            })
            this
            return this
        },
}

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeecommands],
    elements: {
        newemp: '[name="addEmployee"]',
        card: { selector: '//li[last()-1]', locateStrategy: 'xpath' },
        name: '[name=nameEntry]',
        phone: '[name=phoneEntry]',
        email: '[name=emailEntry]',
        title: '[name=titleEntry]',
        id: '#employeeID',
        save: '#saveBtn',
        cancel: '[name=cancel]',
        delete: '[name=delete]',
    }
}
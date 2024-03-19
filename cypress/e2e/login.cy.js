describe('Автотест на авторизацию', function () {
    
    it('Ввести правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('german@dolnikov.ru'); //ввод верного логина
        cy.get('#pass'). type('iLoveqastudio1'); //ввод верного пароля
        cy.get('#loginButton').click(); //нажать кнопку Войти 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
         })   
})

describe('Автотест на авторизацию', function () {
    
    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); //клик "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввод верного логина
        cy.get('#restoreEmailButton').click(); // клик "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
         })   
})

describe('Автотест на авторизацию', function () {
    
    it('Ввести правильный логин и НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('german@dolnikov.ru'); //ввод верного логина
        cy.get('#pass'). type('iLoveqastudio11'); //ввод неверного пароля
        cy.get('#loginButton').click(); //нажать кнопку Войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
         })  

        })

describe('Автотест на авторизацию', function () {
    
    it('Ввести неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('german@dolnikov1.ru'); //ввод неверного логина
        cy.get('#pass'). type('iLoveqastudio1'); //ввод верного пароля
        cy.get('#loginButton').click(); //нажать кнопку Войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
                 })   
        })

describe('Автотест на авторизацию', function () {
    
    it('Ввести неправильный логин (без @) и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('germandolnikov.ru'); //ввод неверного логина
        cy.get('#pass'). type('iLoveqastudio1'); //ввод верного пароля
        cy.get('#loginButton').click(); //нажать кнопку Войти 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
                 })   
        })
describe('Автотест на авторизацию', function () {
    
    it('Ввести логин, используя заглавные и строчные буквы и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('GerMan@Dolnikov.ru'); //ввод логина
        cy.get('#pass'). type('iLoveqastudio1'); //ввод верного пароля
        cy.get('#loginButton').click(); //нажать кнопку Войти 
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю крестик
                 })   
        })
        



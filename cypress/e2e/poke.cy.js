
describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //ввести логин
         cy.get('#password').type('USER_PASSWORD'); //ввести пароль
         cy.get('.auth__button').click(); //войти
         cy.get('.header__btns > [href="/shop"]').click(); //клик на Магазин
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111'); //ввод номера карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); //ввод срока карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //ввод cvv
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Legenda S'); //ввод ФИ
         cy.get('.pay-btn').click(); //клик Оплатить
         cy.get('#cardnumber').type('56456'); //ввод кода из СМС
         cy.get('.payment__submit-button').click(); //клик кнопки "отправить"
         cy.get('.payment__adv').click();
     })
 })
 

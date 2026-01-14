describe('Checkout Test', () => {
    beforeEach(() => {
        // Đăng nhập trước mỗi test
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });

    // Bài tập 2: Kiểm tra quy trình thanh toán
    it('Should complete checkout process successfully', () => {
        // Thêm sản phẩm vào giỏ hàng
        cy.get('.inventory_item').first().find('.btn_inventory').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');

        // Đi đến trang giỏ hàng
        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');

        // Nhấn nút Checkout
        cy.get('#checkout').click();
        cy.url().should('include', '/checkout-step-one.html');

        // Điền thông tin thanh toán
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('#postal-code').type('12345');

        // Nhấn Continue
        cy.get('#continue').click();

        // Xác minh rằng người dùng được chuyển đến trang xác nhận thanh toán
        cy.url().should('include', '/checkout-step-two.html');
    });

    // Test bổ sung: Hoàn thành thanh toán
    it('Should complete the entire checkout and see confirmation', () => {
        // Thêm sản phẩm vào giỏ hàng
        cy.get('.inventory_item').first().find('.btn_inventory').click();

        // Đi đến trang giỏ hàng
        cy.get('.shopping_cart_link').click();

        // Nhấn nút Checkout
        cy.get('#checkout').click();

        // Điền thông tin thanh toán
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Doe');
        cy.get('#postal-code').type('12345');

        // Nhấn Continue
        cy.get('#continue').click();

        // Nhấn Finish để hoàn thành thanh toán
        cy.get('#finish').click();

        // Xác minh trang hoàn thành thanh toán
        cy.url().should('include', '/checkout-complete.html');
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    });
});

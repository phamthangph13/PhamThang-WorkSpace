describe('Cart Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });

    // Kịch bản 3: Kiểm tra chức năng thêm sản phẩm vào giỏ hàng
    it('Should add a product to the cart', () => {
        cy.get('.inventory_item').first().find('.btn_inventory').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });

    // Kịch bản 4: Kiểm tra chức năng sắp xếp sản phẩm theo giá
    it('Should sort products by price low to high', () => {
        cy.get('.product_sort_container').select('lohi');
        cy.get('.inventory_item_price').first().should('have.text', '$7.99');
    });

    // Bài tập 1: Kiểm tra chức năng xóa sản phẩm khỏi giỏ hàng
    it('Should remove a product from the cart', () => {
        // Thêm sản phẩm vào giỏ hàng
        cy.get('.inventory_item').first().find('.btn_inventory').click();
        cy.get('.shopping_cart_badge').should('have.text', '1');

        // Nhấn nút "Remove" để xóa sản phẩm
        cy.get('.inventory_item').first().find('.btn_inventory').click();

        // Xác minh rằng giỏ hàng trống (badge không hiển thị)
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});

// export const environment = {
//     CATALOGO : 'http://ec2-54-233-224-246.sa-east-1.compute.amazonaws.com:8099/api/book/v1/catalog/retrieveBookCatalog',
//     LOGIN : 'http://ec2-54-233-224-246.sa-east-1.compute.amazonaws.com:8099/api/segurity/oauth/token',
//     CARRITO : 'http://ec2-54-233-224-246.sa-east-1.compute.amazonaws.com:8099/api/rentsales/v1/rent-sales/rentSalesBook',
// }

export const environment = {
    CATALOGO : 'http://23.101.187.222:8099/api/book/v1/catalog/retrieveBookCatalog',
    CATEGORIA_CATALOGO: 'http://23.101.187.222:8099/api/book/v1/catalog/retrieveBookCatalog?categoryId={id}',
    LOGIN : 'http://23.101.187.222:8099/api/segurity/oauth/token',
    CARRITO : 'http://23.101.187.222:8099/api/rentsales/v1/rent-sales/rentSalesBook?direction={direction}&preview={preview}&reference={reference}&shoppingId={shoppingId}&suscriptionId={suscriptionId}&deliveryId={deliveryId}',
    ADD_CARRITO: 'http://23.101.187.222:8099/api/shoppingcart/v1/shopping/createShoppingCart',
    REGISTRAR: 'http://23.101.187.222:8099/api/customer/management/customermanagement/registerClient',
  }

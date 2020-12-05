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
    ADD_CARRITO: 'http://23.101.187.222:8099/api/shoppingcart/v1/shopping/createShoppingCart?bookId={bookId}&clientId={clientId}&quantity={quantity}&type={type}',
    REGISTRAR: 'http://23.101.187.222:8099/api/customer/management/customermanagement/registerClient',
    DATOS_CLIENTE: 'http://23.101.187.222:8099/api/customer/management/customermanagement/client/{idpersona}',
    PLANES: 'http://52.150.12.26:8721/ws/PlanesPort',

    // seguridad visa
    URL_TOKEN_VISA :'https://apitestenv.vnforapps.com/api.security/v1/security',
    // sesion visa
    URL_SESION_VISA : 'https://apitestenv.vnforapps.com/api.ecommerce/v2/ecommerce/token/session/',
    // formulario visa
    URL_FORMULARIO_VISA : 'https://static-content-qas.vnforapps.com/v2/js/checkout.js?qa=true',
    // autorizacion pago visa
    URL_AUTORIZACION_VISA : 'https://apitestenv.vnforapps.com/api.authorization/v3/authorization/ecommerce/',

    URL_ACTION_FORMVISA: 'http://10.217.1.104:8088/transaction.php',
    URL_LOGO_VISA: 'http://localhost:4200/assets/image/logo.png',
  }

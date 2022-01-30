# Middlewares famosos

## CORS

Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación.

http://expressjs.com/en/resources/middleware/cors.html

## Morgan

Un logger de solicitudes HTTP para Node.js.

http://expressjs.com/en/resources/middleware/morgan.html

## Helmet

Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar!

https://github.com/helmetjs/helmet

## Express Debug

Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando.

https://github.com/devoidfury/express-debug

## Express Slash

Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas.

https://github.com/ericf/express-slash

## Passport

Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones.

https://github.com/jaredhanson/passport

## Swagger UI

Swagger es un servicio que nos permite documentar Endpoints.

https://swagger.io/tools/swagger-ui/

Tutorial para aplicar Swagger con Express
https://levelup.gitconnected.com/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce?gi=1f4adc8d39a6

---

Puedes encontrar más middlewares populares en el siguiente enlace:
http://expressjs.com/en/resources/middleware.html

---

Otros middlewares famosos

- <p>express-session</p>
- <p>cookie-parser</p>
- <p>method-override</p>
- <p>multer</p>
- <p>express-validator</p>

# Recomendaciones antes de enviar a Producción

- CORS
- HTTPS
- Procesos de build
- Remover logs
- Seguirdad (helmet)
- Testings
- Opcionales: DataLogs, Sentry, etc

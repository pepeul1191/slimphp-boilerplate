# Slim PHP Boilerplate

Instalar depdendencias:

    $ composer install && bower install

Refrescar composer:

    $ composer dump-autoload -o

Basado en Slim Framework 3 Skeleton Application

## Correr test de carga

Cambiar en 'src/configs/settings.php' el valor de llave 'ambiente_csrf' y 'ambiente_session' a 'inactivo' .

Migraciones con DBMATE - competition:

    $ dbmate -d "db/competition/migrations" -e "COMPETITION" new <<nombre_de_migracion>>
    $ dbmate -d "db/competition/migrations" -e "COMPETITION" up
    $ dbmate -d "db/competition/migrations" -e "COMPETITION" rollback

### Dump y Restore Mysql

    $ mysqldump -u root -p competition > db/competition.sql
    $ mysql -u root -p competition < db/competition.sql

---

Fuentes:

+ https://www.slimframework.com/docs/v3/tutorial/first-app.html
+ https://stackoverflow.com/questions/34807616/slim-3-render-method-not-valid
+ https://stackoverflow.com/questions/36993560/pass-arguments-in-slim-di-service
+ https://gist.github.com/akrabat/636a8833695f1e107701
+ https://www.slimframework.com/docs/v3/concepts/middleware.html
+ https://stackoverflow.com/questions/36521233/slim-3-middleware-redirect
+ https://github.com/slimphp/Slim-Skeleton
+ https://www.slimframework.com/docs/v3/cookbook/uploading-files.html
+ https://symfony.com/doc/current/components/filesystem.html

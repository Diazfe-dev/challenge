# Hola! Este es mi challenge.

#### En esta ocacion utilice NextJs, como framework principal.

#### Shadcn como libreria de componentes. En conjunto con tailwindCss para los estilos.

#### Utilice redux toolkit para el manejo del estado y redux-thunk para el estado asincrono.

#### Para el servidor utilice las server actions de Nextjs.

#### Y para simular la base de datos utilice prisma y genere una bdd local de sqlite.

## Comenecemos con la instalacion.

#### Clonemos el repositorio: https://github.com/Diazfe-dev/magoya_challenge

#### Instalemos las dependencias (en este caso utilice npm).

```bash
npm install
```

#### Generamos nuestro archivo .env y copiamos el contenido que esta en .env.example.

#### El valor que indica DATABASE_URL="file:./dev.db" es el path hacia nuestra bdd local.

#### Corramos el servidor de desarrollo.

```bash
npm run dev
```

#### Abrimos nuestro navegador en esta direccion. http://localhost:3000. Nos redirecionara directamente al dashboard.

#### Si no nos redirecciona podemos navegar nosotros a esta direccion. http://localhost:3000/protected/dashboard.

### Podemos comenzar a operar!

## Reconstruir base de datos.

#### Para borrar la base de datos y volver a construirla es tan simple como ir a la ruta: prisma/ y borrar el archivo dev.db

#### Despues ejecutamos el comando:

```bash
npx prisma migrate dev
```

#### Esto construira nuestra base de datos desde cero.

### Cualquier consulta no duden en contactarme. Saludos!

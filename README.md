### Socket-Server
Reconstruir modulos de Node
```
npm install
```
Generar el DIST
```
tsc -w
```
Escuchar los cambios con Nodemon
Levantar el servidor
```
nodemon dist/
```


### Instalar typescript de manera global
```
npm install -g typescript
```
### Instalar nodemon de manera global
```
npm install -g nodemon
```
### Librerías para el proyecto
```
npm install express
npm install cors
npm install body-parse
```
### Inicializar typescript en el proyecto
```
tsc --init
```
con esto se nos genera el archivo de tsconfig.json
aquí debemos modificar las propiedades 
```
"types":["node"]
```
Aquí es donde nuestra aplicación será compilada,
es decir, donde todo nuestro código de typescript será
convertido a JavaScript. Y eso será lo que se subirá a 
producción.
```
"outDir": "dist/"
```
### Para transpilar de typescript a JavaScript usar el siguiente comando
Para que este en modo observador y genera la carpeta dist
```
tsc -w 
```
### Para ejecutar nodemon
```
nodemon dist/
```
### Para que nos muestre las ayudas de express
```
npm i --save-dev @types/express
```
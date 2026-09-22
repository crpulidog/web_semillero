# web semillero

## Guardar cambios

El deploy se está lanzando con firebase. Debe ir al directorio de la aplicación ```semillero-web```. 

El avance de la página se puede observar en [web electron-volt](https://electron-volt-efeaa.web.app)

Cuando se clona el proyecto por primera vez debe ejecutarse los comandos.

```
npm install
npm run dev
```

Luego de aplicar cambios se debe construir la versión que comparte los archivos para el deployment con firebase en el directorio ```dist```. Ejecutar los siguientes comandos para actualizar el deploy de firebase.

```
npm run build
firebase deploy
```


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

### Agregar y cambiar: Eventos, galería y publicaciones

Modificar los archivos ```json``` que se encuentran en ```src/data```. Las imágenes y documentos agregarlos en ```public/``` cuya ruta debe escribirse como se muestra en los ejemplos en los archivos json. 

***Nota:*** Las imágenes deben estar en el orden que se mostrarán en el carrusel. Mientras que, los eventos se organizan automáticamente por fechas desde el componente donde ya no se muestran los eventos pasados. Los documentos se ordenan por fecha según como aparecen en el documento. 

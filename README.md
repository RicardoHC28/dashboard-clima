# Dashboard de Clima

Una aplicación web que muestra el clima actual y el pronóstico de 5 días para cualquier ciudad del mundo.


## Características principales

- Consulta el clima actual de cualquier ciudad.
- Pronóstico del tiempo para los próximos 5 días.
- Índice UV y recomendaciones.
- Búsqueda por geolocalización.
- Gráficos de temperatura y humedad.
- Mapa interactivo con la ubicación de la ciudad.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

### Requisitos previos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Una clave de API de [OpenWeatherMap](https://openweathermap.org/api)

### Pasos

1. Clona el repositorio:
   ```bash
   git clone https://github.com/RicardoHC28/dashboard-clima.git
Instala las dependencias:


cd dashboard-clima
npm install
Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto.

Agrega tu clave de API de OpenWeatherMap:

env

OPENWEATHER_API_KEY=tu_clave_aquí
Inicia el servidor backend:



cd backend
npm start
Inicia la aplicación frontend:


cd frontend
npm start
Abre tu navegador y visita http://localhost:3000 para ver la aplicación en funcionamiento.

Uso
Buscar una ciudad: Ingresa el nombre de una ciudad en el campo de búsqueda y haz clic en "Consultar".

Usar geolocalización: Haz clic en "Usar mi ubicación" para obtener el clima de tu ubicación actual.

Explorar pronósticos: Navega por el pronóstico de 5 días y el pronóstico horario.

Ver detalles adicionales: Consulta el índice UV, la sensación térmica, la visibilidad y más.

Tecnologías utilizadas
Frontend:

React

Recharts (gráficos)

Leaflet (mapas interactivos)

Backend:

Node.js

Express

API:

OpenWeatherMap (datos climáticos)

Estructura del proyecto

dashboard-clima/
├── frontend/               # Código del frontend (React)
│   ├── public/             # Archivos estáticos
│   ├── src/                # Código fuente de la aplicación
│   └── package.json        # Dependencias del frontend
├── backend/                # Código del backend (Node.js/Express)
│   ├── server.js           # Servidor principal
│   └── package.json        # Dependencias del backend
├── .env                    # Variables de entorno
├── .gitignore              # Archivos ignorados por Git
├── README.md               # Documentación del proyecto
└── package.json            # Dependencias globales (opcional)
Contribución
¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tu nueva funcionalidad:


git checkout -b nombre-de-tu-rama
Realiza tus cambios y haz commit:


git commit -m "Agrega nueva funcionalidad"
Sube tus cambios:


git push origin nombre-de-tu-rama
Abre un Pull Request en GitHub.

Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Créditos
Datos climáticos: OpenWeatherMap

Iconos: Font Awesome

Mapas interactivos: Leaflet

Contacto
Si tienes alguna pregunta, sugerencia o comentario, no dudes en contactarme:

Nombre: Ricardo Huaman cardenas

Correo: ricardohuamahc28@gmail.com

GitHub: RicardoHC28

C



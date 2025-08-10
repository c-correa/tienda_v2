API en NestJS 🚀
Este es el README para la API del proyecto. Contiene las instrucciones necesarias para levantar el entorno de desarrollo localmente.

✅ Requisitos Previos
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

Node.js: Se recomienda una versión LTS reciente (ej: 18.x o 20.x). Puedes descargarlo desde nodejs.org.

NPM: Generalmente se instala automáticamente con Node.js.

NestJS CLI (Opcional, pero recomendado): Para tener acceso a los comandos de Nest de forma global.

Bash

npm i -g @nestjs/cli
⚙️ Instalación
Sigue estos pasos para configurar el proyecto en tu máquina local.

Clona el repositorio (si aún no lo has hecho):

Bash

npm install
ධ Ejecución de la Aplicación
Para correr la API en tu entorno de desarrollo, utilizamos un script específico que facilita el trabajo.

Modo de Desarrollo (con auto-recarga)
Este es el modo que usarás la mayor parte del tiempo mientras desarrollas. Utiliza el siguiente comando en tu terminal:

Bash

npm run start:dev
¿Qué hace este comando?
Este comando ejecuta el script "start:dev" definido en tu archivo package.json.

"start:dev": "nest start --watch"

nest start: Es el comando principal del CLI de NestJS para compilar y ejecutar el proyecto.

--watch: ¡Esta es la parte más útil! Activa el "watch mode". NestJS observará todos los archivos de tu proyecto. Cuando guardes un cambio en cualquier archivo (.ts, .json, etc.), la API se recompilará y reiniciará automáticamente. Esto te permite ver tus cambios reflejados al instante sin tener que detener y volver a iniciar el servidor manualmente.

Una vez ejecutado, deberías ver un mensaje en la consola indicando que la aplicación se está ejecutando, normalmente en el puerto 3001.


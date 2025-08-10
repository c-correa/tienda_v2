Instalación de PostgreSQL en Windows
Esta guía te proporcionará los pasos necesarios para descargar, instalar y verificar PostgreSQL en un entorno de Windows local.

🐘 Paso 1: Descargar el Instalador
La forma más sencilla de instalar PostgreSQL en Windows es utilizando el instalador interactivo, que incluye PostgreSQL y herramientas adicionales.

Ve a la página oficial de descargas: PostgreSQL Windows Installers

Haz clic en el enlace que dice "Download the installer". Serás redirigido a la página de descargas de EDB.

Selecciona la versión de PostgreSQL que desees (generalmente, la más reciente es la mejor opción) y asegúrate de elegir "Windows x64" como tu sistema operativo.

Descarga el archivo .exe.

⚙️ Paso 2: Ejecutar el Asistente de Instalación
Una vez descargado el archivo, ejecútalo como administrador para iniciar el asistente de instalación.

Bienvenida: Haz clic en Next.

Directorio de Instalación: Puedes aceptar la ruta por defecto (C:\Program Files\PostgreSQL\<version>) o elegir una diferente. Haz clic en Next.

Selección de Componentes: Es crucial seleccionar los componentes que necesitas. Se recomienda marcar:

PostgreSQL Server: El servidor de la base de datos.

pgAdmin 4: La interfaz gráfica para administrar tus bases de datos.

Command Line Tools: Para usar herramientas como psql desde la terminal.

Puedes desmarcar Stack Builder si no planeas instalar componentes adicionales por ahora.

Directorio de Datos: Acepta la ubicación por defecto donde se guardarán los datos de tus bases de datos.

Contraseña del Superusuario: ¡Paso muy importante! Deberás establecer una contraseña para el usuario postgres. Este es el administrador principal de la base de datos. Anota y guarda bien esta contraseña.

Puerto: El puerto por defecto es 5432. A menos que otro servicio lo esté utilizando, déjalo como está.

Configuración Regional (Locale): Deja la opción por defecto ([Default locale]) para que use la configuración de tu sistema operativo.

Resumen y Comienzo de la Instalación: El asistente te mostrará un resumen. Haz clic en Next para iniciar la instalación.

✅ Paso 3: Verificar la Instalación
Una vez finalizada la instalación, es importante comprobar que todo funciona correctamente.

Verificación con pgAdmin 4 (Interfaz Gráfica)
Busca pgAdmin 4 en el menú de inicio de Windows y ábrelo.

La primera vez que se ejecute, te pedirá la contraseña del superusuario (postgres) que creaste durante la instalación para conectarte al servidor local.

Si puedes ver el panel de control y en el navegador de la izquierda aparece tu servidor, ¡la instalación fue un éxito!

!(https://www.pgadmin.org/static/img/screenshots/pgadmin4_dashboard.png)

Verificación con SQL Shell (psql) (Línea de Comandos)
psql es el cliente de terminal para PostgreSQL. Es una herramienta poderosa y es bueno saber cómo usarla.

Busca SQL Shell (psql) en tu menú de inicio y ejecútalo.

Se abrirá una terminal y te pedirá los detalles de la conexión. Puedes presionar Enter para aceptar los valores por defecto para:

Server [localhost]: Enter

Database [postgres]: Enter

Port [5432]: Enter

Username [postgres]: Enter

Password for user postgres: Escribe la contraseña que definiste durante la instalación y presiona Enter.

Si la conexión es exitosa, verás el prompt cambiar a postgres=#.

Ahora puedes ejecutar comandos SQL. Prueba con el siguiente para listar todas las bases de datos:


# Documentación del proyecto de visualización de criptomonedas 📊

## Introducción 🚀

El objetivo de este proyecto es acceder a información de las 300 criptomonedas con mayor market cap y volumen diario utilizando las API de CoinGecko y CoinMarketCap, y visualizar esta información en gráficos de barra, coordenadas paralelas y mapa de arboles mediante la librería Nivo para JavaScript. Además, se ha creado un ranking unificador y se lo visualiza mediante un gráfico de torta. Este proyecto ha requerido el aprendizaje de nuevas tecnologías, incluyendo la librería Nivo y las APIs de CoinGecko y CoinMarketCap.

En esta documentación se econtrarán instrucciones detalladas para instalar y ejecutar el proyecto, así como información sobre las características principales y cómo utilizarlas. 

## Requisitos 📋

### Tecnologias 💻

El proyecto se desarrolló con TypeScript y [Next.js](https://nextjs.org), y utiliza una variedad de tecnologías y herramientas para lograr sus objetivos. Entre ellas, se encuentran:

- [React](https://react.dev/): una biblioteca de JavaScript para construir interfaces de usuario.
- [Tailwind CSS](https://tailwindcss.com): un framework CSS para diseño de interfaces.
- [DaisyUI](https://daisyui.com/): una librería de componentes para Tailwind.
- [tRPC](https://trpc.io): una biblioteca de comunicación entre cliente y servidor.
- [Nivo](https://nivo.rocks/): una librería de gráficos para JavaScript.
- CoinGecko API: una API para acceder a información sobre criptomonedas.
- CoinMarketCap API: una API para acceder a información sobre criptomonedas.

Además, el proyecto se deployó en la plataforma de [Vercel](https://vercel.com/), lo que permite una fácil puesta en producción y escalabilidad.

### Instalación 👨‍💻

Instalación
Para instalar el proyecto, siga los siguientes pasos:

1. Clonar el repositorio del proyecto en su máquina local mediante el comando ```git clone https://github.com/jgcrosta/crypto-ranking.git.```
2. Ejecutar el comando `pnpm install` en la raíz del proyecto para instalar todas las dependencias.
3. Configurar las variables de entorno para la clave de la API de CoinMarketCap. Para ello, cree un archivo .env en la raíz del proyecto y agregue su clave privada.
4. Ejecutar el comando `pnpm dev` en la raíz del proyecto para iniciar la aplicación.

## Funcionalidades 🛠️

El proyecto cuenta con las siguientes funcionalidades:

- Acceso a información de las 300 criptomonedas con mayor market cap a través de las APIs de CoinGecko y CoinMarketCap.
- Visualización de información mediante gráficos de barra, coordenadas paralelas y mapa de arboles, implementados con la librería Nivo para JavaScript.
- Cálculo de un ranking unificador que se muestra mediante un gráfico de torta.
- Filtro de visualización por cantidad de criptomonedas (10, 50, 100 o 300).
- Selección de fuente de información (CoinGecko, CoinMarketCap o ranking unificador).
- Selección de tipo de gráfico (gráfico de barra, coordenadas paralelas y mapa de arboles).

## Conclusión 🔍

Este proyecto ha permitido desarrollar una aplicación web que provee información actualizada sobre las criptomonedas de mayor capitalización de mercado. Para ello, se han utilizado las tecnologías React, TypeScript, Tailwind, DaisyUI, Next.js, tRPC, Nivo y las APIs de CoinGecko y CoinMarketCap.

La aplicación ofrece diversas funcionalidades que permiten visualizar los datos obtenidos mediante gráficos de barra, coordenadas paralelas y mapa de arboles. Además, se ha desarrollado un cálculo de ranking unificador que se muestra mediante un gráfico de torta.

En resumen, este proyecto ha permitido desarrollar una aplicación web completa utilizando tecnologías modernas y relevantes, lo cual ha permitido obtener conocimientos y habilidades valiosas en el campo del desarrollo web.




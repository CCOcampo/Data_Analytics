# Predicción de Precios de Viviendas en Perth, Australia

Este proyecto tiene como objetivo evaluar diferentes modelos predictivos para estimar el precio de las viviendas ubicadas en Perth, Australia. Utilizando una base de datos que contiene información sobre diversas propiedades, se realizará un análisis exhaustivo de las variables más importantes que influyen en la valorización de las viviendas.

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Datos](#datos)
- [Variables de la Base de Datos](#variables-de-la-base-de-datos)
- [Preprocesamiento de Datos](#preprocesamiento-de-datos)
- [Modelos Utilizados](#modelos-utilizados)
- [Resultados](#resultados)
- [Conclusión](#conclusión)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción del Proyecto

Debido al aumento de las ventas de viviendas en Perth y la falta de claridad en la valorización de muchas propiedades según sus características, este proyecto busca desarrollar un modelo predictivo que permita estimar el precio de las viviendas en esta localidad.

## Datos

La base de datos utilizada se puede encontrar en [Kaggle](https://www.kaggle.com/datasets/syuzai/perth-house-prices/data). Esta base de datos incluye diversas características de las propiedades que son relevantes para el análisis.

## Variables de la Base de Datos

- **ADDRESS**: Dirección física del inmueble.
- **SUBURB**: Lugar específico en Perth.
- **PRICE**: Precio de venta de la propiedad [AUD].
- **BEDROOMS**: Número de dormitorios.
- **BATHROOMS**: Número de baños.
- **GARAGE**: Número de garajes.
- **LAND_AREA**: Área total del terreno [m²].
- **FLOOR_AREA**: Área construida [m²].
- **BUILD_YEAR**: Año de construcción de la propiedad.
- **CBD_DIST**: Distancia desde el centro de Perth [m].
- **NEAREST_STN**: Estación de transporte público más cercana.
- **NEAREST_STN_DIST**: Distancia a la estación de transporte más cercana [m].
- **DATE_SOLD**: Fecha de venta de la propiedad.
- **POSTCODE**: Código postal del área.
- **LATITUDE**: Latitud de la ubicación de la propiedad.
- **LONGITUDE**: Longitud de la ubicación de la propiedad.
- **NEAREST_SCH**: Colegio más cercano.
- **NEAREST_SCH_DIST**: Distancia al colegio más cercano.
- **NEAREST_SCH_RANK**: Ranking del colegio más cercano.

## Preprocesamiento de Datos

El proyecto incluye un proceso de limpieza y preprocesamiento de datos, donde se manejan valores nulos, se convierten tipos de datos y se generan variables adicionales a partir de los datos disponibles.

## Modelos Utilizados

Los modelos de Machine Learning evaluados en este proyecto incluyen:

- Regresión Lineal
- Ridge
- Lasso
- Random Forest Regressor
- SVR (Support Vector Regressor)
- Decision Tree Regressor
- XGBoost Regressor
- CatBoost Regressor
- LightGBM Regressor

Después de evaluar estos modelos, **CatBoostRegressor()** fue el que obtuvo los mejores resultados, y se procederá a la optimización de sus hiperparámetros.

## Resultados

Los resultados del análisis muestran una fuerte correlación entre el precio de las viviendas y variables como el área construida, el número de baños, dormitorios y garajes. El modelo predictivo permitirá hacer estimaciones más precisas del valor de las propiedades en función de estas variables.

## Conclusión

Este proyecto demuestra cómo el uso de modelos de Machine Learning puede ayudar a estimar el precio de las viviendas en un mercado específico, lo que puede ser útil tanto para compradores como para vendedores.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio.
2. Asegúrate de tener instaladas las dependencias necesarias. Puedes usar `pip install -r requirements.txt`.
3. Ejecuta el archivo Jupyter Notebook `Perth_House_Price.ipynb` para realizar el análisis y entrenamiento del modelo.

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un **Issue** o envía un **Pull Request**.

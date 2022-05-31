# GeoDistance-API
 Uma API REST que recebe três ou mais endereços como parâmetros de entrada e retorna uma lista com todas as distâncias obtidas entre os endereços e também o par de endereços mais próximo e o par de endereços mais distantes.

# Primeiros Passos
 Execute o arquivo install.bat (windows);</br>
 Ou no terminal dentro da pasta do projeto execute o comando:
```
  npm install
```

 Depois de instalar, execute o arquivo start.bat (windows);</br>
 Ou caso prefira o commando no terminal:
```
  npm start
```

 Um console aparecerá com os seguintes outputs:
 ```
[nodemon] starting `node app.js`
 Servidor em http://127.0.0.1:4000/
 ```

 Caso queira mudar a porta ou o endereço de host é preciso configurar um arquivo <b>.env</b>;</br>
 A porta default da api é <b>4000</b> e o host é <b>127.0.0.1</b>;</br>
 O valor da API_KEY deve ser sua chave do Google Cloud <a href='https://developers.google.com/maps/documentation/geocoding/get-api-key'>Get API key</a>

 ```
PORT=4000
HOST='127.0.0.1'
API_KEY='SUA_API_KEY'
 ```

# Como usar a API
 No cliente REST da sua preferência (Insomnia ou Postman);</br>
 crie um novo <b>GET</b> request para a URL: <i>http://127.0.0.1:4000/api/distance</i>;</br>
 No paramêtro <b>BODY</b> escolha a opção <b>JSON</b> e insira os endereços dentro de um array:
 ```json
 [
	"Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200",
	"Bom Retiro, São Paulo - SP",
	"Av. Dr. Antônio Maria Laet, 100 - Tucuruvi, São Paulo - SP, 02240-000"
]
 ```
 Resultado da chamada com os valores acima:
 ```json
 [
	{
		"id": "ChIJQwb6SslZzpQR_xww3mQVRF8",
		"address": "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200, Brazil",
		"location": {
			"lat": -23.5615171,
			"lng": -46.655961
		},
		"distances": [
			{
				"id": "ChIJ44xMEm9YzpQRJZZoJCq76I0",
				"address": "Bom Retiro, São Paulo - State of São Paulo, Brazil",
				"distance": 4277.70161219328
			},
			{
				"id": "ChIJAxbLthL2zpQR8EnliIDdhbI",
				"address": "Av. Dr. Antônio Maria Laet, 100 - Vila Gustavo, São Paulo - SP, 02240-000, Brazil",
				"distance": 10250.65577543856
			}
		],
		"near": [
			{
				"id": "ChIJ44xMEm9YzpQRJZZoJCq76I0",
				"address": "Bom Retiro, São Paulo - State of São Paulo, Brazil",
				"distance": 4277.70161219328
			},
			{
				"id": "ChIJAxbLthL2zpQR8EnliIDdhbI",
				"address": "Av. Dr. Antônio Maria Laet, 100 - Vila Gustavo, São Paulo - SP, 02240-000, Brazil",
				"distance": 10250.65577543856
			}
		],
		"far": [
			{
				"id": "ChIJAxbLthL2zpQR8EnliIDdhbI",
				"address": "Av. Dr. Antônio Maria Laet, 100 - Vila Gustavo, São Paulo - SP, 02240-000, Brazil",
				"distance": 10250.65577543856
			},
			{
				"id": "ChIJ44xMEm9YzpQRJZZoJCq76I0",
				"address": "Bom Retiro, São Paulo - State of São Paulo, Brazil",
				"distance": 4277.70161219328
			}
		]
	},
	{
		"id": "ChIJ44xMEm9YzpQRJZZoJCq76I0",
		"address": "Bom Retiro, São Paulo - State of São Paulo, Brazil",
		"location": {
			"lat": -23.5256699,
			"lng": -46.64070599999999
		},
		"distances": [
			{
				"id": "ChIJQwb6SslZzpQR_xww3mQVRF8",
				"address": "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200, Brazil",
				"distance": 4277.699550778414
			},
			{
				"id": "ChIJAxbLthL2zpQR8EnliIDdhbI",
				"address": "Av. Dr. Antônio Maria Laet, 100 - Vila Gustavo, São Paulo - SP, 02240-000, Brazil",
				"distance": 6052.730060490377
			}
		],
		"near": [
			{
				"id": "ChIJQwb6SslZzpQR_xww3mQVRF8",
				"address": "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200, Brazil",
				"distance": 4277.699550778414
			},
			{
				"id": "ChIJAxbLthL2zpQR8EnliIDdhbI",
				"address": "Av. Dr. Antônio Maria Laet, 100 - Vila Gustavo, São Paulo - SP, 02240-000, Brazil",
				"distance": 6052.730060490377
			}
		],
		"far": [
			{
				"id": "ChIJAxbLthL2zpQR8EnliIDdhbI",
				"address": "Av. Dr. Antônio Maria Laet, 100 - Vila Gustavo, São Paulo - SP, 02240-000, Brazil",
				"distance": 6052.730060490377
			},
			{
				"id": "ChIJQwb6SslZzpQR_xww3mQVRF8",
				"address": "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200, Brazil",
				"distance": 4277.699550778414
			}
		]
	},
	{
		"id": "ChIJAxbLthL2zpQR8EnliIDdhbI",
		"address": "Av. Dr. Antônio Maria Laet, 100 - Vila Gustavo, São Paulo - SP, 02240-000, Brazil",
		"location": {
			"lat": -23.4808342,
			"lng": -46.6038497
		},
		"distances": [
			{
				"id": "ChIJ44xMEm9YzpQRJZZoJCq76I0",
				"address": "Bom Retiro, São Paulo - State of São Paulo, Brazil",
				"distance": 6052.422471491585
			},
			{
				"id": "ChIJQwb6SslZzpQR_xww3mQVRF8",
				"address": "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200, Brazil",
				"distance": 10250.282747873394
			}
		],
		"near": [
			{
				"id": "ChIJ44xMEm9YzpQRJZZoJCq76I0",
				"address": "Bom Retiro, São Paulo - State of São Paulo, Brazil",
				"distance": 6052.422471491585
			},
			{
				"id": "ChIJQwb6SslZzpQR_xww3mQVRF8",
				"address": "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200, Brazil",
				"distance": 10250.282747873394
			}
		],
		"far": [
			{
				"id": "ChIJQwb6SslZzpQR_xww3mQVRF8",
				"address": "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200, Brazil",
				"distance": 10250.282747873394
			},
			{
				"id": "ChIJ44xMEm9YzpQRJZZoJCq76I0",
				"address": "Bom Retiro, São Paulo - State of São Paulo, Brazil",
				"distance": 6052.422471491585
			}
		]
	}
]
 ```
 # Possíveis erros
  <h4>🐞<i>Inserir três ou mais endereços.</i></h4>
 Essa API requer 3 ou mais endereços para realizar a verificação das distâncias entre os endereços.</br>
  <h4>🐞<i>The provided API key is invalid.</i></h4>
 Neste caso a chave da api que está usando não é uma chave válida para o usar o serviço de Geocoding do Google Cloud, para ativar o serviço entre no <a href='https://console.cloud.google.com/google/maps-apis/api-list'>Cloud Platform</a> selecione um projeto e adicione o <i><b>Geocoding API</b></i>
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
	"Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003",
	"Praça Mal. âncora, 1221 Centro, Rio de Janeiro RJ, 20021200",
	"Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280030",
	"Pardinho - SP, 18640-000",
	"Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200",
	"Bom Retiro, São Paulo - SP",
	"Av. Dr. Antônio Maria Laet, 100 - Tucuruvi, São Paulo - SP, 02240-000"
]
 ```

 # Possíveis erros
  <h4 style='color:#44AA00;'><i>Inserir três ou mais endereços.</i></h4>
  <pre style='tab-size: 2;'>Essa API requer 3 ou mais endereços para realizar a verificação das distâncias entre os endereços.</pre>
  <h4 style='color:#44AA00'><i>The provided API key is invalid.</i></h4>
  <pre style='tab-size: 2;'>Neste caso a chave da api que está usando não é uma chave válida para o usar o serviço de Geocoding do Google Cloud, para ativar o serviço entre no <a href='https://console.cloud.google.com/google/maps-apis/api-list'>Cloud Platform</a> selecione um projeto e adicione o <i>Geocoding API</i></pre>
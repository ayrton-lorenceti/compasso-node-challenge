<p>Essa API tem o objetivo principal de criar e consultar uma cidade. Além de criar, consultar, editar e remover um cliente.</p>

<br>
<h1>Pré-Requisitos</h1>
  <p> Antes de rodar o projeto, certifique-se de que você possui o <strong>Docker</strong> instalado na sua máquina. 

<br>
<h1>Rodar o projeto</h1>
  <p>Para rodar o projeto, é necessário realizar dois comandos no terminal do seu sistema operacional:</p>
    <ol>
      <li>
        <i>docker-compose build</i>
      </li>
      <li>
        <i>docker-compose up</i>
      </li>
    </ol>
  <p>Após rodar esses comandos, a API e o Banco de Dados estarão rodando e já será possível fazer requisições na API.</p>

<br>
<h1>Endpoints</h1>
  <p>
    <h2>City</h2>
    <p>
      <h3>POST</h3>
        <p><strong>Descrição:</strong> Insere uma nova cidade.</p>
        <p><strong>Endpoint:</strong> http://localhost:3000/city</p>
        <p><strong>Exemplo de request:</strong></p>
        <code>
          curl --location --request POST 'http://localhost:3000/city' \
          --header 'Content-Type: application/json' \
          --data-raw '{
              "name": "Chapecó",
              "uf": "SC"
          }'
        </code>
        <br><br>
        <p><strong>Exemplo de Response:</strong></p>
        <code>
          {
            "id": 1,
            "name": "Chapecó",
            "uf": "Santa Catarina"
          }
        </code>
    </p>
    <br>
    <p>
      <h3>GET</h3>
        <p><strong>Descrição:</strong> Busca uma cidade pelo nome.</p>
        <p><strong>Endpoint:</strong> http://localhost:3000/city/:name</p>
        <p><strong>Exemplo de request:</strong></p>
        <code>
          curl --location --request GET 'http://localhost:3000/city/Chapecó'
        </code>
        <br><br>
        <p>Exemplo de Response:</p>
        <code>
          {
            "id": 1,
            "name": "Chapecó",
            "uf": "Santa Catarina"
          }
        </code>
    </p>
    <br>
    <p>
      <h3>GET</h3>
        <p><strong>Descrição:</strong> Busca uma cidade pelo nome do estado + nome da cidade.</p>
        <p><strong>Endpoint:</strong> http://localhost:3000/uf/:uf/city/:name</p>
        <p><strong>Exemplo de request:</strong></p>
        <code>
          curl --location --request GET 'http://localhost:3000/uf/SC/city/Chapecó'
        </code>
        <br><br>
        <p><strong>Exemplo de Response:</strong></p>
        <code>
          {
            "id": 1,
            "name": "Chapecó",
            "uf": "Santa Catarina"
          }
        </code>
    </p>
  </p>
  
  <br>
  
  <p>
    <h2>Client</h2>
    <p>
      <h3>POST</h3>
        <p><strong>Descrição:</strong> Insere um novo cliente.</p>
        <p><strong>Endpoint:</strong> http://localhost:3000/client</p>
        <p><strong>Exemplo de request:</strong></p>
        <code>
          curl --location --request POST 'http://localhost:3000/client' \
          --header 'Content-Type: application/json' \
          --data-raw '{
              "fullName": "Ayrton",
              "age": 25,
              "birthDate": "01/10/1996",
              "sex": "Masculino",
              "cityId": 1
          }'
        </code>
        <br><br>
        <p><strong>Exemplo de Response:</strong></p>
        <code>
          {
              "age": 25,
              "birthDate": "1996-01-10T00:00:00.000Z",
              "fullName": "Ayrton",
              "sex": "Masculino",
              "city": {
                  "id": 1,
                  "name": "Chapecó",
                  "uf": "Santa Catarina"
              },
              "id": 5
          }
        </code>
    </p>
    <br>
    <p>
      <h3>GET</h3>
        <p><strong>Descrição:</strong> Busca um cliente pelo id.</p>
        <p><strong>Endpoint:</strong> http://localhost:3000/client/id/:id</p>
        <p><strong>Exemplo de request:</strong></p>
        <code>
          curl --location --request GET 'http://localhost:3000/client/id/1'
        </code>
        <br><br>
        <p><strong>Exemplo de Response:</strong></p>
        <code>
          {
              "id": 1,
              "fullName": "Ayrton",
              "sex": "Masculino",
              "birthDate": "1996-01-20",
              "age": 25,
              "city": {
                  "id": 1,
                  "name": "Palmitos",
                  "uf": "SC"
              }
          }
        </code>
    </p>
    <br>
    <p>
      <h3>PATCH</h3>
        <p><strong>Descrição:</strong> Atualiza o nome de um cliente.</p>
        <p><strong>Endpoint:</strong> http://localhost:3000/client/id/:id</p>
        <p><strong>Exemplo de request:</strong></p>
        <code>
          curl --location --request PATCH 'http://localhost:3000/client/id/1' \
          --header 'Content-Type: application/json' \
          --data-raw '{
              "fullName": "Daniel"
          }'
        </code>
        <br><br>
        <p>Exemplo de Response: SEM RESPONSE. Retorna status 204 quando a operação é realizada com sucesso.</p>
    </p>
    <br>
    <p>
      <h3>DELETE</h3>
        <p><strong>Descrição:</strong> Deleta um cliente.</p>
        <p><strong>Endpoint:</strong> http://localhost:3000/client/id/:id</p>
        <p><strong>Exemplo de request:</strong></p>
        <code>
          curl --location --request DELETE 'http://localhost:3000/client/id/2'
        </code>
        <br><br>
        <p><strong>Exemplo de Response:</strong> SEM RESPONSE. Retorna status 204 quando a operação é realizada com sucesso.</p>
    </p>
  </p>  

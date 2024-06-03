const { MongoClient } = require('mongodb');

async function testConnection(host, port) {
  try {
    console.log(`Testando conexão com MongoDB na porta ${port}...`);
    await MongoClient.connect(`mongodb://${host}:${port}`, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Conexão bem-sucedida com MongoDB na porta ${port}.`);
  } catch (error) {
    console.error(`Falha ao conectar ao MongoDB na porta ${port}:`, error);
  }
}

// Substitua 'localhost' pelo endereço IP ou nome do host onde seus containers MongoDB estão rodando
const hosts = ['localhost', 'localhost', 'localhost'];

hosts.forEach((host, index) => {
  testConnection(host, 27017 + index); // Ajuste o índice conforme necessário para corresponder às portas corretas
});

console.log('Testes de conexão concluídos.');
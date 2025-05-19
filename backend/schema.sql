CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  preco DECIMAL(10, 2),
  categoria VARCHAR(100),
  descricao TEXT,
  vendedor VARCHAR(100),
  cpf VARCHAR(20),
  cidade VARCHAR(100)
);
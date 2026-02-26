# Automação de Testes E2E - Movie Search

Este projeto contém uma suíte de testes automatizados End-to-End (E2E) para o site [Movie Search Sigma](https://movie-search-sigma.vercel.app/). A automação foi desenvolvida utilizando **Cypress** com foco em manutenibilidade e relatórios profissionais.

## 🚀 Tecnologias Utilizadas

- **Cypress**: Framework principal de automação.
- **Node.js**: Ambiente de execução.
- **Page Object Model (POM)**: Padrão de projeto para organização de seletores e ações.
- **Mochawesome Reporter**: Geração de relatórios HTML detalhados.
- **Puppeteer**: Conversão de relatórios HTML para PDF.

## 📁 Estrutura do Projeto

- `cypress/e2e/`: Arquivos de especificação de testes.
- `cypress/support/pages/`: Page Objects (encapsulamento de lógica de página).
- `cypress/reports/`: Relatórios gerados (HTML, PDF e Screenshots).
- `scripts/`: Scripts auxiliares (geração de PDF).
- `package.json`: Configurações de dependências e scripts de execução.

## 🛠️ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior recomendada).
- Gerenciador de pacotes `npm`.

## ⚙️ Instalação

1. Clone o repositório ou baixe os arquivos.
2. No terminal, dentro da pasta do projeto, instale as dependências:
   ```bash
   npm install
   ```

## 🏃 Como Rodar os Testes

### 1. Execução Completa com Relatório PDF (Recomendado)
Este comando limpa resultados anteriores, executa todos os testes em modo headless e gera o relatório PDF final.
```bash
npm run test:report
```
O relatório final será salvo em: `cypress/reports/report.pdf`.

### 2. Modo Interativo (Cypress Runner)
Para ver os testes rodando no navegador e facilitar o debug:
```bash
npx cypress open
```

### 3. Modo Headless (Apenas Terminal)
Executa os testes sem abrir a interface do navegador.
```bash
npx cypress run
```

## 🛠️ CI/CD (GitHub Actions)

O projeto está configurado para rodar automaticamente no GitHub em cada `push` ou `pull request` para a branch principal.
- **Workflow**: `.github/workflows/e2e-tests.yml`
- **Artefatos**: Após a execução no GitHub, o relatório PDF é salvo automaticamente nas ações do repositório como um artefato para download.

## 📊 Relatórios e Evidências

### Relatório PDF
O projeto gera automaticamente um PDF profissional após a execução do comando `npm run test:report`.

### Screenshots em caso de Falha
Se um teste falhar, o Cypress capturará automaticamente um print da tela e o incluirá no relatório HTML/PDF, facilitando a identificação do problema. As imagens originais ficam em `cypress/reports/assets/screenshots`.

---
Desenvolvido com ❤️ por Antigravity.

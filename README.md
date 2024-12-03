# Jokenpo TS

Um simples jogo de **Jokenpo (pedra, papel e tesoura)**, construído com **React**, **TypeScript** e suporte a multiplayer via **Socket.IO**.

## 🚀 Funcionalidades

- Interface responsiva e moderna com **Chakra UI**.
- Suporte multiplayer em tempo real com **Socket.IO**.
- Testes incluídos com **Jest** e **Testing Library**.

---

## 🛠️ Tecnologias

- **React** e **TypeScript** para a interface.
- **Socket.IO** para funcionalidades multiplayer.
- **Chakra UI** para estilização.
- **Jest** e **Testing Library** para testes.

---

## 🧑‍💻 Como Executar

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/jokenpo-ts.git
   cd jokenpo-ts
   ```

2. **Instale as dependências**:

   ```bash
   yarn install
   ```

3. **Inicie o servidor e o frontend**:

   - Para iniciar o servidor:
     ```bash
     yarn start:server
     ```
   - Para iniciar o frontend:
     ```bash
     yarn start
     ```

4. **Acesse o jogo**:
   Abra o navegador e acesse: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testes

Para executar os testes:

```bash
yarn test
```

---

## 📦 Scripts Disponíveis

- `yarn start` - Inicia o frontend no ambiente de desenvolvimento.
- `yarn start:server` - Inicia o servidor multiplayer.
- `yarn build` - Compila o projeto para produção.
- `yarn test` - Executa os testes.
- `yarn eject` - Ejetar a configuração do CRA (use com cuidado).

---

## 📚 Estrutura do Projeto

```plaintext
src/
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas do jogo
├── contexts/         # Contextos globais
├── hooks/            # Hooks personalizados
├── utils/            # Funções auxiliares
```

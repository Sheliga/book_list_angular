
# 📚 BookList – Minha Biblioteca

Uma aplicação web simples, responsiva e acessível para gerenciamento de livros. Desenvolvido com Angular standalone, Bootstrap 5 e boas práticas de UX/UI, o projeto permite cadastrar, listar e remover livros com armazenamento local (localStorage).

---

## ✨ Funcionalidades

- ✅ Cadastro de livros com título, autor e ISBN
- 📄 Listagem dos livros com visual limpo e responsivo
- ❌ Remoção de livros com botão de ação clara
- 💾 Persistência local via `localStorage`
- 🔔 Alertas visuais com feedback em tempo real
- 🧑‍🦯 Acessível para leitores de tela (uso de ARIA)
- 📱 Layout mobile-first com Bootstrap 5
- 🧩 Estrutura moderna usando Angular standalone + signals

---

## 🎨 Interface

![screenshot](https://raw.githubusercontent.com/Sheliga/images/refs/heads/master/projects/book-list-angular/MinhaBiblioteca.jpg)

- Ícone no cabeçalho: `fa-book` da Font Awesome
- Título claro: **Minha Biblioteca**
- Formulário com labels e placeholders amigáveis
- Validação de campos obrigatórios
- Tabela com ícones de ação e suporte a teclado/leitores

---

## 🛠️ Tecnologias

- [Angular 20+ (standalone + zoneless)](https://angular.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome 6](https://fontawesome.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── book.model.ts         # Interface do livro
│   ├── book.service.ts       # Serviço de persistência local
│   ├── book-list/
│   │   ├── book-list.ts
│   │   ├── book-list.html
│   │   └── book-list.css
│   ├── app.ts                # Componente raiz standalone
│   ├── app.html
│   └── app.css
```

---

## 🚀 Como Rodar o Projeto

```bash
# Instale as dependências
npm install

# Rode a aplicação
ng serve

# Acesse no navegador
http://localhost:4200
```

---

## 💡 Melhorias Futuras

- [ ] Edição de livros existentes
- [ ] Filtro de busca por título ou autor
- [ ] Integração com API externa para salvar livros
- [ ] Exportação da lista em CSV ou PDF
- [ ] Autenticação de usuário

---

## 🧠 Conceitos aplicados

- Mobile-first design
- Acessibilidade com `aria-*` e `visually-hidden`
- Separação de responsabilidades (componentes + serviços)
- UX com feedback imediato e sem page reload
- Clean Code & boas práticas Angular (sem `NgModules`)

---

## 📜 Licença

Projeto livre para fins de estudo e portfólio.  
MIT License © Paulo Sheliga

---

> Desenvolvido por Paulo Sheliga

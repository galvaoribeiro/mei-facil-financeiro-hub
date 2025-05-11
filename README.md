
# MEI Simplificado

Um aplicativo web para ajudar empreendedores individuais (MEI) a gerenciar suas obrigações fiscais e administrativas.

## Sobre o Projeto

MEI Simplificado é uma plataforma que facilita a gestão de microempreendedores individuais, permitindo:

- Gerenciamento de múltiplas empresas/CNPJs
- Acompanhamento de obrigações fiscais
- Controle de declarações e guias de pagamento

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Supabase (autenticação e banco de dados)

## Configuração Local

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITÓRIO>
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```
   npm run dev
   ```

## Estrutura do Projeto

- `/src/components`: Componentes reutilizáveis
- `/src/contexts`: Contextos React, incluindo autenticação
- `/src/pages`: Páginas da aplicação
- `/src/integrations`: Integrações com serviços externos (Supabase)

## Funcionalidades

### Autenticação
O sistema utiliza autenticação via Supabase, permitindo cadastro e login de usuários.

### Gerenciamento de Empresas
- Adicionar múltiplas empresas/CNPJs
- Alternar entre diferentes empresas
- Visualizar informações específicas de cada empresa

### Dashboard
- Visão geral das obrigações fiscais
- Resumo de guias pendentes e declarações
- Notificações importantes

## Banco de Dados

O projeto utiliza Supabase como backend, com as seguintes tabelas:

- **profiles**: Armazena informações do usuário e sua empresa principal
- **companies**: Armazena empresas adicionais vinculadas a um usuário

## Contribuição

Para contribuir com o projeto:

1. Crie um fork
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

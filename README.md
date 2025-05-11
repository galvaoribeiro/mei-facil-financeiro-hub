
## 🚀 SaaS "Obrigações MEI Simplificadas"

### 1. Visão Geral

Desenvolver uma plataforma web (SaaS) voltada para MEIs e escritórios de contabilidade, com o objetivo de automatizar e simplificar o cumprimento das obrigações do MEI — como geração de guias, controle de débitos, envio de declarações e emissão de notas fiscais — eliminando a necessidade de acessar manualmente o Portal do MEI ou o Programa Gerador do MEI.

A aplicação será dividida em duas partes principais: uma **Landing Page institucional** e uma **SPA (Single Page Application)** protegida para usuários autenticados.

---

### 2. Funcionalidades Principais

1. **Crawlers Agendados**

   * Raspagem diária (madrugada) das tabelas de guias no Portal do MEI.
   * Identificação de débitos pagos e em aberto.

2. **Consulta em Tempo Real**

   * Link para baixar guias em aberto via crawler sob demanda.

3. **Dashboards Interativos**

   * Visualização de status de débitos, relatórios financeiros e histórico de pagamentos.

4. **Notificações Automáticas**

   * Envio de alertas por WhatsApp e e-mail (lotes para guias em atraso e lembretes de vencimento).

5. **Declaração Anual do MEI**

   * Geração e envio automático da declaração anual via crawler.

6. **Módulo Futuro**

   * Emissão de notas fiscais eletrônicas para MEI.

---

### 3. Tecnologias e Ferramentas

| Camada                   | Tecnologia / Ferramenta                | Observações                                   |
| ------------------------ | -------------------------------------- | --------------------------------------------- |
| **Backend**              | FastAPI                                | Python, OpenAPI, alto desempenho              |
| **Banco de Dados**       | Supabase (PostgreSQL + Auth + Storage) | Supabase para MVP, auth e storage integrados  |
| **Cache / Broker**       | Redis                                  | Cache de consultas e broker de tarefas        |
| **Scraping / Automação** | Playwright (headless) + Celery         | Controle robusto de páginas dinâmicas         |
| **Frontend SPA**         | Vite + React + TypeScript              | SPA protegida, moderna e performática         |
| **Landing Page**         | Next.js ou React + Vite separado       | Página institucional para marketing           |
| **UI & Dashboard**       | Chakra UI + Recharts                   | Componentes acessíveis e gráficos interativos |
| **Notificações**         | Twilio WhatsApp API, SendGrid          | SMS/WhatsApp e e-mail transacional            |
| **Infraestrutura**       | Docker, GitHub Actions, Vercel         | Contêineres, CI/CD e deploy rápido            |
| **Monitoramento**        | Prometheus + Grafana                   | Métricas e dashboards operacionais            |

---

### 4. Design e UX

#### 🖥️ SPA Protegida (Aplicação Interna)

* **Framework**: Vite + React + TypeScript
* **Design System**: Chakra UI
* **Gráficos**: Recharts
* **Ícones**: Lucide ou HeroIcons
* **Fonte**: Inter ou Rubik
* **Paleta de Cores**:

  * Primária: `#2B6CB0`
  * Secundária: `#38B2AC`
  * Neutros: `#F7FAFC`, `#EDF2F7`, `#2D3748`
* **UX**:

  * Menu lateral com ícones
  * Header com alertas e usuário logado
  * Skeleton loaders e Framer Motion para transições suaves

#### 🌐 Landing Page

* **Objetivo**: apresentar o produto, gerar conversões
* **Design**: moderno e limpo
* **Seções**:

  * Benefícios
  * Como funciona
  * Planos e preços
  * Depoimentos
  * CTA para cadastro ou contato

---

### 5. Fluxo de Dados

1. **Agendamento**: Celery-beat dispara tarefa de scraping às 02:00.
2. **Scraping**: Playwright faz login e coleta dados; processamento e inserção no Supabase.
3. **Armazenamento**: Supabase grava guias e status de débitos.
4. **API**: FastAPI expõe endpoints REST:

   * `GET /debitos`
   * `GET /debitos/{id}/download`
   * `POST /notificacoes/whatsapp`
5. **Front-End SPA**: React consome API e exibe dashboards e tabelas.
6. **Notificações**: Worker verifica status e envia mensagens via Twilio e SendGrid.

---

### 6. Estrutura de Pastas (Back-End)

```bash
src/
├── api/
│   ├── main.py
│   ├── routers/
│   │   ├── debitos.py
│   │   └── notificacoes.py
├── core/
│   ├── config.py
│   ├── security.py
├── services/
│   ├── scraping.py
│   └── notifications.py
├── tasks/
│   ├── celery_app.py
│   └── tasks.py
└── models/
    └── debito.py
```

---

### 7. Próximos Passos

* Configurar projeto FastAPI e Supabase.
* Implementar crawler com Playwright e agendamento com Celery.
* Criar primeiros endpoints e testes.
* Montar layout inicial em React com páginas de login e dashboard.
* Criar landing page institucional com seções e CTA.

---

*Esse prompt serve como guia de desenvolvimento para equipes de engenharia ou para gerar requerimentos em ferramentas de IA.*

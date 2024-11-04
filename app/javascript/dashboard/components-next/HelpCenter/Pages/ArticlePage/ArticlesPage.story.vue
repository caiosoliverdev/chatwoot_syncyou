<script setup>
import ArticlesPage from './ArticlesPage.vue';

const articles = [
  {
    "title": "Como obter um certificado SSL para o domínio personalizado do seu Centro de Ajuda",
    "status": "rascunho",
    "updatedAt": "há 2 dias",
    "author": "Michael",
    "category": "⚡️ Marketing",
    "views": 3400
  },
  {
    "title": "Configurando seu primeiro portal do Centro de Ajuda",
    "status": "",
    "updatedAt": "há 1 semana",
    "author": "John",
    "category": "🛠️ Desenvolvimento",
    "views": 400
  },
  {
    "title": "Melhores práticas para organizar o conteúdo do seu Centro de Ajuda",
    "status": "arquivado",
    "updatedAt": "há 3 dias",
    "author": "Fernando",
    "category": "💰 Finanças",
    "views": 400
  },
  {
    "title": "Personalizando a aparência do seu Centro de Ajuda",
    "status": "",
    "updatedAt": "há 5 dias",
    "author": "Jane",
    "category": "💰 Finanças",
    "views": 400
  },
  {
    "title": "Melhores práticas para organizar o conteúdo do seu Centro de Ajuda",
    "status": "arquivado",
    "updatedAt": "há 3 dias",
    "author": "Fernando",
    "category": "💰 Finanças",
    "views": 400
  },
  {
    "title": "Personalizando a aparência do seu Centro de Ajuda",
    "status": "",
    "updatedAt": "há 5 dias",
    "author": "Jane",
    "category": "💰 Finanças",
    "views": 400
  },
  {
    "title": "Melhores práticas para organizar o conteúdo do seu Centro de Ajuda",
    "status": "arquivado",
    "updatedAt": "há 3 dias",
    "author": "Fernando",
    "category": "💰 Finanças",
    "views": 400
  }
]
  ;
</script>

<template>
  <Story title="Pages/HelpCenter/ArticlesPage" :layout="{ type: 'single' }">
    <Variant title="Todos Artigos">
      <div class="w-full min-h-screen bg-white dark:bg-slate-900">
        <ArticlesPage :articles="articles" />
      </div>
    </Variant>
  </Story>
</template>

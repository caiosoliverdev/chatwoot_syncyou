<script setup>
import CategoriesPage from './CategoriesPage.vue';

const categories = [
  {
    "id": "getting-started",
    "title": "🚀 Começando",
    "description": "Aprenda a usar o SyncYou de forma eficaz e aproveite ao máximo seus recursos para melhorar o suporte ao cliente e o engajamento.",
    "articlesCount": "2",
    "articles": [
      {
        "variant": "Artigo em rascunho",
        "title": "Como obter um certificado SSL para o domínio personalizado do seu Centro de Ajuda",
        "status": "rascunho",
        "updatedAt": "há 2 dias",
        "author": "Michael",
        "category": "⚡️ Marketing",
        "views": 3400
      },
      {
        "variant": "Artigo publicado",
        "title": "Configurando seu primeiro portal do Centro de Ajuda",
        "status": "",
        "updatedAt": "há 1 semana",
        "author": "John",
        "category": "🛠️ Desenvolvimento",
        "views": 400
      }
    ]
  },
  {
    "id": "marketing",
    "title": "Marketing",
    "description": "Aprenda a usar o SyncYou de forma eficaz e aproveite ao máximo seus recursos para melhorar o suporte ao cliente.",
    "articlesCount": "4",
    "articles": [
      {
        "variant": "Artigo em rascunho",
        "title": "Como obter um certificado SSL para o domínio personalizado do seu Centro de Ajuda",
        "status": "rascunho",
        "updatedAt": "há 2 dias",
        "author": "Michael",
        "category": "⚡️ Marketing",
        "views": 3400
      },
      {
        "variant": "Artigo publicado",
        "title": "Configurando seu primeiro portal do Centro de Ajuda",
        "status": "",
        "updatedAt": "há 1 semana",
        "author": "John",
        "category": "🛠️ Desenvolvimento",
        "views": 400
      },
      {
        "variant": "Artigo arquivado",
        "title": "Melhores práticas para organizar o conteúdo do seu Centro de Ajuda",
        "status": "arquivado",
        "updatedAt": "há 3 dias",
        "author": "Fernando",
        "category": "💰 Finanças",
        "views": 400
      },
      {
        "variant": "Artigo publicado",
        "title": "Personalizando a aparência do seu Centro de Ajuda",
        "status": "",
        "updatedAt": "há 5 dias",
        "author": "Jane",
        "category": "💰 Finanças",
        "views": 400
      }
    ]
  },
  {
    "id": "development",
    "title": "Desenvolvimento",
    "description": "",
    "articlesCount": "5",
    "articles": [
      {
        "variant": "Artigo em rascunho",
        "title": "Como obter um certificado SSL para o domínio personalizado do seu Centro de Ajuda",
        "status": "rascunho",
        "updatedAt": "há 2 dias",
        "author": "Michael",
        "category": "⚡️ Marketing",
        "views": 3400
      },
      {
        "variant": "Artigo publicado",
        "title": "Configurando seu primeiro portal do Centro de Ajuda",
        "status": "",
        "updatedAt": "há 1 semana",
        "author": "John",
        "category": "🛠️ Desenvolvimento",
        "views": 400
      },
      {
        "variant": "Artigo arquivado",
        "title": "Melhores práticas para organizar o conteúdo do seu Centro de Ajuda",
        "status": "arquivado",
        "updatedAt": "há 3 dias",
        "author": "Fernando",
        "category": "💰 Finanças",
        "views": 400
      },
      {
        "variant": "Artigo arquivado",
        "title": "Melhores práticas para organizar o conteúdo do seu Centro de Ajuda",
        "status": "arquivado",
        "updatedAt": "há 3 dias",
        "author": "Fernando",
        "category": "💰 Finanças",
        "views": 400
      },
      {
        "variant": "Artigo publicado",
        "title": "Personalizando a aparência do seu Centro de Ajuda",
        "status": "",
        "updatedAt": "há 5 dias",
        "author": "Jane",
        "category": "💰 Finanças",
        "views": 400
      }
    ]
  },
  {
    "id": "roadmap",
    "title": "🛣️ Roteiro",
    "description": "Aprenda a usar o SyncYou de forma eficaz e aproveite ao máximo seus recursos para melhorar o suporte ao cliente e o engajamento.",
    "articlesCount": "3",
    "articles": [
      {
        "variant": "Artigo em rascunho",
        "title": "Como obter um certificado SSL para o domínio personalizado do seu Centro de Ajuda",
        "status": "rascunho",
        "updatedAt": "há 2 dias",
        "author": "Michael",
        "category": "⚡️ Marketing",
        "views": 3400
      },
      {
        "variant": "Artigo publicado",
        "title": "Configurando seu primeiro portal do Centro de Ajuda",
        "status": "",
        "updatedAt": "há 1 semana",
        "author": "John",
        "category": "🛠️ Desenvolvimento",
        "views": 400
      },
      {
        "variant": "Artigo publicado",
        "title": "Configurando seu primeiro portal do Centro de Ajuda",
        "status": "",
        "updatedAt": "há 1 semana",
        "author": "John",
        "category": "🛠️ Desenvolvimento",
        "views": 400
      }
    ]
  },
  {
    "id": "finance",
    "title": "💰 Finanças",
    "description": "Aprenda a usar o SyncYou de forma eficaz e aproveite ao máximo seus recursos para melhorar o suporte ao cliente e o engajamento.",
    "articlesCount": "2",
    "articles": [
      {
        "variant": "Artigo em rascunho",
        "title": "Como obter um certificado SSL para o domínio personalizado do seu Centro de Ajuda",
        "status": "rascunho",
        "updatedAt": "há 2 dias",
        "author": "Michael",
        "category": "⚡️ Marketing",
        "views": 3400
      },
      {
        "variant": "Artigo publicado",
        "title": "Configurando seu primeiro portal do Centro de Ajuda",
        "status": "",
        "updatedAt": "há 1 semana",
        "author": "John",
        "category": "🛠️ Desenvolvimento",
        "views": 400
      }
    ]
  }
]
  ;
</script>

<template>
  <Story title="Pages/HelpCenter/CategoryPage" :layout="{ type: 'single' }">
    <Variant title="All Categories">
      <div class="w-full min-h-screen bg-white dark:bg-slate-900">
        <CategoriesPage :categories="categories" />
      </div>
    </Variant>
  </Story>
</template>

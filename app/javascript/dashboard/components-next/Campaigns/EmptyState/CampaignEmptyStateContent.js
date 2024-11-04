export const ONGOING_CAMPAIGN_EMPTY_STATE_CONTENT =
[
  {
    "id": 1,
    "title": "Assistência do Chatbot",
    "inbox": {
      "id": 2,
      "name": "Site PaperLayer",
      "channel_type": "Channel::WebWidget",
      "phone_number": ""
    },
    "sender": {
      "id": 1,
      "name": "Alexa Rivera"
    },
    "message": "Olá! 👋 Precisa de ajuda com os recursos do nosso chatbot? Sinta-se à vontade para perguntar!",
    "campaign_status": "ativa",
    "enabled": true,
    "campaign_type": "em andamento",
    "trigger_rules": {
      "url": "https://4tsistemas.com.br/features/chatbot/",
      "time_on_page": 10
    },
    "trigger_only_during_business_hours": true,
    "created_at": "2024-10-24T13:10:26.636Z",
    "updated_at": "2024-10-24T13:10:26.636Z"
  },
  {
    "id": 2,
    "title": "Suporte de Informações de Preços",
    "inbox": {
      "id": 2,
      "name": "Site PaperLayer",
      "channel_type": "Channel::WebWidget",
      "phone_number": ""
    },
    "sender": {
      "id": 1,
      "name": "Jamie Lee"
    },
    "message": "Olá! 👋 Alguma dúvida sobre preços? Estou aqui para ajudar!",
    "campaign_status": "ativa",
    "enabled": false,
    "campaign_type": "em andamento",
    "trigger_rules": {
      "url": "https://4tsistemas.com.br/pricings",
      "time_on_page": 10
    },
    "trigger_only_during_business_hours": false,
    "created_at": "2024-10-24T13:11:08.763Z",
    "updated_at": "2024-10-24T13:11:08.763Z"
  },
  {
    "id": 3,
    "title": "Assistência na Configuração do Produto",
    "inbox": {
      "id": 2,
      "name": "Site PaperLayer",
      "channel_type": "Channel::WebWidget",
      "phone_number": ""
    },
    "sender": {
      "id": 1,
      "name": "SyncYou"
    },
    "message": "Oi! SyncYou aqui. Precisa de ajuda para configurar? Me avise!",
    "campaign_status": "ativa",
    "enabled": false,
    "campaign_type": "em andamento",
    "trigger_rules": {
      "url": "https://{*.}?chatwoot.com/apps/account/*/settings/inboxes/new/",
      "time_on_page": 10
    },
    "trigger_only_during_business_hours": false,
    "created_at": "2024-10-24T13:11:44.285Z",
    "updated_at": "2024-10-24T13:11:44.285Z"
  },
  {
    "id": 4,
    "title": "Campanha de Assistência Geral",
    "inbox": {
      "id": 2,
      "name": "Site PaperLayer",
      "channel_type": "Channel::WebWidget",
      "phone_number": ""
    },
    "sender": {
      "id": 1,
      "name": "Chris Barlow"
    },
    "message": "Oi! 👋 Estou aqui para qualquer dúvida que você tenha. Vamos conversar!",
    "campaign_status": "ativa",
    "enabled": true,
    "campaign_type": "em andamento",
    "trigger_rules": {
      "url": "https://siv.com",
      "time_on_page": 200
    },
    "trigger_only_during_business_hours": false,
    "created_at": "2024-10-29T19:54:33.741Z",
    "updated_at": "2024-10-29T19:56:26.296Z"
  }
]
;

export const ONE_OFF_CAMPAIGN_EMPTY_STATE_CONTENT = 
[
  {
    "id": 1,
    "title": "Solicitação de Feedback do Cliente",
    "inbox": {
      "id": 6,
      "name": "PaperLayer Mobile",
      "channel_type": "Channel::Sms",
      "phone_number": "+29818373149903",
      "provider": "padrão"
    },
    "message": "Olá! Está gostando do nosso produto? Compartilhe seu feedback no G2 e ganhe um cupom de $25 da Amazon: https://chwt.app/g2-review",
    "campaign_status": "ativa",
    "enabled": true,
    "campaign_type": "pontual",
    "scheduled_at": 1729775588,
    "audience": [
      { "id": 4, "type": "Rótulo" },
      { "id": 5, "type": "Rótulo" },
      { "id": 6, "type": "Rótulo" }
    ],
    "trigger_rules": {},
    "trigger_only_during_business_hours": false,
    "created_at": "2024-10-24T13:13:08.496Z",
    "updated_at": "2024-10-24T13:15:38.698Z"
  },
  {
    "id": 2,
    "title": "Boas-vindas ao Novo Cliente",
    "inbox": {
      "id": 6,
      "name": "PaperLayer Mobile",
      "channel_type": "Channel::Sms",
      "phone_number": "+29818373149903",
      "provider": "padrão"
    },
    "message": "Bem-vindo a bordo! 🎉 Deixe-nos saber se você tiver alguma dúvida.",
    "campaign_status": "concluída",
    "enabled": true,
    "campaign_type": "pontual",
    "scheduled_at": 1729732500,
    "audience": [
      { "id": 1, "type": "Rótulo" },
      { "id": 6, "type": "Rótulo" },
      { "id": 5, "type": "Rótulo" },
      { "id": 2, "type": "Rótulo" },
      { "id": 4, "type": "Rótulo" }
    ],
    "trigger_rules": {},
    "trigger_only_during_business_hours": false,
    "created_at": "2024-10-24T13:14:00.168Z",
    "updated_at": "2024-10-24T13:15:38.707Z"
  },
  {
    "id": 3,
    "title": "Boas-vindas ao Novo Negócio",
    "inbox": {
      "id": 6,
      "name": "PaperLayer Mobile",
      "channel_type": "Channel::Sms",
      "phone_number": "+29818373149903",
      "provider": "padrão"
    },
    "message": "Olá! Estamos animados por ter seu negócio conosco!",
    "campaign_status": "ativa",
    "enabled": true,
    "campaign_type": "pontual",
    "scheduled_at": 1730368440,
    "audience": [
      { "id": 1, "type": "Rótulo" },
      { "id": 3, "type": "Rótulo" },
      { "id": 6, "type": "Rótulo" },
      { "id": 4, "type": "Rótulo" },
      { "id": 2, "type": "Rótulo" },
      { "id": 5, "type": "Rótulo" }
    ],
    "trigger_rules": {},
    "trigger_only_during_business_hours": false,
    "created_at": "2024-10-30T07:54:49.915Z",
    "updated_at": "2024-10-30T07:54:49.915Z"
  },
  {
    "id": 4,
    "title": "Integração de Novos Membros",
    "inbox": {
      "id": 6,
      "name": "PaperLayer Mobile",
      "channel_type": "Channel::Sms",
      "phone_number": "+29818373149903",
      "provider": "padrão"
    },
    "message": "Bem-vindo à equipe! Entre em contato se tiver perguntas.",
    "campaign_status": "concluída",
    "enabled": true,
    "campaign_type": "pontual",
    "scheduled_at": 1730304840,
    "audience": [
      { "id": 1, "type": "Rótulo" },
      { "id": 3, "type": "Rótulo" },
      { "id": 6, "type": "Rótulo" }
    ],
    "trigger_rules": {},
    "trigger_only_during_business_hours": false,
    "created_at": "2024-10-29T16:14:10.374Z",
    "updated_at": "2024-10-30T16:15:03.157Z"
  }
]
;

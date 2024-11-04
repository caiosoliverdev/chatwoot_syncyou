export const DEFAULT_MESSAGE_CREATED_CONDITION = [
  {
    attribute_key: 'message_type',
    filter_operator: 'equal_to',
    values: '',
    query_operator: 'and',
    custom_attribute_type: '',
  },
];

export const DEFAULT_CONVERSATION_OPENED_CONDITION = [
  {
    attribute_key: 'browser_language',
    filter_operator: 'equal_to',
    values: '',
    query_operator: 'and',
    custom_attribute_type: '',
  },
];

export const DEFAULT_OTHER_CONDITION = [
  {
    attribute_key: 'status',
    filter_operator: 'equal_to',
    values: '',
    query_operator: 'and',
    custom_attribute_type: '',
  },
];

export const DEFAULT_ACTIONS = [
  {
    action_name: 'assign_agent',
    action_params: [],
  },
];

export const MESSAGE_CONDITION_VALUES = [
  {
    id: 'incoming',
    name: 'Mensagem recebida',
  },
  {
    id: 'outgoing',
    name: 'Mensagem de saída',
  },
];

export const PRIORITY_CONDITION_VALUES = [
  {
    id: 'nil',
    name: 'Nenhum',
  },
  {
    id: 'low',
    name: 'Baixo',
  },
  {
    id: 'medium',
    name: 'Médio',
  },
  {
    id: 'high',
    name: 'Alto',
  },
  {
    id: 'urgent',
    name: 'Urgente',
  },
];

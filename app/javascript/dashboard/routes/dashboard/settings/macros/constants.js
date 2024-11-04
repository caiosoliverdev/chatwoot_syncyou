export const MACRO_ACTION_TYPES = [
  {
    key: 'assign_team',
    label: 'Atribuir uma equipe',
    inputType: 'search_select',
  },
  {
    key: 'assign_agent',
    label: 'Atribuir um agente',
    inputType: 'search_select',
  },
  {
    key: 'add_label',
    label: 'Adicionar um rótulo',
    inputType: 'multi_select',
  },
  {
    key: 'remove_label',
    label: 'Remover um rótulo',
    inputType: 'multi_select',
  },
  {
    key: 'remove_assigned_team',
    label: 'Remover equipe atribuída',
    inputType: null,
  },
  {
    key: 'send_email_transcript',
    label: 'Enviar uma transcrição por e-mail',
    inputType: 'email',
  },
  {
    key: 'mute_conversation',
    label: 'Conversa silenciosa',
    inputType: null,
  },
  {
    key: 'snooze_conversation',
    label: 'Soneca conversa',
    inputType: null,
  },
  {
    key: 'resolve_conversation',
    label: 'Resolver conversa',
    inputType: null,
  },
  {
    key: 'send_attachment',
    label: 'Enviar anexo',
    inputType: 'attachment',
  },
  {
    key: 'send_message',
    label: 'Enviar uma mensagem',
    inputType: 'textarea',
  },
  {
    key: 'add_private_note',
    label: 'Adicionar uma nota privada',
    inputType: 'textarea',
  },
  {
    key: 'change_priority',
    label: 'Alterar prioridade',
    inputType: 'search_select',
  },
];

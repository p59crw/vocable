export enum Regex {
  WORD_STRUCTURE_RULE = '([(][A-z|a-z|0-9]{1,}[)]|[A-z|a-z|0-9]{1,})',
  TRANSCRIPTION_RULE = '(\\/{0,1}_{0,1}[A-Za-z0-9]{0,}<{1}[A-Za-z0-9]{1,2}>{1}[A-Za-z0-9]{0,}_{0,1}\\/{0,1}):([A-Za-z0-9]{1,2}|\\*){1};$'
}

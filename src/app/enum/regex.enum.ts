export enum Regex {
  WORD_STRUCTURE_RULE = '([(][A-z|a-z|0-9]{1,}[)]|[A-z|a-z|0-9]{1,})',
  TRANSCRIPTION_RULE = '(\/?\w?<\w{1,2}>\w?\/?:(\w{1,2}|\*){1});'
}

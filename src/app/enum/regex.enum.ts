export enum Regex {
  WORD_STRUCTURE_RULE = '([(][A-z|a-z][)]|[A-z|a-z])',
  TRANSCRIPTION_RULE = '([_?<?A-Za-z>?]){1,}:([A-Z{1}|a-z?]){1,2}'
}

export enum Regex {
  WORD_STRUCTURE_RULE = '([(][A-z|a-z|0-9]{1,}[)]|[A-z|a-z|0-9]{1,})',
  TRANSCRIPTION_RULE = '(?<=^|;)(\\/?_?[a-zA-Z0-9]*<(?:[a-zA-Z]|C[uv]?)>[a-zA-Z0-9]*_?\\/?):([a-zA-Z0-9]+|\\*)(?=;|$)'
}

// ^(?:(^|\\s*;\\s*)(?:\\/_|_)?[A-Za-z]*<[A-Za-z|C[uv]?]+>[A-Za-z]*_?\/?:(?:[A-Za-z0-9]+|\*)(?=;))+;$

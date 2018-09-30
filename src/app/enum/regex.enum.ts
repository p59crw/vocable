export enum Regex {
  WORD_STRUCTURE_RULE = '([(][A-Z|a-z|0-9|@|!|$|&]{1,}[)]|[A-Z|a-z|0-9|@|!|$|&]{1,})',
  TRANSCRIPTION_RULE = '(?<=^|;)(\\/?_?[a-zA-Z0-9]*<(?:[a-zA-Z]|C[uv]?|K[g]|L[g]|Z[g]|X[g]|V[n])>[a-zA-Z0-9]*_?\\/?):([a-zA-Z0-9]+|\\*)(?=;|$)',
  NUMERIC = '^[0-9]+$'
}

# vocable
Angular-based word generator with conlangers in mind.

### Use
Vocable allows conlangers prepare lexicons based on the sound structure of their constructed language. An understanding of the International Phonetic Alphabet is required, but presents a small barrier to entry.

Upon selecting a set of sounds (consonants and vowels) for the language, the user can then save their sound inventory to JSON for future reuse or load an existing saved inventory. The inventory can be locked so that accidental changes do not take hold while working with the app.

Next the user must specify a word structure in a shorthand-notation. Use V for vowels and C for consonants. Sorthand placed in parentheses () are considered optional by the parser. If you wish to specify certain sounds or sound clusters, they can also be placed in curly brackets {}.

For example, a word structure of VC will produce only two-symbol permutations of a vowel and a consonant in the specified order such as "ip" or "ak". A structure of {st}(V)C will produce permutations of three or four symbols, always beginning with st, such as "stak" or "str".

The word structure forms a base word or a gloss, an original form the word takes before further phonetic changes are made during speech. these glosses will be output in forward slashes //.

Finally, the user can specify phonetic rules. These are applied to any glosses which meet the criteria. For example, a rule such as "-C: Cvoiced => Cunvoiced" means that when a consonant appears in word final position, if its gloss form is voiced, it becomes unvoiced. Phonetic transcriptions are output in square brackets []. So, for example, /ag/ would become [ak].

Once a user inputs all sounds and rules and presses submit, the app will output a list of possible words based on the word structure and rules applied. The user will then be able to save their word list to a text format.

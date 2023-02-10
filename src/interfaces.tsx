export interface IWord{
  word:string;
  phonetic:string;
  meanings:Meaning[];
  phonetics:Phonetic[]
}

export interface Meaning{
  partOfSpeech:string,
  definitions:Definition[],
}

export interface Definition{
  definition:string
}

export interface Phonetic{
  audio:string
}

export function getSentence(): string {

const verbs =
[
    ['go to', 'goes to', 'going to', 'went to', 'gone to'],
    ['look at', 'looks at', 'looking at', 'looked at', 'looked at'],
    ['choose', 'chooses', 'choosing', 'chose', 'chosen']
];
const tenses =
[
    { name: 'Present', singular: 1, plural: 0, format: '%subject %verb %complement' },
    { name: 'Past', singular: 3, plural: 3, format: '%subject %verb %complement' },
    { name: 'Present Continues', singular: 2, plural: 2, format: '%subject %be %verb %complement' }
];
const subjects =
[
    { name: 'I', be: 'am', singular: 0 },
    { name: 'You', be: 'are', singular: 0 },
    { name: 'He', be: 'is', singular: 1 }
];
const complementsForVerbs =
[
    ['cinema', 'Egypt', 'home', 'concert'],
    ['for a map', 'them', 'the stars', 'the lake'],
    ['a book for reading', 'a dvd for tonight']
];

const index = Math.floor(verbs.length * Math.random());
const tense = random(tenses);
const subject = random(subjects);
const verb = verbs[index];
const complement = complementsForVerbs[index];
let str = tense.format;
str = str.replace('%subject', subject.name).replace('%be', subject.be);
str = str.replace('%verb', verb[subject.singular ? tense.singular : tense.plural]);
str = str.replace('%complement', random(complement));
return str;
}

// for (var i = 0; i < 100; i++)document.write(generate() + "<br>");



function random(obj) {
    return obj[Math.floor(Math.random() * obj.length)];
}

//1
const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
const tagCounts = {};

for (const tag of tags) {
    if (tag in tagCounts) {
        tagCounts[tag] += 1;
    } else {
        tagCounts[tag] = 1;
    }
}
const sortTagCounts = Object.entries(tagCounts)
sortTagCounts.sort((a, b) => b[1] - a[1])
const sortTagObject = Object.fromEntries(sortTagCounts);
console.log(sortTagObject)
//2
function ShortName(surname,Name, patronymic) {
    const surnameInitial = surname[0] + '.'
    const firstInitial = Name[0] + '.'
    const patronymicInitial = patronymic[0] + '.'


    return `${surnameInitial}${firstInitial}${patronymicInitial}`
}

const shortForm =ShortName("Almanbetova", "Aliya", "Almanbetovna");
console.log(shortForm)
//4
const users = [
    { name: 'Алия', birthdate: '12.04.02' },
    { name: 'Айдана', birthdate: '02.02.06' },
    { name: 'Алтынай', birthdate: '20.05.97'},
    { name: 'Адилет', birthdate: '19.12.05' },
    { name: 'Аяна', birthdate: '07.08.99'}
]
users.forEach(user => {const { name, birthdate } = user;console.log(`Пользователь ${name} родился ${birthdate}`)})

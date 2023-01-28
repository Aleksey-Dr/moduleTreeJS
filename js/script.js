"use strict";

console.log('Module tree. Class five. Objects');

const playlist = {
    name: 'My super playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
    trackCount: 4,
};

// access to an object property thru a point
console.log(playlist);
console.log(playlist.name);
console.log(playlist.rating);
console.log(playlist.tracks);
console.log(playlist.trackCount);

const propertyName = 'tracks';

console.log(playlist.propertyName); // undefined
console.log(playlist.rating); // 5
console.log(playlist['rating']); // 5
console.log(playlist[propertyName]); // ['track-1', 'track-2', 'track-3', 'track-4']

// short entry
const username = 'Aleksey';
const email = 'email@gmail.com';

const signupData = {
    username,
    email,
};

console.log(signupData);

// computed properties
// <input name="color" value="tomato">

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
    [inputName]: inputValue,
};

console.log(colorPickerData);

// add properties to an object
playlist.trackTime = 5.22;

console.log(playlist);

// change property
playlist.tracks.push('Track-5');
playlist.rating = 8;
console.log(playlist);

// object equality
console.log({ a: 1 } === { a: 1 }); // false
console.log([] === []); // false

const objA = { a: 1, b: 2, c: 3, };
const objB = objA;

console.log(objA === objB); // true

objA.c = 100;

console.log(objB);

// "Secret" Array this is an object
const arrA = [1, 2, 3];

arrA.hello = 4;

console.log(arrA);

// "Secret" Function this is an object
const fnA = function () {
    console.log('hello');
};

fnA.hello = 5;

console.dir(fnA);
console.dir(fnA.hello);

// Methods of an object
playlist.getName = function () {
    console.log('Method');
};

console.log(playlist);

playlist.getName();

const car = {
    manufacturer: 'nyundai',
    model: 'Accent',
    color: 'grey',
    yearManufacture: 2012,
    priceOwner: 10000,
    delivery: 600,
    // option 1
    price: function () {
        const margin = this.priceOwner * 0.1;
        const price = this.priceOwner + margin + this.delivery;
        console.log(`Price: ${price} $`);
        return price;
    },
    // option 2
    avalable() {
        if (this.price(this.priceOwner, this.delivery) === 0) {
            console.log('Sold!');
        } else {
            console.log('Avalable!');
        }
    },
    changeColor(newColor) {
        this.color = newColor;
    },
};

console.log(car);
car.price();
car.avalable();
car.changeColor('silver');
console.log(car);

car.tools = ['jack', 'spaners'];
console.log(car);

car.addTools = function (tool) {
    this.tools.push(tool);
};

car.addTools('tow rope');

car.countTools = function () {
    return this.tools.length;
};

console.log(car);
console.log(car.countTools());

// for...in, Objeckt.keys | values | entries

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

let totalFeedback = 0;

const keys = Object.keys(feedback);
console.log(keys);

for (const key of keys) {
    console.log(key);
    console.log(feedback.key); // wron!
    console.log(feedback[key]); // right!

    totalFeedback += feedback[key];
}

console.log('totalFeedback: ', totalFeedback);

const values = Object.values(feedback);

console.log(values);

// Array objects
const friends = [
    { name: 'Aleksey', online: false },
    { name: 'Andrey', online: true },
    { name: 'Ivan', online: true },
    { name: 'Timur', online: false },
];

console.table(friends);

for (const friend of friends) {
    console.log(friend);

    friend.newprop = 555;
}

console.table(friends);

// Task 1
console.log('Task 1');

const findFriendByName = function (allFriends, name) {
    console.log(allFriends.includes(name)); // wron!
    for (const friend of allFriends) {
        console.log(friend);
        console.log(Object.values(friend).includes(name));
        if (Object.values(friend).includes(name)) {
            return 'Found!';
        }
    }
    return 'Not found!'
};

console.log(findFriendByName(friends, 'Timur'));
console.log(findFriendByName(friends, 'Artiom'));

// Task 2
console.log('Task 2');

const getAllNames = function (allFriends) {
    const names = [];
    for (const friend of allFriends) {
        console.log(friend.name);
        names.push(friend.name);
    }
    return console.log(names);
};

getAllNames(friends);

// Task 3
console.log('Task 3');

const getOnlineFriends = function (allFriends) {

    for (const friend of allFriends) {

        if (friend.online === true) {
            console.log(friend.name);
        }
    }
};

getOnlineFriends(friends);

// Task 3.1
console.log('Task 3.1');

const getOnlineFriendsOne = function (allFriends) {
    const onlineFriends = [];

    for (const friend of allFriends) {
        
        if (friend.online) {
            onlineFriends.push(friend.name);
        }
    }

    return console.log(onlineFriends);
};

getOnlineFriendsOne(friends);

// Task 3.2
console.log('Task 3.2');

const getOnlineFriendsTwo = function (allFriends) {
    const onlineFriends = [];

    for (const friend of allFriends) {

        if (friend.online === true) { // "=== true" - this is an excessive
            onlineFriends.push(friend);
        }
    }

    return onlineFriends;
};

console.log(getOnlineFriendsTwo(friends));

// Task 4
console.log('Task 4');

const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];

    for (const friend of allFriends) {

        if (!friend.online) {
            offlineFriends.push(friend);
        }
    }

    return console.log(offlineFriends);
};

getOfflineFriends(friends);

// Task 4
console.log('Task 4');

const getFriendsByOnlineStatus = function (allFriends, statusOnline) {
    const onlineFriends = [];
    const offlineFriends = [];

    for (const friend of allFriends) {

        if (friend.online) {
            onlineFriends.push(friend);
        } else {
            offlineFriends.push(friend);
        }
    }

    if (statusOnline) {
        return onlineFriends;
    }

    return offlineFriends;
};

console.log(getFriendsByOnlineStatus(friends, true));
console.log(getFriendsByOnlineStatus(friends, false));

// Task 4.1
console.log('Task 4.1');

const getFriendsByOnlineStatusOne = function (allFriends) {

    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {

        if (friend.online) {
            friendsByStatus.online.push(friend);
        } else {
            friendsByStatus.offline.push(friend);
        }
    }

    return friendsByStatus;
};

console.log(getFriendsByOnlineStatusOne(friends));

// Task 4.2
console.log('Task 4.2');

const getFriendsByOnlineStatusTwo = function (allFriends) {

    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {

        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        }

        friendsByStatus.offline.push(friend);
    }

    return friendsByStatus;
};

console.log(getFriendsByOnlineStatusTwo(friends));

// Task 4.3
console.log('Task 4.3');

const getFriendsByOnlineStatusTree = function (allFriends) {

    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {

        friendsByStatus[friend.online ? 'online' : 'offline'].push(friend);
    }

    return friendsByStatus;
};

console.log(getFriendsByOnlineStatusTree(friends));
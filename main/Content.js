    class1 = localStorage.getItem('class1')
    class2 = localStorage.getItem('class2')
    class3 = localStorage.getItem('class3')
    class4 = localStorage.getItem('class4')
    class5 = localStorage.getItem('class5')
    class6 = localStorage.getItem('class6')
    class7 = localStorage.getItem('class7')
    class8 = localStorage.getItem('class8')
    class9 = localStorage.getItem('class9')


console.log(localStorage.getItem('class1'))





let dt = new Date();

let timeRanges = [
    { startTime: '07:23:00', endTime: '08:20:00', url: class1},
    { startTime: '08:21:00', endTime: '09:04:00', url: class2},
    { startTime: '09:05:00', endTime: '09:49:00', url: class3},
    { startTime: '09:50:00', endTime: '10:31:00', url: class4},
    { startTime: '10:31:00', endTime: '11:19:00', url: class5},
    { startTime: '11:19:00', endTime: '12:00:00', url: class6},
    { startTime: '12:00:00', endTime: '12:45:00', url: class7},
    { startTime: '12:46:00', endTime: '13:29:00', url: class8},
    { startTime: '13:30:00', endTime: '14:15:00', url: class9},
    ];

let currentTime = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();

function goToClass() {
for (var i = 0; i < timeRanges.length; i++) {
    var range = timeRanges[i];
    var s = range.startTime.split(':');
    var e = range.endTime.split(':');
    
    var dt1 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(),
                       parseInt(s[0]), parseInt(s[1]), parseInt(s[2]));
    
    var dt2 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(),
                       parseInt(e[0]), parseInt(e[1]), parseInt(e[2]));
    
    if (dt >= dt1 && dt <= dt2) {
        window.location.href = range.url;
        break;
    }
}
}


 timeRanges.forEach((item, index) => { 
 item.id = index + 1
})

var classes = [
    { startTime: '07:23:00', endTime: '08:20:00'},
    { startTime: '08:21:00', endTime: '09:04:00'},
    { startTime: '09:05:00', endTime: '09:49:00'},
    { startTime: '09:50:00', endTime: '10:31:00'},
    { startTime: '10:31:00', endTime: '11:19:00'},
    { startTime: '11:19:00', endTime: '12:00:00'},
    { startTime: '12:00:00', endTime: '12:45:00'},
    { startTime: '12:46:00', endTime: '13:29:00'},
    { startTime: '13:30:00', endTime: '14:15:00'}
];

classes.forEach((item, index) => {
    item.id = index + 1;
});

document.body.onkeydown = function (event) {
    event = event || window.event;
    var keycode = event.charCode || event.keyCode;

    if (keycode === 13) {
        goToClass();
    } else if (keycode >= 49 && keycode <= 57) {
        var urlIndex = keycode - 49;
        if (urlIndex >= 0 && urlIndex < classes.length) {
            window.location.href = timeRanges[urlIndex].url;
        }
    }
};


// Print the list of time ranges and their corresponding indices
console.log(timeRanges);


const Tutorial = `
<strong class="directions">Press enter to go to the current class<br/>
Press #1-8 for the corresponding class</strong>
`

// Create element
const newEl = document.createElement('div');

// Add classes to element
newEl.classList.add('directionsCont');

// Set ID attribute on the element
newEl.setAttribute('id', 'directionsCont');

// Or set the innerHTML of the element
newEl.innerHTML = `${Tutorial}`;

// add element to DOM
document.body.appendChild(newEl);

console.log(`
copy and paste the text below into the console

localStorage.setItem("class1", "");
localStorage.setItem("class2", "");
localStorage.setItem("class3", "");
localStorage.setItem("class4", "");
localStorage.setItem("class5", "");
localStorage.setItem("class6", "");
localStorage.setItem("class7", "");
localStorage.setItem("class8", "");
localStorage.setItem("class9", "");
`);
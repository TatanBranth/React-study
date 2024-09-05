

function splitTest(word) {
    console.log(word.split(''));
    console.log(word.indexOf('h'))
    console.log(word.lastIndexOf('h'))
    console.log(word.split("").map((a)=> a.concat(a)).join('*'))
}

function timerTest() {
    console.time('temp1')
    console.log(`begin`);
    setTimeout(() =>
    {
        console.log('procesing...')
        console.timeEnd('temp1')
    }, 2000);
}

splitTest('holah');
timerTest();
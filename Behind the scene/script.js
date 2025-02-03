"use strict"; 

console.log(this);


const calAge = function(birthYear) {
    console.log(2026 - birthYear);
    // console.log(this);
    
};

calAge(2003);


const calAgeArrow = (birthYear) => {
    console.log(2026 - birthYear);
    console.log(this);
    
};

calAgeArrow();

const barkindo = {
    year: 2002,
    calAge:function() {
        console.log(this);
        console.log(2026 - this.year);   
    },

};
    barkindo.calAge();

    const haidar = {
        year: 2006,
    }
haidar.calAge = barkindo.calAge;

haidar.calAge();


const jude = {
    firstName: 'jude',
    lastName: 'Bellingham',
    age: 22,
};

const rodrigo = Object.assign({}, jude);
rodrigo.lastName = 'desilva';
console.log("jude", jude);
 console.log('Rodrigo: ', rodrigo);





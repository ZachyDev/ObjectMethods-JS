let user = {
    name: "moseti",
    age: 20,
    gender: "male",
    showInfo: (realAge) => {
        document.write(`${ this.name } ${ realAge } ${ this.gender }`);
    }
};
user.showInfo(25);
// console.log(typeof user.showInfo)
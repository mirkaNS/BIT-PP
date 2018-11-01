
function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

function WebApp(name, url, technologies, licence, stars) {

    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;


WebApp.prototype.getDate = function () {
    return this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars;
}
WebApp.prototype.reactBased = function () {
    if (this.technologies == "React") {
        return true;
    }
    return false;
}

function MobileApp(name, platforms, licence, stars) {

    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getDate = function () {
    return this.name + " " + this.platforms + " " + this.licence + " " + this.stars;
}
MobileApp.prototype.forAndroid = function () {
    if (this.platforms == "Android") {
        return true;
    }
    return false;
}


App.prototype.isCCLicence = function () {
    if (this.licence == "CC") {
        return true;
    }
    return false;
}
App.prototype.like = function () {
    this.stars += 1;
}
App.prototype.showStars = function () {
    return this.stars;
}





var web = new WebApp("ime", "nekaadresa", "It", "CC", 4);
// console.log(web);
// console.log(web.reactBased());
// console.log(web.getDate());

var mob = new MobileApp("ime", "Android", "JM", 0);
// console.log(mob);
// console.log(mob.getDate());
// console.log(mob.forAndroid());
// console.log(mob.isCCLicence());
console.log(web.isCCLicence());

console.log(mob.isCCLicence());
mob.like();
web.like();
console.log(web.showStars());
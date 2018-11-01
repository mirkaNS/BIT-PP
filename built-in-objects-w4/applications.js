function WebApp(name, url, technologies, licence, stars){
    this.name=name;
    this.url=url;
    this.technologies=technologies;
    this.licence=licence;
    this.stars=stars;
}
WebApp.prototype.getDate=function(){
    return this.name+" "+this.url+" "+this.technologies+" "+this.licence+" "+this.stars;
}
WebApp.prototype.reactBased=function(){
    if(this.technologies=="React"){
        return true;
}
return false;
}

function MobileApp(name, platforms, licence, stars){
    this.name=name;
    this.platforms=platforms;
    this.licence=licence;
    this.stars=stars;
}
MobileApp.prototype.getDate=function(){
    return this.name+" "+this.platforms+" "+this.licence+" "+this.stars;
}
MobileApp.prototype.forAndroid=function(){
    if(this.platforms=="Android"){
        return true;
    }
    return false;
}

MobileApp.prototype=Object.create(WebApp.prototype);
MobileApp.prototype.constructor=MobileApp;
WebApp.prototype.isCCLicence=function(){
    if(this.licence=="CC"){
        return true;
    }
    return false;
}

var web=new WebApp("ime","nekaadresa","It","CC","nesto");
console.log(web);
console.log(web.reactBased());
console.log(web.getDate());

var mob=new MobileApp("ime","Android","JM",0);
console.log(mob);
//console.log(mob.getDate());
//console.log(mob.forAndroid());
console.log(mob.isCCLicence());
console.log(web.isCCLicence());
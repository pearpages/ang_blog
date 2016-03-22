function Receptor(name, available){
    this.name = name;
    this.available = available; // mutable state
    this.render = function () {
        output = '<li>';
        output += this.available ?
        this.name + ' is available' :
        this.name + ' is not available';
        output += '</li>';
        return otuput;
    };
}
var me = new Receptor;
var receptors = app.getReceptors().push(me);
app.container.innerHTML = receptors.map(function(r){
    return r.render();
}).join('');

var lazyReceptors = Lazy(receptors).map(function(r){
    return r.render();
});
app.container.innerHTML = lazyReceptors.toArray().join('');

app.onUserLogin = function() {
    this.available = true;
    app.container.innerHTML = lazyReceptors.toArray().join('');
};
app.onUserLogout = function() {
    this.available = false;
    app.container.innerHTML = lazyReceptors.toArray().join('');
};
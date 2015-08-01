function Player(username) 
{
    this.username = username;
    if (this.username.length<1)
    {
        alert("Username is too short");
		window.location.href = '/index.html';
    }
    if (localStorage.getItem(username) == null)
     {
        alert("Username has not been stored");
        window.location.href = '/index.html';

    }   
    this.password = JSON.parse(localStorage[username]).password;
    this.email = JSON.parse(localStorage[username]).email;
    this.phoneNumber = JSON.parse(localStorage[username]).phoneNumber;
    this.money = JSON.parse(localStorage[username]).money ? JSON.parse(localStorage[username]).money : 1000;
    this.investments = JSON.parse(localStorage[username]).investments;
}

Player.isValidUsername = function (username) 
{
    if(localStorage[username]) {
        return true;
    } else {
        return false;
    }
};

Player.isValidPassword = function(username, password) 
{
    //now we know the username we can ask that user whether the password is right
    if(JSON.parse(localStorage[username]).password == password)
    {
        return true;
    }
    else
    {
        return false;
    }
};

Player.createNewUser = function(username, password, email, phoneNumber) {
    // Save player in datastore
    // ...
    // return new Player(username, password)
    
    var user = {
        password: password,
        email: email,
        phoneNumber: phoneNumber,
        investments: []
    };
    
    localStorage[username] = JSON.stringify(user);
};

Player.getPlayers = function() {
      return Object.keys(localStorage);
};

Player.prototype.getInvestments = function() {
    // return investments from datastore  
};

Player.prototype.getPlayerScore = function() {
    // Also add value of the players current investments here
    return this.money;
};

Player.prototype.addMoney = function(amount) {
    this.money = this.money + amount;
};

Player.prototype.save = function() {
    var user = {
        password: this.password,
        email: this.email,
        phoneNumber: this.phoneNumber,
        investments: this.investments,
        money: this.money
    };
    
    localStorage[this.username] = JSON.stringify(user);
};
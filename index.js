const Daryl = {
    healt: 400,
    damage: 20,

    stats: function(){
        console.log("-Healt = " + this.healt);
    },

    hit: function(target){
        return target.healt -= this.damage
    }
}

const Zombie = {
    healt: 180,
    damage: 18,

    stats: function(){
        console.log("-Healt = " + this.healt);
    },

    hit: function(target){
        return target.healt -= this.damage
    }
}

const Bosszombie = {
    healt: 800,
    damage: 50,

    stats: function(){
        console.log("-Healt = " + this.healt);
    },

    hit: function(target){
        return target.healt -= this.damage
    }
}

Daryl.stats();
Zombie.hit(Daryl);
Daryl.stats();
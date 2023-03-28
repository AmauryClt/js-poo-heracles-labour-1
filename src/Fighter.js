/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
    constructor(nom, force, dexteriter, life) {
        this.nom = nom;
        this.force = force;
        this.dexteriter = dexteriter;
        this.life = MAX_LIFE;
    }
    fight(defender) {
        const attack = Math.floor(Math.random() * this.force + 1);
        const mitigationAttack = Math.max(0, attack - this.dexteriter);
        const lifeRest = Math.max(this.life - mitigationAttack);
        defender.life = lifeRest;
        return (`${this.name} attaque ${defender.name} en infligeant ${mitigationAttack} point de dégâts. ${defender.name} a maintenant ${defender.life} points de vie.`);
    }
}

module.exports = Fighter
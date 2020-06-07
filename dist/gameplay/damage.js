"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Damageable = /** @class */ (function () {
    function Damageable(maxHealth, startingHealth, allowStacking) {
        this.maxHealth = maxHealth;
        if (startingHealth) {
            this.currentHealth = startingHealth;
        }
        else {
            this.currentHealth = this.maxHealth;
        }
        if (allowStacking) {
            this.allowStacking = true;
        }
        else {
            this.allowStacking = false;
        }
        this.dead = false;
    }
    Damageable.prototype.checkDead = function () {
        if (this.currentHealth <= 0) {
            this.dead = true;
            return true;
        }
        return false;
    };
    Damageable.prototype.getCurrentHealth = function () {
        return this.currentHealth;
    };
    Damageable.prototype.getMaxHealth = function () {
        return this.maxHealth;
    };
    /**
     * Damage the damageable entity
     * @param amount amount to damage the damageable
     * @returns {boolean} killsOnDamage
     */
    Damageable.prototype.damage = function (amount) {
        this.currentHealth -= amount;
        return this.checkDead();
    };
    Damageable.prototype.heal = function (amount) {
        if (this.allowStacking) {
            this.currentHealth += amount;
        }
        else if (this.currentHealth + amount > this.maxHealth) {
            this.currentHealth = this.maxHealth;
        }
        else {
            this.currentHealth += amount;
        }
    };
    return Damageable;
}());
exports.Damageable = Damageable;
//# sourceMappingURL=damage.js.map
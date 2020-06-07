export declare class Damageable {
    private maxHealth;
    private currentHealth;
    private allowStacking;
    private dead;
    constructor(maxHealth: number, startingHealth?: number, allowStacking?: boolean);
    checkDead(): boolean;
    getCurrentHealth(): number;
    getMaxHealth(): number;
    /**
     * Damage the damageable entity
     * @param amount amount to damage the damageable
     * @returns {boolean} killsOnDamage
     */
    damage(amount: number): boolean;
    heal(amount: number): void;
}

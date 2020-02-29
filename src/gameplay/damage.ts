export class Damageable {
    private maxHealth : number;
    private currentHealth : number;
    private allowStacking : boolean;
    private dead : boolean;
  
    constructor(maxHealth : number, startingHealth? : number, allowStacking? : boolean){
      this.maxHealth = maxHealth;
      if (startingHealth) {
        this.currentHealth = startingHealth;
      }
      else {
        this.currentHealth = this.maxHealth;
      }
  
      if (allowStacking){
        this.allowStacking = true;
      }
      else{
        this.allowStacking = false;
      }
  
      this.dead = false;
    }
  
    public checkDead() : boolean{
      if (this.currentHealth <= 0) {
        this.dead = true;
        return true;
      }
      return false;
    }
  
    getCurrentHealth(){
      return this.currentHealth;
    }
  
    getMaxHealth(){
      return this.maxHealth;
    }

    /**
     * Damage the damageable entity
     * @param amount amount to damage the damageable
     * @returns {boolean} killsOnDamage
     */
    damage(amount : number) : boolean {
      this.currentHealth -= amount;
      return this.checkDead();
    }
    
    heal(amount : number){
      if (this.allowStacking){
        this.currentHealth+=amount;
      }
      else if (this.currentHealth + amount > this.maxHealth){
        this.currentHealth = this.maxHealth;
      }
      else {
        this.currentHealth += amount;
      }
    }
  }
class Soldat{

    // lifeTime commence à 100, on décrément et à 0, vie = 0
    init(vie, lifeTime){
        this.vie = vie;
        this.lifeTime = lifeTime;
    }

    degat(degatSoldat){
        this.vie = this.vie - degatSoldat;
    }



}
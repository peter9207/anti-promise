

class AntiPromise {

    constructor(p){
        this.promise = p;
        this.resolveFn = null;
        this.rejectFn = null;
        this.res = null;

        this.promise.then((res)=>{
            this.res = res;
            return new Promise((accept, reject)=>{
                this.resolveFn = accept;
                this.rejectFn = reject;
            });
        });
    }

    resolve(){
        this.resolveFn(this.res);
    }

    reject(){
        this.rejectFn(this.res);
    }
}

export class InputState {
    state:'none'|'error'|'warning'|'info'|'success'='none'
    message:string=""

    constructor(state:'none'|'error'|'warning'|'info'|'success',message:string) {
        this.state = state
        this.message = message
    }
    static None():InputState{
        return new InputState('none','')
    }
    static Success(message:string=""):InputState{
        return new InputState('success',message)
    }
    static Error(message:string=""):InputState{
        return new InputState('error',message)
    }
    static Warning(message:string=""):InputState{
        return new InputState('warning',message)
    }

    isSuccess():boolean{
        return this.state === "success" || this.state === 'none' || this.state === "info"
    }
    isNone():boolean{
        return this.state === 'none'
    }
}
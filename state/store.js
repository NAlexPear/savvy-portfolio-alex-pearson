import * as State from '../state';


class Store{
    constructor(){
        this.state = Object.assign({}, State);
        this.listeners = [];
    }

    dispatch(reducer){
        this.state = reducer(this.state);

        this.listeners.forEach((listener) => listener(this.state));
    }

    addListener(listener){
        this.listeners.push(listener);
    }
}

export default Store;

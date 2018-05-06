import {action, extendObservable} from 'mobx';

export default extendObservable(this, {
    user: null,
    setUser: action((user) => {
        this.user = user;
    })
});
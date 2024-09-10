interface EventBus {
    on: (event: keyof DocumentEventMap, callback: (data: any) => void) => void
    dispatch: (event: string, data: any) => void
    remove: (event: keyof DocumentEventMap, callback: EventListenerOrEventListenerObject) => void
}

const eventBus: EventBus = {
    on(event, callback){
        document.addEventListener(event, callback)
    },
    dispatch(event, data){
        document.dispatchEvent(new CustomEvent(event, {detail: data}))
    },
    remove(event, callback){
        removeEventListener(event, callback)
    }
}
export default eventBus
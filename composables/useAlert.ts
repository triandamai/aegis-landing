const alert = reactive<{
    show: boolean,
    message: string,
    type: 'success' | 'error' | 'info' | 'warning' | 'none'
}>({
    show: false,
    message: "Ini message",
    type: 'none'
})


export function useAlert() {
    function scheduleHide(){
        setTimeout(()=>{
            alert.show = false
            alert.message = ""
        },5000)
    }
    function success(message: string) {
        if (alert.show) {
            alert.show = false
            setTimeout(() => {
                alert.show = true
                alert.message = message
                alert.type = 'success'
                scheduleHide()
            }, 500)
        } else {
            alert.show = true
            alert.message = message
            scheduleHide()
        }
    }

    function failed(message: string) {
        if (alert.show) {
            alert.show = false
            setTimeout(() => {
                alert.show = true
                alert.message = message
                alert.type = 'error'
                scheduleHide()
            }, 500)
        } else {
            alert.show = true
            alert.message = message
            scheduleHide()
        }
    }

    function info(message: string) {
        if (alert.show) {
            alert.show = false
            setTimeout(() => {
                alert.show = true
                alert.message = message
                alert.type = 'info'
                scheduleHide()
            }, 500)
        } else {
            alert.show = true
            alert.message = message
            scheduleHide()
        }
    }

    return {
        alert,
        success,
        failed,
        info
    }
}
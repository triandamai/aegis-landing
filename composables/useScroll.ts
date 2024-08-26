export const useScroll=()=>{
    const style = ref("rounded-md border border-gray-200 mx-[6vw] my-6")

    function init(){
        style.value = "rounded-md border border-gray-200 mx-[6vw] my-6"
    }
    function onScroll(e:any){
        if (e.target.scrollTop > 30) {
            style.value = "border-b border-gray-200"
        } else {
            style.value = "rounded-md border border-gray-200 mx-[6vw] my-6"
        }
    }
    return{
        style,
        init,
        onScroll
    }
}
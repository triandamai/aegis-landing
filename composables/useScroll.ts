export const useScroll=()=>{
    const style = ref("rounded-md border border-gray-200 my-6")
    const styleParent = ref("px-[4vw] sm:px-[4vw] md:px-[4vw] lg:px-[6vw] xl:px-[6vw]")

    function init(){
        // style.value = "border-b border-gray-200"
        // styleParent.value = "px-0"
        style.value = "rounded-md border border-gray-200 my-6"
        styleParent.value = "px-[4vw] sm:px-[4vw] md:px-[4vw] lg:px-[6vw] xl:px-[6vw]"
    }
    function onScroll(e:any){
        if (e.target.scrollTop > 30) {
            style.value = "border-b border-gray-200"
            styleParent.value = "px-0"
        } else {
            style.value = "rounded-md border border-gray-200 my-6"
            styleParent.value = "px-[4vw] sm:px-[4vw] md:px-[4vw] lg:px-[6vw] xl:px-[6vw]"
        }
    }
    return{
        style,
        styleParent,
        init,
        onScroll
    }
}
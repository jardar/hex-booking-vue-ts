import { ref, onMounted, onUnmounted } from 'vue'

function useDocumentScroll() {
  const y = ref<number>(window.scrollY)
  function update() {
    y.value = window.scrollY
  }
  onMounted(() => {
    window.addEventListener('scroll', update)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', update)
  })

  return { y }
}
export { useDocumentScroll }

// function useDocumentScrollThrottled(callback: any) {
//     const throttledCallback = useThrottle(callback, 250);
//     const handleDocumentScroll = () => {
//         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//         const reachedBottom = scrollTop + clientHeight >= scrollHeight - 10;
//         throttledCallback(scrollTop, scrollHeight, clientHeight, reachedBottom);
//     };
//     onMounted(() => {
//         window.addEventListener("scroll", handleDocumentScroll);
//     });
//     onUnmounted(() => {
//         window.removeEventListener("scroll", handleDocumentScroll);
//     });
// }

export const log = {
  dev: (message, obj='') => {
    if (process.env.NODE_ENV === "development"){
      if (obj!=='') {
        console.log(message, obj)
      }else {
        console.log(message)
      }
    }
  },
 pro: (message) => {
    if (process.env.NODE_ENV === "production") {
      console.log(message)
    }
  },
}
const utils = {
  log
}
export default utils 

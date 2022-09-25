import utils, {log} from './index.js'
let str = "Ocean"
log.dev("Hello World", str)
let arr = ["Ocean", "Desert", "Valley"]
utils.log.dev('hello world', arr)
let obj = {
  firstName: "Enoch",
  lastName: "Dang"
} 
log.dev("hello world", obj)

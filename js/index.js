import { Router } from './router.js'

const router = new Router()
router.add('/', "/index.html")
router.add("/universo", "/pages/universo.html")
router.add("/explorar", "/pages/explorar.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
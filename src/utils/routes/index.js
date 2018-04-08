import RootScene from "../../Scene/RootScene/index";
import NotFound from "../../Scene/NotFoundScene/index";
import PostListScene from "../../Scene/PostListScene/index";
import DetailPostScene from "../../Scene/DetailPostScene/index";
import ControlPostForm from "../../post/components/ControlPostForm";


const routes = [
  {
    path: '/',
    component: RootScene,
  },
  {
    path: '/:categoryName?',
    component: PostListScene

  },
  {
    path: '/add/post',
    component: ControlPostForm
  },
  {
    path: '/:category/:idPost',
    component: ControlPostForm
  },
  {
    path: '/edit/post/:idPost',
    component: DetailPostScene
  },
  {
    component: NotFound
  }
]

export default routes

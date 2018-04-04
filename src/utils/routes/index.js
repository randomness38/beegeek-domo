import RootScene from "../../Scene/RootScene/index";
import NotFound from "../../Scene/NotFoundScene/index";
import PostListScene from "../../Scene/PostListScene/index";
import DetailPostScene from "../../Scene/DetailPostScene/index";

const routes = [
  {
    exact: true,
    path: '/',
    component: RootScene,
  },
  {
    exact: true,
    path: '/:categoryName',
    component: PostListScene

  },
  {
    exact: true,
    path: '/:categoryName/:idPost',
    component: DetailPostScene
  },
  {
    component: NotFound
  }
]

export default routes

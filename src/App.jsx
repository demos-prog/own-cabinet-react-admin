import jsonServerProvider from "ra-data-json-server";
import authProvider from "./components/authProvider";
import Dashboard from "./components/Dashboard";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { Admin, Resource } from "react-admin";
import { UserList, UserEdit, UserCreate } from "./components/users";
import { PostList, PostEdit, PostCreate } from "./components/posts";
import "./App.css";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="users"
        icon={UserIcon}
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource
        name="posts"
        icon={PostIcon}
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
    </Admin>
  );
}

export default App;

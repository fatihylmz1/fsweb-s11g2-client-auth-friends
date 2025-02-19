import { Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriends from "./components/AddFriends";
import LogOut from "./components/LogOut";

function App() {
  return (
    <div className="App">
      <div className="flex justify-between items-baseline mt-4">
        <h1 className="ml-20 font-bold text-3xl">FRIENDS DATABASE</h1>
        <div className="flex gap-4 mr-20">
          <Link
            to="/login"
            class="border border-black p-3 bg-black text-white"
          >
            LOGIN
          </Link>
          <Link
            to="/friendlist"
            className="border border-black p-3 bg-black text-white"
          >
            FRIENDSLIST
          </Link>
          <Link
            to="/addfriend"
            className="border border-black p-3 bg-black text-white"
          >
            ADDFRIEND
          </Link>
          <LogOut />
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friendlist" component={FriendList} />
        <PrivateRoute path="/addfriend" component={AddFriends} />
      </Switch>
    </div>
  );
}

export default App;

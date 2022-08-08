import NavigationRoutes from './navigation/NavigationRoutes';
import Home from './page/Home'
import Favorites from './page/Favorites'
const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <NavigationRoutes>
        <Home />
        <Favorites />
      </NavigationRoutes>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import BaiTapChonXe from './Pages/Homework/BaiTapChonXe';
import useEffectDemo from './Pages/Hook/UseEffectDemo/useEffectDemo';
import useStateDemo from './Pages/Hook/useStateDemo/useStateDemo';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/home' exact component={Home} />

          <Route path='/login' render={(propsRoute) => {
            return (
              <div className='container'>
                <h1>Login</h1>
                <Login {...propsRoute} />
              </div>
            )
          }} />
          <Route path='/about' exact component={About} />
          <Route path='/register' exact component={Register} />
          <Route path='/demousestate' exact component={useStateDemo} />
          <Route path='/demouseeffect' exact component={useEffectDemo} />
          <Route path='/baitapchonxe' exact component={BaiTapChonXe} />

          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

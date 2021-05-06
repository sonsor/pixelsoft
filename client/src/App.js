import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { GoogleLoginButton  } from './Components/GoogleLoginButton';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  return (
    <Container className="h-100">
      <form class="form-signin">
        <img className="mb-4" src="https://www.pixelsoft.com.sa/catalog/uploads/2016/05/logo-2.png" alt="Pixelsoft" data-src="https://www.pixelsoft.com.sa/catalog/uploads/2016/05/logo-2.png" />
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <GoogleLoginButton />
      </form>


    </Container>
        );
        }

        export default App;

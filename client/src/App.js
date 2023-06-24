import './stylesheets/alignments.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/form-elements.css';
import './stylesheets/custom-components.css';
import './pages/login'
import LoginForm from './pages/login';
import RegistrationForm from "./pages/register";
import HomePage from "./pages/home";

function App() {
  return (
    <div>

      < LoginForm />

      < RegistrationForm />

      < HomePage />

    </div>
  );
}

export default App;

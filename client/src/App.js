import './stylesheets/alignments.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/form-elements.css';
import './stylesheets/custom-components.css';
import './pages/login'
import LoginForm from './pages/login';

function App() {
  return (
    <div className="bg-primary flex justify-center items-center h-screen text-white">

      <LoginForm />

    </div>
  );
}

export default App;

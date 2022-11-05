import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';




const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <div className='page-wrapper'>
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;

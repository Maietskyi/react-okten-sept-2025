import ThemeProvider from './context/ThemeContext';
import ThemeToggleButton from "./context/ThemeToggleButton.tsx";
import ComponentLevel1 from "./components/ComponentLevel1.tsx";


const App: React.FC = () => (
    <ThemeProvider>
        <div className="p-6 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">React Theme Context</h1>
            <ThemeToggleButton />
            <ComponentLevel1 />
        </div>
    </ThemeProvider>
);

export default App;
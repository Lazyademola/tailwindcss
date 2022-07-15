import React, {useEffect,useState} from 'react'
import About from './components/about';
import HeroSection from './components/heroSection'
import Services from './components/services';
import Works from './components/works';
import Footer from './components/Footer';


function App() {
    const [theme,setTheme] = useState(null);
    useEffect(() =>{
        if(window.matchMedia('(prefers-colors-scheme: dark)').matches){
            setTheme('dark')
        }else{
            setTheme("light")
        }
    },[]);

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    })
    const handleThemeSwitch =() =>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return(
        <>
        <button
        type='button'
        onClick={handleThemeSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
        >
            {theme === "dark" ? '🌙':"☀️"}
        </button>
        <div className='font-inter bg-white dark:bg-slate-900'>
        <div className='max-w-5xl mx-auto w-11/12'>
            <HeroSection></HeroSection>
         <Services></Services>
        <Works></Works>
        <About></About>
        <Footer></Footer>
            </div>
        </div>
        </>
        
    )
}

export default App
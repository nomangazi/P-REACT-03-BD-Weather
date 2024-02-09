
import ComposeProviders from './utils/ComposeProviders';

function App() {
    // // -- Change fav icon dynamically
    // var link = document.querySelector("link[rel~='icon'");
    // link.href = "https://files.bikiran.com/assets/images/icon/icon-bik-logoV1.svg";
  return (
    <ComposeProviders components={[/** All Global Provider here */]}>
        
        <h1 className='w-full text-7xl font-bold text-center h-[86vh] inline-flex flex-col justify-center items-center gap-2'>
            <span>Hello Developers 👋</span>
            <div className='font-medium text-base text-gray-600 text-start'>This template are using vite, tailwind, react</div>
        </h1>
    </ComposeProviders>
  )
}

export default App

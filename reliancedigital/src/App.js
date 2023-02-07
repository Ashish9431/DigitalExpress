

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setIsLoading(true);
      let timer = setTimeout(() => {
          setIsLoading(false);
          return () => clearInterval(timer);
      }, 1000);
  }, []);
    return isLoading?(
      <Loader/>
    ):(
    <>
      <Navbar/>  
        <div style={{marginTop : "150px"}}></div>
        
        <AllRoutes />
    
      
      <Footer/>
    </>
    )


}

export default App;

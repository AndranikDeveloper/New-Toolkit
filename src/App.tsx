import './App.css';
import PostContainer from './components/PostContainer';

function App() {
  // const dispatch = useAppDispatch()
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  // useEffect(() => {   
  //   dispatch(fetchUser())
  // }, [])

  return (
    <div className="App">
        {/* {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {
        users.map(user => (
          <div className='users__nick' key={user.id}>{user.name}</div>
        ))} */}
  <PostContainer />
    </div>
  );
}

export default App;

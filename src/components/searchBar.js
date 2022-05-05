import React, {useState} from 'react'
import DisplayTable from './Display';

const SearchBar = () => {
const [data, setData]  = useState({});
const [username, setusername] = useState("");
const [repositories, setRepositories] = useState([])
 
const onSubmited = async (e) => {
  e.preventDefault();

  const profile = await fetch(`https://api.github.com/users/${username}`)
  const profileJson = await profile.json();
  console.log(profileJson)
  
  const repositories = await fetch(profileJson.repos_url);
  const repoJson = await repositories.json();
  console.log(repoJson)

  if (profileJson) {
    setData(profileJson);
    setRepositories(repoJson);
  }

};
return (
  <>
<div style={{padding: 20}}>
   <div  className="ui search">
    <div className='ui icon input'>
      <i className='search icon'></i>
      <input
      className='prompt'
      placeholder='Search username here...'
      type="text"
      value={username}
      onChange={(event) => setusername(event.target.value)} />
      </div>

      <button
      className='ui primary button' 
      type='submit' 
      onClick={onSubmited}>
      <i className='github icon'></i>
      Search
      </button>
      <DisplayTable data={data} repositories={repositories} />
    
  </div> 

</div>
</>



)
}
export default SearchBar;
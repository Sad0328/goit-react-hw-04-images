import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import PropTypes from 'prop-types';
import { SearchForm, SearchInput, SearchButton } from './SearchBar.styled';





const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => setInputValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
       onSubmit(inputValue);
     } 
  };
 

  return (
    <header>
      <SearchForm onSubmit={handleSubmit}>
         <SearchButton>
          <BsSearch />
        </SearchButton>
        <SearchInput
          name="searchName"
          type="text"
          id="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;



// const SearchBar = ({ onSubmit }) => {
//   const [searchName, setSearchName] = useState('');
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = event => setInputValue(event.target.value);

//   const handleSubmit = event => {
//     event.preventDefault();
//     setSearchName(inputValue.trim());
//     onSubmit(searchName);
//     event.target.reset();
//   }

//   return (
//     <header>
//       <SearchForm onSubmit={handleSubmit}>
//         <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
          
//         </a>
//         <SearchButton>
//           <BsSearch />
//         </SearchButton>
//         <SearchInput
//           name="searchName"
//           type="text"
//           id="search"
//           autocomplete="off"
//             autofocus
//             placeholder="Search images and photos"
//           value={inputValue}
//           onChange={handleChange}
//         />
//       </SearchForm>
//     </header>
//   );
// };

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

//  export default SearchBar;
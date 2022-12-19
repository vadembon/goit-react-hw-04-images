import { useState } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { SearchbarForm, Form, Button, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = evt => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.info('Please enter a name!');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarForm>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <span>
            <BsSearch size={20} />
          </span>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={searchQuery}
          onChange={handleChange}
        />
      </Form>
    </SearchbarForm>
  );
};

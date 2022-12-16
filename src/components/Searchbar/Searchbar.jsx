import { Component } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { SearchbarForm, Form, Button, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      return toast.info('Please enter a name!');
    }

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <SearchbarForm>
        <Form onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </Form>
      </SearchbarForm>
    );
  }
}

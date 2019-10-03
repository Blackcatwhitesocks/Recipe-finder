import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';


class SearchRecipes extends Component {
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormLabel>Ingrediens</FormLabel>
                    {' '} 
                    <FormControl  type="text" placeholder="garlic,chiken" />
                </FormGroup>
                {' '}
                <FormGroup>
                    <FormLabel>Dish</FormLabel>
                    {' '}
                    <FormControl type="text" placeholder="adobo"></FormControl>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }

}

export default SearchRecipes;

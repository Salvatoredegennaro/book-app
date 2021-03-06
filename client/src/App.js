import React from 'react';
import BookList from './components/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddBook from './components/AddBook';
//apollo client setup

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

class App extends React.Component{

    

    render(){
        return(
            <ApolloProvider client={client}>
               <div id='main'>
                <h1>Favourite Books</h1>
                <BookList/>
                <AddBook/>
               </div>
            </ApolloProvider>
            )
    }
}

export default App;



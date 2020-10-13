import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { bookAction } from '../redux/actions/book.action';
import Layout from '../components/layout'
import BookItem from '../components/bookItem'
const Home = () => {
  const loading = useSelector((state: any) => state.book.loading);
  const books = useSelector((state: any) => state.book.books);
  const error = useSelector((state: any) => state.book.error);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(bookAction.getBooks())



  }, [])
  return (
    <Layout title={'Home'}>
      {books && <BookItem
        books={books}


      />}


    </Layout>

  );
};

export default Home;

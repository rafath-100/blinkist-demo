import { TextField ,Grid ,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import {Search} from "@mui/icons-material";
import BookCard from "../../organisms/BookCard/BookCard";
import { Container, Box, styled, Card, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface BookDetails{
  id:number;
  imag:string;
  bookName:string;
  author:string;
  time:string;
  user:string;
  count:string;
  status:string;
  bookLabel:string;
  added:string;
}
const useStyles = makeStyles({
    input: {
       width: "563.35px",
       fontStyle:"normal",
      fontFamily:"Cera Pro",
      fontSize:"24px",
       lineHeight:"30px",
       fontWeight:"700",
       margin: "0px 24px",
       order:"1",
       border: "white",
       "&:focus": {
         outline: "none",
       },
     },
   });
const SearchBar=()=>{
    const [searchValue,setSearchValue]=useState('')
    const style = useStyles();
    const IconNText=()=>{
        return(
            <Grid container >
            <Grid item>
                <Search />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Search by title or author
              </Typography>
            </Grid>
          </Grid>
          
        )
    }
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:4005/library')
        .then(res =>res.json())
        .then(data => {
            // eslint-disable-next-line eqeqeq
            if(data != books)
                setBooks(data)
            }
            )
    },[books,searchValue])
    return(
      <>
        <TextField
            label={<IconNText />}
            variant="standard" 
            value={searchValue} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setSearchValue(event.target.value)} 
            sx={{"marginBottom":1.8,width:"30%", marginLeft:"23%","marginTop":33}} />

            

        <Grid container spacing={2} wrap="wrap" >
        {books.map((book:BookDetails) =>{
            
            if(searchValue==''){
              return <></>
            }
            else{
              if((book.bookName).toLowerCase().includes(searchValue.toLowerCase())){
                  return (
              
                    <Grid container spacing={2} wrap="wrap" sx={{marginLeft:"23%", marginTop:"4%", marginBottom:"3%"}}>
                      
                        <BookCard key={book.id} id={book.id} imag={book.imag} bookName={book.bookName} author={book.author} time={book.time} user={book.user} count={book.count} status={book.status} added={book.added} bookLabel={book.bookLabel}/>
                      
                    </Grid>
                   
                  )
              }
              if((book.author).toLowerCase().includes(searchValue.toLowerCase())){
                return(
                
                  <Grid container spacing={2} wrap="wrap" sx={{marginLeft:"23%",marginTop:"4%", marginBottom:"3%"}}>
                        
                          <BookCard key={book.id} id={book.id} imag={book.imag} bookName={book.bookName} author={book.author} time={book.time} user={book.user} count={book.count} status={book.status} added={book.added} bookLabel={book.bookLabel}/>
                        
                  </Grid>
                )
              }
          }
        })
        }
        </Grid>
        </>
    )
}
export default SearchBar;
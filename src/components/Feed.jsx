import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import VideoCard from "./VideoCard"
import { Grid, createTheme, ThemeProvider } from '@mui/material';

const customBreakpoints = {
  values: {
    xs: 0,
    sm: 0,
    md: 500,
    lg: 1024,
    xl: 1280,
  },
};

const theme = createTheme({
  breakpoints: customBreakpoints,
});

const baseURL = `https://internship-service.onrender.com/videos?`;

const Feed = () => {
    //All the 90 vidoes will be stored in Info as follows:
    const [Info, setPost] = useState([]);
    let repo = null, pg = 1, results = [];

    useEffect(() => {
        const getData = async () => {
          do {
            repo = await axios.get(`${baseURL}page=${pg}`);
            results = results.concat(repo?.data?.data?.posts);
             pg++;
          } while(pg < 10)
          setPost(results);
        };
    
        getData();
      }, []);
    
      //console.log(Info);

    return (
        <React.Fragment>
        <Header/>   
        <ThemeProvider theme={theme}>
          <Grid container spacing={{sm:4,md:12,lg:12,xl:12}} columns={{  sm: 8, md: 12, lg: 12, xl:12}}>
             {Info?.map((video, index) => (
              <Grid item sm={8} md={6} lg={4} xl={3} key={index}>
                 <VideoCard  video={video} ></VideoCard>
              </Grid>
              ))}
          </Grid>
        </ThemeProvider>
        </React.Fragment>
    );
};

export default Feed;




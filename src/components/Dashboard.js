import React, {useState} from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent  from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography  from '@mui/material/Typography';
import ArticleCard from './subcomponents/ArticleCard'
import TopNav from './subcomponents/TopNav'
import Data from '../data.json';


const Dashboard = (props) => {
    const theme = useTheme();
    console.log(Data['posts']);
    const articleData = Data['posts'];

    return(
        <>
        <TopNav></TopNav>
        {articleData.map((data,index) => {
            return <div key={index}><ArticleCard 
                                    displayname={data.displayname}
                                    username={data.username}
                                    title={data.title}
                                    description={data.description}
                                    imageArticle={data.imageArticle}></ArticleCard></div>
        })}
    </>
 
    )
}

export default Dashboard;
//landing page component with weekly lesson sector
//main job is to route to weekly lesson pages
//.map will loop through weekly lessons array to create the links for each week 
//destruction the slug and title from each object in the array ->{slug,title}
//key={slug} -> that unique key 
//link to={`/lessons/${slug}`} -> link to the path that we set up in main.jsx


import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const weeklyLessons = [
    {slug: 'week-01', title: 'Week 01: Introduction to React'},
    {slug: 'week-02', title: 'Week 02:'},
    {slug: 'week-03', title: 'Week 03:'},
    {slug: 'week-04', title: 'Week 04:'},
    {slug: 'week-05', title: 'Week 05:'},
    {slug: 'week-06', title: 'Week 06:'},
    {slug: 'week-07', title: 'Week 07:'},
    {slug: 'week-08', title: 'Week 08:'},
    {slug: 'week-09', title: 'Week 09:'},
    {slug: 'week-10', title: 'Week 10:'},
    {slug: 'week-11', title: 'Week 11:'},
]

export default function Landing() {
    return (
        <div>
        <h1> WELCOME, to our react exercises </h1>
        <div>
        <h2> Weekly Lessons: </h2>
        <ul> 
            {weeklyLessons.map(({slug,title}) => (
                <li key={slug}>
                    <Link to={`/lessons/${slug}`}>{title}</Link>
                </li>
            ))}
        </ul>
        </div>
        </div>
    );
}

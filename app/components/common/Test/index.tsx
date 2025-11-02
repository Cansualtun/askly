"use client"
import React, { useEffect } from 'react'
import { useSurveyStore } from '~/store/useSurveyStore';

const Test = () => {
    const { fetchSurveys, posts } = useSurveyStore();

    useEffect(() => {
        fetchSurveys();
        console.log("asd")
    }, [])
    console.log(posts, "dobi")
    return (

        posts.surveys && posts.surveys.map((item) => (
            <div key={item._id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))

    )
}

export default Test
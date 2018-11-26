import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import ArticleContent from './components/ArticleContent'
import ArticleData from './components/ArticleData'

class App extends Component {
  render() {
    return (
      <div>
       <Header />
           <ArticleContent />

           <ArticleData paragraph = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 betaSDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch." likes="12 Comments &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 124 Likes" title="Hello WatchKit"/>
           <ArticleData paragraph =" Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development, but it clearly reflects the intentions and the future direction. This article will revolve around the basics in the Swift language and how you can get started." likes="15 Comments &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 45 Likes" title="Introduction to Swift"/>


       </div>
    )
  }
}

export default App;
